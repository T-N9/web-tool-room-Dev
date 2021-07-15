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

const ColorComponent=props=>{
    let [colorApps,setColorApps]= useState([
        {id:1, name:'uiGradients',link: 'https://uigradients.com/'},
        {id:2, name:'HTML Color Codes',link: 'https://htmlcolorcodes.com/'},
        {id:3, name:'Coolors',link: 'https://coolors.co/'},
        {id:4, name:'Colorsinspo',link: 'https://colorsinspo.com/'},
        {id:5, name:'Gradient Magic',link: 'https://www.gradientmagic.com/'},
        {id:6, name:'Adobe Colorwheel',link: 'https://color.adobe.com/create/color-wheel'},
        {id:7, name:'Material Color',link: 'https://material.io/resources/color/'},
        {id:8, name:'Web Gradients',link: 'https://webgradients.com/'},
        {id:9, name:'ColorSpark',link: 'https://colorspark.app/'},
        {id:10, name:'Color Brewer 2', link:'https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3'},
        {id:11, name:'Colormind', link:'http://colormind.io/'},
        {id:12, name:'ColorCurves', link:'https://colorcurves.app/'},
        {id:13, name:'Colors and Fonts', link:'https://www.colorsandfonts.com/'},
        {id:14, name:'Palette List', link:'https://www.palettelist.com/'},
        {id:15, name:'Material Palette', link:'https://www.materialpalette.com/'},
        {id:16, name:'Flat UI Colors', link:'https://flatuicolors.com/'},
        {id:17, name:'ColorsWall', link:'https://colorswall.com/'},
        {id:18, name:'Happy Hues', link:'https://www.happyhues.co/'},
        {id:19, name:'Adobe Trends', link:'https://color.adobe.com/trends'},
        {id:20, name:'Color Hunt', link:'https://colorhunt.co/'},
        {id:21, name:'Gradient Hunt', link:'https://gradienthunt.com/'},
        {id:22, name:'ColorBox', link:'https://colorbox.io/'},
        {id:23, name:'CSS Gradient', link:'https://cssgradient.io/'},
        {id:24, name:'gradienta', link:'https://gradienta.io/'},
        {id:25, name:'Palette Generator', link:'https://palettegenerator.colorion.co/'},
        {id:26, name:'Material Colorion', link:'https://material.colorion.co/'},
        {id:27, name:'Grabient', link:'https://www.grabient.com/'},
        {id:28, name:'Shade Swash', link:'https://shadeswash.netlify.app/'},
        {id:29, name:'BrandColors', link:'http://brandcolors.net/'},
        {id:30, name:'Brand Palettes', link:'https://brandpalettes.com/'},
        {id:31, name:'Material Design Palette Generator', link:'http://mcg.mbitson.com/'},
        {id:32, name:'colorate', link:'https://colorate.azurewebsites.net/'},
        {id:33, name:'0to255', link:'https://www.0to255.com/'},
        {id:34, name:'Color Blender', link:'https://meyerweb.com/eric/tools/color-blend'},
        {id:35, name:'Gradient Buttons', link:'https://gradientbuttons.colorion.co/'},
        {id:36, name:'khroma', link:'http://khroma.co/'},
        {id:37, name:'whocanuse', link:'https://whocanuse.com/'},
        {id:38, name:'Colorable', link:'https://colorable.jxnblk.com/'},
        {id:39, name:'Color Hex Picker', link:'https://colorhexpicker.com/'},
        {id:40, name:'saruwakakun', link:'https://saruwakakun.com/en/color-ideas'},
        {id:41, name:'Paletton', link:'https://paletton.com/'},
        {id:42, name:'ColorZilla', link:'https://www.colorzilla.com/'},
        {id:43, name:'Image Color Picker', link:'https://image-color.com/'},
        {id:44, name:'CombineCOLORS', link:'https://combinecolors.com/'},
        {id:45, name:'COLOUR Lovers', link:'https://www.colourlovers.com/palettes'},
        {id:46, name:'HTML CSS Color', link:'https://www.htmlcsscolor.com/'},
        {id:47, name:'HEX Color Codes', link:'https://hexcolorcodes.org/'},
        {id:48, name:'CoolHue', link:'https://webkul.github.io/coolhue/'},
        {id:49, name:'Colors.lol', link:'https://colors.lol/'},
        {id:50, name:'Dopely Colors', link:'https://colors.dopely.top/'},
        {id:51, name:'UI Color Picker', link:'https://uicolorpicker.com/'},
        {id:52, name:'color-hex', link:'https://www.color-hex.com/'},
        {id:53, name:'FarbVelo', link:'https://farbvelo.elastiq.ch/'},
        {id:54, name:'Palettab', link:'https://palettab.com/'},
    ])
    return(
        <div id="colorCard" className="card">
            <div className="card-header d-flex justify-content-between align-items-baseline">
                <h3 className="my-heading">Color Tools</h3>
                <FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
            </div>
            <div className="card-body">
                <div className="data-section">
                    {colorApps.map(item=>{
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

export default ColorComponent;