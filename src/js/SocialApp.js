import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'

const DataItems=({name,link})=>{
    return(
        <div className="data-items">
            <h4 className="data-name">{name}</h4>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="use-btn">Use</div>
            </a>
        </div>
    )
}

const SocialComponent=props=>{
    let [socialApps,setSocialApps]= useState([
        {id:1, name:'GitHub',link: 'https://github.com/'},
        {id:2, name:'Stack Overflow',link: 'https://stackoverflow.com/'},
        {id:3, name:'Medium',link: 'http://medium.com/'},
        {id:4, name:'DEV community',link: 'https://dev.to/'},
        {id:5, name:'Quora',link: 'https://www.quora.com/'},
        {id:6, name:'Reddit',link: 'https://www.reddit.com/'},
        {id:7, name:'YouTube',link: 'https://youtube.com/'},
    ])
    return(
        <div id="socialCard" className="card">
            <div className="card-header d-flex justify-content-between align-items-baseline">
                <h3 className="my-heading">Social Apps</h3>
                <FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
            </div>
            <div className="card-body">
                <div className="data-section">
                    {socialApps.map(item=>{
                        return(
                            <DataItems
                            key={item.id}
                            name={item.name}
                            link={item.link}
                        />
                        ) 
                    })}
                </div>
            </div>
        </div>
    )
}

export default SocialComponent;