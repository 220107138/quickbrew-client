import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import MenuPage from './pages/MenuPage/ui/MenuPage';
import { SingleItemPage } from './pages/SingleItemPage/ui/SingleItemPage';

function App() {
  return (
    <React.Fragment>
      <MenuPage />
      {/* <SingleItemPage id={0} name={'Latte'} type={'coffee'} description={'Latte description'} price={990}></SingleItemPage> */}
    </React.Fragment>
  );
}

export default App;
