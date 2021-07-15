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

const IllComponent=props=>{
    let [illApps,setIllApps]= useState([
        {id:1, name:'unDraw',link: 'https://undraw.co/'},
        {id:2, name:'Flexiple',link: 'https://2.flexiple.com/scale/all-illustrations'},
        {id:3, name:'Lukasz Adam',link: 'https://lukaszadam.com/'},
        {id:4, name:'Open Doodles',link: 'https://www.opendoodles.com/'},
        {id:5, name:'Freepik',link: 'https://www.freepik.com/'},
        {id:6, name:'vexels',link: 'https://www.vexels.com/'},
        {id:7, name:'Vector.me',link: 'https://vector.me/'},
        {id:8, name:'365psd',link: 'https://365psd.com/'},
        {id:9, name:'Subtle Patterns',link: 'https://www.toptal.com/designers/subtlepatterns/'},
        {id:10, name: 'Humaaans', link:'https://www.humaaans.com/'},
        {id:11, name: 'Paaatterns', link:'https://products.ls.graphics/paaatterns/'},
        {id:12, name: 'The Pattern Library', link:'http://thepatternlibrary.com/'},
        {id:13, name: '404 Illustration', link:'https://error404.fun/'},
        {id:14, name: 'DrawKit', link:'https://www.drawkit.io/'},
        {id:15, name: 'Absurd.Design', link:'https://absurd.design/'},
        {id:16, name: 'Many Pixels',link:'https://www.manypixels.co/gallery/'},
        {id:17, name: 'Open Peeps',link:'https://www.openpeeps.com/'},
        {id:18, name: 'Animaticons',link:'https://animaticons.co/'},
        {id:19, name: 'Avataaars',link:'https://avataaars.com/'},
        {id:20, name: 'ISO Flat',link:'https://isoflat.com/'},
        {id:21, name: 'IRA Design',link:'https://iradesign.io/'},
        {id:22, name: 'Storytale',link:'https://storytale.io/freebies/'},
        {id:23, name: 'Icon8',link:'https://icons8.com/illustrations'},
        {id:24, name: 'Free Illustration',link:'https://freellustrations.com/'},
        {id:25, name: 'Pixeltrue',link:'https://www.pixeltrue.com/free-illustrations'},
        {id:26, name: 'Abstract User Avatar API',link:'https://www.abstractapi.com/user-avatar-api'},
        {id:27, name: 'Sketchvalley',link:'https://sketchvalley.com/'},
        {id:28, name: 'Vecteezy', link: 'https://www.vecteezy.com/'},
        {id:29, name: 'Free Vectors', link: 'https://www.freevectors.net/'},
        {id:30, name: 'Vector4Free', link: 'https://www.vector4free.com/'},
        {id:31, name: 'Retro Vectors', link: 'http://retrovectors.com/'},
        {id:32, name: 'Freebbbble', link: 'http://freebbble.com/'},
        {id:34, name: 'Illustrations', link: 'https://illlustrations.co/'},
        {id:35, name: 'Clipart', link: 'https://www.clipart.email/'},
        {id:36, name: 'Growwwwkit', link: 'https://growwwkit.com/illustrations/phonies'},
        {id:37, name: 'Trianglify', link: 'https://trianglify.io/'},
        {id:38, name: 'Blobs', link: 'https://blobs.app/'},
        {id:39, name: 'HiClipart', link: 'https://www.hiclipart.com/'},
        {id:40, name: 'Storyset', link: 'https://storyset.com/'},
        {id:41, name: 'Black Illustrations', link: 'https://www.blackillustrations.com/'},
        {id:42, name: 'Delesign', link: 'https://delesign.com/free-designs/graphics'},
        {id:43, name: 'Shape Divider', link: 'https://www.shapedivider.app/'},
        {id:44, name: 'Smart Servier Medical Art', link: 'https://smart.servier.com/'},
        {id:45, name: 'Clker', link: 'http://www.clker.com/'},
        {id:46, name: 'SVG Wave', link: 'https://svgwave.in/'},
        {id:47, name: 'Heritage Library', link: 'https://www.heritagetype.com/collections/free-vintage-illustrations'},
        {id:48, name: 'Robohash', link: 'https://robohash.org/'},
        {id:49, name: 'WilliamSharkey', link: 'http://williamsharkey.com/Shapes.html'},
        {id:50, name: 'Transparent Textures', link: 'https://www.transparenttextures.com/'},

    ])
    return(
        <div id="illCard" className="card">
            <div className="card-header d-flex justify-content-between align-items-baseline">
                <h3 className="my-heading">Illustration</h3>
                <FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
            </div>
            <div className="card-body">
                <div className="data-section">
                    {illApps.map(item=>{
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

export default IllComponent;