import React, { useState, useEffect } from 'react';
import Charts from './components/Charts'

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://randomuser.me/api');
      const {results} = await res.json();
      setData(results);
      
    };
    fetchData();
  }, []);
  
  
  return <>
  <h2> Random User</h2>
     {(data.map((item,index)=>{
      //  const [gender, name] = item;
       return(
         <>
         <div className="card" key={index}>
           <img src={item.picture.large} />
           <h3>{item.name.title} {item.name.first} {item.name.last}</h3>
           <p style={{textTransform: "capitalize"}} >{item.gender}  ( {item.dob.age} )</p>
           <p><strong>City :</strong>{item.location.city} <strong>State :</strong> {item.location.state} <strong>Country :</strong>{item.location.country}</p>
           <p>&#9993; {item.email}</p>
           <p>&#128222; {item.phone} | {item.cell}</p>

           {/* {console.log(index+1)} */}
         
        {/* <button onClick={(index)=>nexthandler(index)} > Next </button> */}
        </div>
         </>
       )
     }))}
     <Charts />
  </>
}
