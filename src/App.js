import { Segment } from 'semantic-ui-react';

import './App.css';
import Rotas from './Rotas';

function App() {

  return (

    <div className="App">
      
      <Rotas /> {/*Importando as rotas*/}

      <div style={{marginTop: '9%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2025 - Barbearia Chefe - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;
