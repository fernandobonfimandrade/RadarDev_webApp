import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
//componente: bloco isolada de html css e js o qual não interfere no restante da aplicação
//propriedade: informações que um componente pai passa para o componente filho
//estado:informações mantidas pelo componente (lembrar: imutabilidade)


function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub_username] = useState('');
  const [techs, set_techs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e){
    e.preventDefault();

    const response = await api.post('/devs',{
      github_username,
      techs,
      latitude,
      longitude,
    })
    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required 
              value={github_username}
              onChange={ e => setGithub_username(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required 
              value={techs}
              onChange={ e => set_techs(e.target.value)}
            />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                name="latitude" 
                type="number" 
                id="latitude" 
                required 
                value={latitude} 
                onChange={ e => setLatitude(e.target.value) }
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                name="longitude" 
                type="number"  
                id="longitude" 
                required 
                value={longitude} 
                onChange={ e => setLongitude(e.target.value) }
              />
            </div>
          </div>
          <button type="submit" >Salvar</button>
        </form>
      </aside>
      <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/4580527?s=460&v=4" alt="Fernando" />
            <div className="user-info" >
              <strong>Fernando Bonfim</strong>
              <span>PHP, NodeJS, React</span>
              <p>I love work with internet</p>
              <a href="https://github.com">https://github.com</a>
            </div>
          </header>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/4580527?s=460&v=4" alt="Fernando" />
            <div className="user-info" >
              <strong>Fernando Bonfim</strong>
              <span>PHP, NodeJS, React</span>
              <p>I love work with internet</p>
              <a href="https://github.com">https://github.com</a>
            </div>
          </header>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/4580527?s=460&v=4" alt="Fernando" />
            <div className="user-info" >
              <strong>Fernando Bonfim</strong>
              <span>PHP, NodeJS, React</span>
              <p>I love work with internet</p>
              <a href="https://github.com">https://github.com</a>
            </div>
          </header>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/4580527?s=460&v=4" alt="Fernando" />
            <div className="user-info" >
              <strong>Fernando Bonfim</strong>
              <span>PHP, NodeJS, React</span>
              <p>I love work with internet</p>
              <a href="https://github.com">https://github.com</a>
            </div>
          </header>
        </li>
      </ul>
      </main>
    </div>
  );
}

export default App;
