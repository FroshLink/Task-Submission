import React from 'react'
import './getlist.css';
export default function Getlist({ data }) {

    console.log(data)


    return (

        // <div >
        // <
        // {/* img src = { data.url }
        // alt = "hi" / >
        // <h1 > { data.title } </h1> */}
        //  </div>
        
         <div className="card" style={{width: '18rem'}}>
          
             <a href= {data.url}  aria-current="page"> <img src = {data.thumbnailUrl} className=  "card-img-top" alt="..." /></a>
        
         <div className="card-body">
           <p className="card-text">{data.title}</p>
         </div>
         
         </div>
    )}