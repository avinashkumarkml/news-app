import React, { useState, useEffect } from 'react'
import axios from 'axios';

const News = () => {
    const [value,setValue] =useState([]) 
    useEffect(()=>{
        const loadNews = async () =>{
            const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-07-03&sortBy=publishedAt&apiKey=1abf64a527194724a9cbd93c2dae699e")

            // setValue(response.data);
            console.log(response.data.articles);
        }
        loadNews()
    },[])

  return (
    <>
    
    <h1>Hello World{value}</h1>
    </>
  )
}

export default News