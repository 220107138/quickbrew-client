import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { SingleItemPage } from './pages/SingleItemPage/ui/SingleItemPage';

function App() {
  return (
    <React.Fragment>
      <SingleItemPage></SingleItemPage>
    </React.Fragment>
  );
}

export default App;
