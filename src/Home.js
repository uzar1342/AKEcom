import React from 'react'
import Herosection from './components/Herosection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';






function Home() {
  const data={
    name:'Ak Store'
  }



  return (
    <>
    <Herosection mydata={data}/>
    <FeatureProduct/>
    <Services />
    <Trusted/>
   </> 
  )
}

export default Home
