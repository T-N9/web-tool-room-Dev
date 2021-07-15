import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'

const DataItems=({name,link,tag})=>{
    return(
        <div className="data-items">
            <h4 className="data-name">{name}</h4>
            <a href={link} target="_blank">
                <div className="use-btn">Use</div>
            </a>
            <p className="data-tag">{tag}</p>
        </div>
    )
}

const GameComponent=props=>{
    let [gameApps,setGameApps]= useState([
        {id:1, name:'Flexbox Froggy',link: 'https://flexboxfroggy.com/', tag: 'games game flexgame css flexbox frog flexfrog'},
        {id:2, name:'CSS Grid Garden',link: 'http://cssgridgarden.com/', tag: 'grid game games garden css'},
        {id:3, name:'CSS Colour Names', link:'https://codepo8.github.io/css-colour-names/', tag: 'game games css color colour'},
        {id:4, name:'Code Combat', link:'https://codecombat.com/', tag: 'game games'},
        {id:5, name:'Hex Invaders', link:'http://www.hexinvaders.com/', tag: 'game games'},
        {id:6, name:'Pixact', link:'https://www.pixact.ly/', tag: 'game games'},
        {id:7, name:'CSS Dinner', link:'https://flukeout.github.io/', tag: 'game games'},
        {id:8, name:'Screeps', link:'https://screeps.com/', tag: 'game games'},
        {id:9, name:'Codingame', link:'https://www.codingame.com/', tag: 'game games'},
        {id:10, name:'Flexbox Defense', link:'http://www.flexboxdefense.com/', tag: 'game games'},
        {id:11, name:'Elevator Saga', link:'http://play.elevatorsaga.com/', tag: 'game games'},
        {id:12, name:'Dungeon and Developers', link:'http://www.dungeonsanddevelopers.com/', tag: 'game games'},

    ])
    return(
        <div id="gameCard" className="card">
            <div className="card-header d-flex justify-content-between align-items-baseline">
                <h3 className="my-heading">Game</h3>
                <FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
            </div>
            <div className="card-body">
                <div className="data-section">
                    {gameApps.map(item=>{
                        return(
                            <DataItems
                            key={item.id}
                            name={item.name}
                            link={item.link}
                            tag={item.tag}
                        />
                        ) 
                    })}
                </div>
            </div>
        </div>
    )
}

export default GameComponent;