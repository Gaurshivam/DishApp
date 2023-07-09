import React, { useEffect, useState } from 'react';
import axios from 'axios'
import User from '../User/User';
import './Home.css'

const Home = () => {
  const [first, setfirst] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5001/posts"
    ).then((res)=>{
          console.log(res.data)
          setfirst(res.data)
    })
  },[])
  return (
    <div style={{textAlign:"center", margin:"20px auto"}}>
    <h2 className='HomeH1'>Choose Your favourite Dishes</h2>
      <User first={first}/>
    </div>
  );
}

export default Home;
