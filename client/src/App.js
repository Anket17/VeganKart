import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from './GlobalState'
import { Helmet } from 'react-helmet'
import Header from './Components/Headers/Header'
import MainPages from './Components/MainPages/Pages'

const TITLE = 'The Vegan Kart'

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <>
            <Helmet>
              <title>{TITLE}</title>
            </Helmet>
          </>
          <Header />
          <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
