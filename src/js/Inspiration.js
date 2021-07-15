import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'

const DataItems=({name,link})=>{
    return(
        <div className="data-items">
            <h4 className="data-name">{name}</h4>
            <a href={link} target="_blank">
                <div className="use-btn">Use</div>
            </a>
        </div>
    )
}

const InsComponent=props=>{
    let [insApps,setInsApps]= useState([
        {id:1, name:'Dribble',link: 'https://dribbble.com/'},
        {id:2, name:'Behance',link: 'https://www.behance.net/'},
        {id:3, name:'Pinterest',link: 'https://www.pinterest.com/'},
        {id:4, name:'abdz.',link: 'https://abduzeedo.com/'},
        {id:5, name:'XDguru',link: 'https://www.xdguru.com/'},
        {id:6, name:'Free CSS',link: 'https://www.free-css.com/'},
        {id:7, name:'W3 Layouts',link: 'https://w3layouts.com/'},
        {id:8, name:'Up Labs',link: 'https://www.uplabs.com/'},
        {id:9, name:'UI Patterns',link: 'http://ui-patterns.com/'},
        {id:10, name:'Admin LTE',link: 'https://adminlte.io/'},
        {id:11, name:'SquareSpaces',link: 'https://www.squarespace.com/'},
        {id:12, name:'UI Design Daily',link: 'https://uidesigndaily.com/'},
        {id:13, name:'100 Daily UI',link: 'https://100dailyui.webflow.io/'},
        {id:14, name:'Sketch App Sources',link: 'https://www.sketchappsources.com/'},
        {id:15, name:'UI Space',link: 'https://uispace.net/'},
        {id:16, name:'InvisionApp',link: 'https://www.invisionapp.com/inside-design/design-resources/'},
        {id:17, name: 'Freebiesbug', link: 'https://freebiesbug.com/'}
    ])
    return(
        <div id="insCard" className="card">
            <div className="card-header d-flex justify-content-between align-items-baseline">
                <h3 className="my-heading">Inspiration</h3>
                <FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
            </div>
            <div className="card-body">
                <div className="data-section">
                    {insApps.map(item=>{
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

export default InsComponent;