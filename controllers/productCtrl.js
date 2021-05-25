const Products = require('../models/productModel');


class APIFeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString}
        // console.log({before: queryObj})
        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(e1 => delete(queryObj[e1]))

        // console.log({after: queryObj})

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        // console.log({queryObj, queryStr})


        // gte = Greater than or equal
        // lte = lesser than or equal
        // lt = lesser than
        // gt = Greater than

        this.query.find(JSON.parse(queryStr))

       


        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)

        }else{
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}


const productCtrl = {
    getProducts : async(req, res) =>{
        try {

            const features = new APIFeatures(Products.find(), req.query)
            .filtering().sorting().paginating()
          const products = await features.query

          res.json({
              status: 'Success',
              result: products.length,
              products: products
          })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createProduct: async(req, res) =>{
        try {
            const { product_id, title, price, description, content, images, category} = req.body;
            if(!images)  return res.status(400).json({msg: "No image Upload"})

            const product = await Products.findOne({product_id})
            if(product) 
                return res.status(400).json({msg : "Product already exists."})

                const newProduct = new Products({
                    product_id,  title: title.toLowerCase(), price, description, content, images, category
                })
                await newProduct.save()
                res.json({msg: 'Created a Product'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deletProduct : async(req, res) =>{
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted the Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct : async(req, res) =>{
        try {
            const { product_id, title, price, description, content, images, category} = req.body;
            if(!images) return res.status(400).json({msg: "No image Upload"})

            await Products.findOneAndUpdate({_id: req.params.id},{
                title: title.toLowerCase(), price, description, content, images, category
            })

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
    

}

module.exports= productCtrl