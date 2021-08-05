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

const DevComponent=props=>{
    let [devApps,setDevApps]= useState([
        {id:1, name:'w3schools',link: 'https://www.w3schools.com/',tag:'dev guide learning self-study'},
        {id:2, name:'CSS-tricks',link: 'https://css-tricks.com/',tag:'dev guide documentation learning frontend blog'},
        {id:3, name:'MDN Web Docs',link: 'https://developer.mozilla.org/en-US/',tag:'dev guide documentation learning blog self-study'},
        {id:4, name:'JavaScript.info',link: 'https://javascript.info/',tag:'dev guide documentation blog self-study'},
        {id:5, name:'A Programmer',link: 'https://www.aprogrammer.blog/',tag:'dev guide self-study course learning myanmar'},
        {id:6, name:'DevNote',link: 'https://devnote.blog/',tag:'dev guide self-study blog learning myanmar'},
        {id:7, name:'MMS IT',link: 'https://mms-it.com/',tag:'dev devchoice guide self-study course free learning myanmar heinhtetzan'},
        {id:8, name:'Tech Guru',link: 'https://mmtechguru.com/',tag:'dev guide self-study course free learning myanmar'},
        {id:9, name:'Ei Maung',link: 'https://eimaung.com/',tag:'dev guide self-study course free books လိုတိုရှင်း ဆရာအိမောင် learning myanmar'},
        {id:10, name:'Exploring JS',link: 'https://exploringjs.com/',tag:'dev guide self-study book learning'},
        {id:11, name:'Frontend Masters',link: 'https://frontendmasters.com/',tag:'dev guide self-study course learning frontend'},
        {id:12, name:'Free Dev Stuff',link: 'https://freestuff.dev/',tag:'dev guide stuff tools'},
        {id:13, name:'Speaking JS',link: 'http://speakingjs.com/',tag:'dev guide book self-study learning'},
        {id:14, name:'Grid by Example',link: 'https://gridbyexample.com/examples/',tag:'dev guide learning knowledge frontend'},
        {id:15, name:'JSON Beautifier',link: 'https://csvjson.com/json_beautifier',tag:'dev guide beautify csv convert generator'},
        {id:16, name:'Glitch',link: 'https://glitch.com/',tag:'dev code playground'},
        {id:17, name:'UI Pattern',link: 'https://codepen.io/topics/ui-pattern',tag:'dev guide codepen frontend learning'},
        {id:18, name:'Code Pen',link: 'https://codepen.io/',tag:'dev guide social frontend learning code playground'},
        {id:19, name:'CodeSandBox',link: 'https://codesandbox.io/',tag:'dev guide social frontend collaboration code playground'},
        {id:20, name:'JS Fiddle',link: 'https://jsfiddle.net/',tag:'dev guide social frontend collaboration code playground'},


    ])
    return(
        <div id="devCard" className="card">
            <div className="card-header d-flex justify-content-between align-items-baseline">
                <h3 className="my-heading">Dev Guide</h3>
                <FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
            </div>
            <div className="card-body">
                <div className="data-section">
                    {devApps.map(item=>{
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

export default DevComponent;