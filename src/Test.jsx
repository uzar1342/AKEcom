import axios from 'axios';
import React, { createContext, useContext, useEffect } from 'react'

const product=createContext(null);

const url="https://api.pujakaitem.com/api/products";
const getdata=async ( url)=>{

    const r̥es = await axios.get(url)
    const data = await r̥es.data;
    console.log("🚀 ~ getdata ~ r̥es:", data[0])

}


const Test = () => {
  
  useEffect(()=>{
    getdata(url)
  },[]) 
         
    return (
    <div>
      
    </div>
  )



}
// coustem hook

const useProducthook=()=>{
return useContext(product)
}

export  {Test , product,useProducthook}

