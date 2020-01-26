import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


import DevForm from './components/DevForm';
import DevItem from './components/DevItem';
library.add(fab, faMapMarkerAlt)
//componente: bloco isolada de html css e js o qual não interfere no restante da aplicação
//propriedade: informações que um componente pai passa para o componente filho
//estado:informações mantidas pelo componente (lembrar: imutabilidade)


function App() {
  const [devs, setDevs] = useState([]);



  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  function findDevDom(id){
    let found = false;
    devs.forEach(element => {
      if(element._id === id){
        found = true;
      }
    });
    return found;
  }

  async function handleAddDev(data){
    const response = await api.post('/devs', data)
    if(!findDevDom(response.data._id)){
      setDevs([response.data,...devs])
    }
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
      <ul>
        {devs.map(dev => (
          <DevItem key={dev._id} dev={dev} />
        ))}

      </ul>
      </main>
    </div>
  );
}

export default App;
