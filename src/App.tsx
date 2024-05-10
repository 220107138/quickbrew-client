import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { SingleItemPage } from './pages/SingleItemPage/ui/SingleItemPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CategoryCatalog from './widgets/CategoryCatalog';

function App() {
  return (
    <React.Fragment>
      <SingleItemPage id={0} name={'Latte'} type={'coffee'} description={'Latte description'} price={990}></SingleItemPage>
    </React.Fragment>
  );
}

export default App;
