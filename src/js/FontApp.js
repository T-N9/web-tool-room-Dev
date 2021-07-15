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

const FontComponent=props=>{
    let [fontApps,setFontApps]= useState([
        {id:1, name:'Google Fonts',link: 'https://fonts.google.com/'},
        {id:2, name:'Da Font',link: 'https://www.dafontfree.io/'},
        {id:3, name:'1001 Fonts',link: 'https://www.1001fonts.com/'},
        {id:4, name:'1001 Free Fonts',link: 'https://www.1001freefonts.com/'},
        {id:5, name:'Font Pair',link: 'https://fontpair.co/'},
        {id:6, name:'MyanUnicode Fonts',link: 'https://saturngod.github.io/myanmar-unicode-fonts/'},
        {id:7, name:'Fonts Squirrel',link: 'https://www.fontsquirrel.com/'},
        {id:8, name:'typ.io',link: 'http://typ.io/'},
        {id:9, name:'Use & Modify', link: 'https://usemodify.com/'},
        {id:10, name:'Font Fabric', link: 'https://www.fontfabric.com/'},
        {id:11, name:'Tiff', link: 'https://tiff.herokuapp.com/'},
        {id:12, name:'TypeKit Practice', link: 'https://practice.typekit.com/'},
        {id:13, name:'FontJoy', link: 'https://fontjoy.com/'},
        {id:14, name:'Golden Ratio', link: 'https://grtcalculator.com/'},
        {id:15, name:'FontSpark', link: 'https://fontspark.app/'},
        {id:16, name:'FontGet', link: 'https://www.fontget.com/'},
        {id:17, name:'Font Space', link: 'https://www.fontspace.com/'},
        {id:18, name:'Abstract Fonts', link: 'http://www.abstractfonts.com/'},
        {id:19, name:'Free Typography', link: 'https://freetypography.com/'},
        {id:20, name:'Leon Sans', link: 'https://leon-kim.com/'},
        {id:21, name:'Lexend', link: 'https://www.lexend.com/'},
        {id:22, name:'Fonts for Apple Platforms', link: 'https://developer.apple.com/fonts/'},
        {id:23, name:'SFWin', link: 'https://github.com/blaisck/sfwin/'},
        {id:24, name:'Font Flipper', link: 'https://fontflipper.com/upload'},
        {id:25, name:'Fonts Arena', link: 'https://fontsarena.com/'},
        {id:26, name:'BE Fonts', link: 'https://befonts.com/'},
        {id:27, name:'FontDrop', link: 'https://fontdrop.info/'},
        {id:28, name:'Open Foundry', link: 'https://open-foundry.com/'},
        {id:29, name:'Glyphter', link: 'https://glyphter.com/'},
        {id:30, name:'Google Webfonts Helper', link: 'https://google-webfonts-helper.herokuapp.com/fonts'},
        {id:31, name:'Rough Font Awesome', link: 'https://djamshed.github.io/rough-awesome-font/dist/'},
        {id:32, name:'FFonts', link: 'https://www.ffonts.net/'},
        {id:33, name:'Dev Fonts', link: 'https://devfonts.gafi.dev/'},
        {id:34, name:'WhatTheFont', link: 'https://www.myfonts.com/WhatTheFont/'},
        {id:35, name:'Variable Fonts', link: 'https://v-fonts.com/'},
    ])
    return(
        <div id="fontCard" className="card">
            <div className="card-header d-flex justify-content-between align-items-baseline">
                <h3 className="my-heading">Font Source</h3>
                <FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
            </div>
            <div className="card-body">
                <div className="data-section">
                    {fontApps.map(item=>{
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

export default FontComponent;