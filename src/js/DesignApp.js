import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'

const DataItems=({name,link,tag})=>{
    return(
        <div className="data-items">
            <h4 className="data-name">{name}</h4>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="use-btn">Use</div>
            </a>
            <p className="data-tag">{tag}</p>
        </div>
    )
}

const DesignComponent=props=>{
    let [designApps,setDesignApps]= useState([
        {id:1, name:'Canva',link: 'https://www.canva.com/',tag:'design logo tool graphic'},
        {id:2, name:'get-waves',link: 'http://getwaves.io/',tag:'design generator background svg'},
        {id:3, name:'Animate CSS',link: 'https://animate.style/',tag:'design cssanimation'},
        {id:4, name:'Imagehover CSS',link: 'https://www.imagehover.io/',tag:'design cssanimation'},
        {id:5, name:'CSS spinners',link: 'https://projects.lukehaas.me/css-loaders/',tag:'design loading'},
        {id:6, name:'SpinKit',link: 'https://tobiasahlin.com/spinkit/',tag:'design loading'},
        {id:7, name:'Loading.io',link: 'https://loading.io/',tag:'design'},
        {id:8, name:'Box Shadow Gen',link: 'https://html-css-js.com/css/generator/box-shadow/',tag:'design generator'},
        {id:9, name:'Text Shadow Gen',link: 'https://html-css-js.com/css/generator/text-shadow/',tag:'design generator'},
        {id:10, name:'CSS Gird Gen',link: 'https://cssgrid-generator.netlify.app/',tag:'design generator'},
        {id:11, name:'w3 Scrollbar Gen',link: 'https://w3generator.com/scrollbar',tag:'design generator'},
        {id:12, name:'SF Scrollbar Gen',link: 'http://webkit-scroll-gen.sourceforge.net/',tag:'design generator'},
        {id:13, name:'DataTables',link: 'https://datatables.net/',tag:'design tool'},
        {id:14, name:'loremipsum.io',link: 'https://loremipsum.io/',tag:'design text generator'},
        {id:15, name:'Patternico',link: 'https://patternico.com/',tag:'design'},
        {id:16, name:'PatternPad',link: 'https://patternpad.com/',tag:'design'},
        {id:17, name: 'Dimensions', link: 'https://www.dimensions.com/',tag:'design'},
        {id:18, name: 'SVG 2 JSX', link: 'https://svg2jsx.com/',tag:'design'},
        {id:19, name: 'Clippy', link: 'https://bennettfeely.com/clippy/',tag:'design'},
        {id:20, name: 'Type Scale', link: 'https://type-scale.com/',tag:'design'},
        {id:21, name: 'Typographic Scale Calculator', link: 'https://www.layoutgridcalculator.com/typographic-scale/',tag:'design'},
        {id:22, name: 'CSS Scan Box Shadow', link: 'https://getcssscan.com/css-box-shadow-examples',tag:'design'},
        {id:23, name: 'Particles JS', link: 'https://vincentgarreau.com/particles.js/',tag:'design background animation living vincentgarreau'},
        {id:24, name: 'Inixia Web Background', link: 'https://websitebackgroundmaker.com/',tag:'design background animation bubble floating particle'},
        {id:25, name: 'Bacon Ipsum', link: 'https://baconipsum.com/',tag:'design text paragraph lorem generator'},
        {id:26, name: 'Pirate Ipsum', link: 'https://pirateipsum.me/',tag:'design text paragraph lorem generator'},

    ])
    return(
        <div id="designCard" className="card">
            <div className="card-header d-flex justify-content-between align-items-baseline">
                <h3 className="my-heading">Design Tools</h3>
                <FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
            </div>
            <div className="card-body">
                <div className="data-section">
                    {designApps.map(item=>{
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

export default DesignComponent;