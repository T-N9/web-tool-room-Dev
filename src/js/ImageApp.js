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

const ImageComponent=props=>{
    let [imgApps,setImgApps]= useState([
        {id:1, name:'Pexels',link: 'https://www.pexels.com/'},
        {id:2, name:'pixabay',link: 'https://pixabay.com/'},
        {id:3, name:'Pinterest',link: 'https://www.pinterest.com/'},
        {id:4, name:'Unsplash',link: 'https://unsplash.com/'},
        {id:5, name:'Adobe Stock',link: 'https://stock.adobe.com/'},
        {id:6, name:'Freestock',link: 'https://www.freestock.com/'},
        {id:7, name:'picjumbo',link: 'https://picjumbo.com/'},
        {id:8, name:'Stocksnap',link: 'https://stocksnap.io/'},
        {id:9, name:'PNG Tree',link: 'https://pngtree.com/'},
        {id:10, name:'Magdeleine', link:'https://magdeleine.co/'},
        {id:11, name:'Picspree', link:'https://picspree.com/en'},
        {id:12, name:'Burst', link:'https://burst.shopify.com/'},
        {id:13, name:'Gratisography', link:'https://gratisography.com/'},
        {id:14, name:'Life of Pix', link:'https://www.lifeofpix.com/'},
        {id:15, name:'Stock Snap', link:'https://stocksnap.io/'},
        {id:16, name:'Morguefile', link:'https://morguefile.com/'},
        {id:17, name:'Kaboom Pics', link:'https://kaboompics.com/'},
        {id:18, name:'New Old Stock', link:'https://nos.twnsnd.co/'},
        {id:19, name:'Public Domain Pictures', link:'https://www.publicdomainpictures.net/en/'},
        {id:20, name:'Find a Photo', link:'https://www.chamberofcommerce.org/findaphoto/'},
        {id:21, name:'Stockvault', link:'https://www.stockvault.net/'},
        {id:22, name:'Placeholder', link:'https://placeholder.com/'},
        {id:23, name:'Realistic Shots', link:'https://realisticshots.com/'},
        {id:24, name:'Negative Space', link:'https://negativespace.co/'},
        {id:25, name:'SkitterPhoto', link:'https://skitterphoto.com/'},
        {id:26, name:'Picography', link:'https://picography.co/'},
        {id:27, name:'Wunder Stock', link:'https://wunderstock.com/'},
        {id:28, name:'PxHere', link:'https://pxhere.com/'},
        {id:29, name:'Piqsels', link:'https://www.piqsels.com/'},
        {id:30, name:'Foodiesfeed', link:'https://www.foodiesfeed.com/'},
        {id:31, name:'Nappy', link:'https://www.nappy.co/'},
        {id:32, name:'Generated Photos', link:'https://generated.photos/'},
        {id:33, name:'Reshot', link:'https://www.reshot.com/'},
        {id:34, name:'Free Images', link:'https://www.freeimages.com/'},
        {id:35, name:'Lorem Picsum', link:'https://picsum.photos/'},
        {id:36, name:'ScienceImage', link:'https://www.scienceimage.csiro.au/'},
        {id:37, name:'Integration & Application Network Image Library', link:'https://ian.umces.edu/imagelibrary/'},
        {id:38, name:'Saxifraga',link:'http://www.freenatureimages.eu/'},
        {id:39, name:'Creative Commons', link:'https://search.creativecommons.org/'},
    ])
    return(
        <div id="imgCard" className="card">
            <div className="card-header d-flex justify-content-between align-items-baseline">
                <h3 className="my-heading">Image Source</h3>
                <FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
            </div>
            <div className="card-body">
                <div className="data-section">
                    {imgApps.map(item=>{
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

export default ImageComponent;