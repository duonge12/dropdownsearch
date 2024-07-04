import Image from "next/image";




import { useState } from "react";




import { ButtonDestroy } from "@/components/buttons/destroybuttons";
import { SearchDrop } from "@/components/dropdowns/searchdropdown";
import { IData } from "@/interface/data/simple";




export default function Home () {
  const [state,setState] =useState('Default')
  
  const bttnDisable=()=>{
    setState('Disable')
  }
  const bttnSuccess=()=>{
    setState('Success')
  }
  const bttnError=()=>{
    setState('Error')
  }
  const bttnActive =()=>{
    setState('Active')
  }
  const bttnProcessing =()=>{
    setState('Proccessing')
  }
  let arrData : IData[]=[
    {
      name:'Louis Vuitton',
      value:'Nostalgic'
    },
    {
      name:'Hermes',
      value:'Luxury'
    },
    {
      name:'Chanel',
      value:'Stupid'
    }
  ]


  
  
  return (
      
     <>
         
       
        <div className="w-[500px] mx-auto my-auto">
          <SearchDrop data={arrData}/>
          {/* <button onClick={bttnActive}>Active</button>
          <button onClick={bttnDisable}>Disable</button>
          <button onClick={bttnSuccess}>Success</button>
          <button onClick={bttnError}>Error</button>
          <button onClick={bttnProcessing}>Processing</button> */}
   
        </div>
       
       
    


       
     </>
   
  
   
  );
}
