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

const IconComponent=props=>{
    let [iconApps,setIconApps]= useState([
        {id:1, name:'Flat icon',link: 'https://www.flaticon.com/'},
        {id:2, name:'Font Awesome',link: 'https://fontawesome.com/'},
        {id:3, name:'Feather icons',link: 'https://feathericons.com/'},
        {id:4, name:'Iconfinder',link: 'https://www.iconfinder.com/'},
        {id:5, name:'iconscout',link: 'https://iconscout.com/'},
        {id:6, name:'favicon.io',link: 'https://favicon.io/'},
        {id:7, name:'favicon Icon8',link: 'https://icons8.com/icons/set/favicon'},
        {id:8, name:'UX Wing',link: 'https://uxwing.com/'},
        {id:9, name:'Shapedfonts Iconclub',link: 'https://shapedfonts.com/iconclub/'},
        {id:10, name:'Tabler Icons',link: 'https://tablericons.com/'},
        {id:11, name:'Simple Icons',link: 'https://simpleicons.org/'},
        {id:12, name:'Linear Icons',link: 'https://linearicons.com/free'},
        {id:13, name:'The Noun Project',link: 'https://thenounproject.com/'},
        {id:14, name:'IconSear.ch',link: 'https://iconsear.ch/search.html'},
        {id:15, name:'Nucleo App',link: 'https://nucleoapp.com/'},
        {id:16, name:'Icon-icons',link: 'https://icon-icons.com/'},
        {id:17, name:'Bootstrap Icons',link: 'https://icons.getbootstrap.com/'},
        {id:18, name:'Remix Icon',link: 'https://remixicon.com/'},
        {id:19, name:'Iconmonstr',link: 'https://iconmonstr.com/'},
        {id:20, name:'Vivid.js',link: 'https://webkul.github.io/vivid/'},
        {id:21, name:'Lordicon',link: 'https://lordicon.com/free-icons'},
        {id:22, name:'UseAnimations',link: 'https://useanimations.com/'},
        {id:23, name:'css.gg',link: 'https://css.gg/'},
        {id:24, name:'IconBros',link: 'https://www.iconbros.com/'},
        {id:25, name:'Material Design Icons',link: 'https://materialdesignicons.com/'},
        {id:26, name:'Hero Icons',link: 'https://heroicons.dev/'},
        {id:27, name:'Zondicons',link: 'https://www.zondicons.com/icons.html'},
        {id:28, name:'Endless Icons',link: 'http://endlessicons.com/'},
        {id:29, name:'IcoMoon',link: 'https://icomoon.io/app/'},
        {id:30, name:'Eva Icons',link: 'https://akveo.github.io/eva-icons/#/'},
        {id:31, name:'Cryptoicons',link: 'http://cryptoicons.co/'},
        {id:32, name:'Ikonate',link: 'https://ikonate.com/'},
        {id:33, name:'Appicon',link: 'https://appicon.co/'},
        {id:34, name:'Lineicons',link: 'https://lineicons.com/'},
        {id:35, name:'Evericons',link: 'https://www.figma.com/resources/assets/evericons-for-figma/'},
        {id:36, name:'SVG Repo',link: 'https://www.svgrepo.com/'},
        {id:37, name:'CSS ICON',link: 'https://cssicon.space/#/'},
        {id:38, name:'Unified Icons',link: 'https://iconify.design/'},
        {id:39, name:'System UIcons',link: 'https://systemuicons.com/'},
        {id:40, name:'IconPark',link: 'https://github.com/bytedance/IconPark'},
        {id:41, name:'Redix Icons',link: 'https://icons.modulz.app/'},
        {id:42, name:'EOS Icons',link: 'https://eos-icons.com/'},
        {id:43, name:'Ionicons',link: 'https://ionicons.com/'},
        {id:44, name:'Phosphor Icons',link: 'https://phosphoricons.com/'},
        {id:45, name:'Teeny Icons',link: 'https://teenyicons.com/'},
        {id:46, name:'Lucide',link: 'https://lucide.netlify.app/'},
        {id:47, name:'Icones',link: 'https://icones.js.org/'},
        {id:48, name:'Shitty Icons',link: 'https://shittyicons.com/#/'},
        {id:49, name:'Iconspedia',link: 'https://www.iconspedia.com/'},
        {id:50, name:'iconhub',link: 'https://iconhub.io/'},
        {id:51, name:'FontIcon', link: 'https://gauger.io/fonticon/'},
        {id:52, name:'Line Awesome', link:'https://icons8.com/line-awesome'},
        {id:53, name:'Material Icons', link:'https://material.io/resources/icons/?style=baseline'},
        {id:54, name:'Zurb Foundation Icons', link:'https://zurb.com/playground/foundation-icon-fonts-3'},
        {id:55, name:'Fontisto', link:'https://fontisto.com/'},
        {id:56, name:'Boxicons', link:'https://boxicons.com/'},
        {id:57, name:'Icofont', link:'https://icofont.com/'},
        {id:58, name:'Material Palette', link:'https://www.materialpalette.com/icons'},
        {id:59, name:'Meterial Design Ionic Font', link:'http://zavoloklom.github.io/material-design-iconic-font/index.html'},
        {id:60, name:'Codicon', link:'https://microsoft.github.io/vscode-codicons/dist/codicon.html'},
        {id:61, name:'PaymentFont', link:'https://github.com/AlexanderPoellmann/PaymentFont'},
        {id:62, name:'Weather Icons', link:'https://erikflowers.github.io/weather-icons/'},
        {id:63, name:'Stroke 7', link:'https://themes-pixeden.com/font-demos/7-stroke/index.html'},
        {id:64, name:'Jam Icons', link:'https://jam-icons.com/'},
        {id:65, name:'Fontastic', link:'http://fontastic.me/'},
        {id:66, name:'Fontello', link:'https://fontello.com/'},
        {id:67, name:'Linea', link:'https://linea.io/'},
        {id:68, name:'Unicons', link:'https://iconscout.com/unicons'},
        {id:69, name:'Mobirise Icons', link:'https://mobiriseicons.com/'},
    ])
    return(
        <div id="iconCard" className="card">
            <div className="card-header d-flex justify-content-between align-items-baseline">
                <h3 className="my-heading">Icon Source</h3>
                <FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
            </div>
            <div className="card-body">
                <div className="data-section">
                    {iconApps.map(item=>{
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

export default IconComponent;