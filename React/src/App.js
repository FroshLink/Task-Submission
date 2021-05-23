import React, { useState,useEffect } from "react";
import Album from "./album";

const App=()=>{
  const [person, setTitle] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(async ()=>{
    setLoading(true);
    const url = "https://jsonplaceholder.typicode.com/photos";
    const response = await fetch(url);
    const data = await response.json();
    
    if(data.length > 0) {
      setTitle(data)
      setLoading(false)
    }
  }, [])

  return (
    <div className="App"> 
      {loading ? <div>loading...</div>:
        person.map((x, y)=>{
         return (
           <Album key={y} title={x.title} thumbnailUrl={x.url} />
         ) })
      }
    </div>
  )
}

export default App