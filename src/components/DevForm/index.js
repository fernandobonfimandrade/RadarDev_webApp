import React, {useState, useEffect} from 'react';
import './styles.css';


function DevForm({onSubmit}){
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithub_username] = useState('');
    const [techs, set_techs] = useState('');

    function updateLocation(){
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
        );
      };

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

    async function handleSubmit(e){
        e.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
          });
          
        setGithub_username('');
        setLatitude('');
        setLongitude('');
        set_techs('');
    }

    return (

        
    <form onSubmit={handleSubmit}>
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
          <div className="updateLocation">
            <input type="button" value="[x]" onClick={e => updateLocation()} />
          </div>
        </div>
        <button type="submit" >Salvar</button>
    </form>
    );
}

export default DevForm;