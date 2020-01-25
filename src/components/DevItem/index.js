import React from 'react';
import './styles.css';

function DevItem({dev}){
    return (
        <li className="dev-item">
        <header>
          <img src={dev.avatar_url} alt={dev.name} />
          <div className="user-info" >
            <span>[{dev.github_username}]</span>
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer">Acesse perfil no Github</a>
          </div>
        </header>
      </li> 
    )
}

export default DevItem;