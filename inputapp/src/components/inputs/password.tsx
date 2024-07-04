import { EInputType } from "@/enum/enumdata";
import { error } from "console";
import { Formik } from "formik";
import { ChangeEvent, EventHandler, ReactNode, forwardRef, useState } from "react"
import { twMerge } from "tailwind-merge";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideEye, LucideEyeOff, LucideFileWarning, LucideLoader } from "lucide-react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   
    hasLeftSymbol?:ReactNode
    textSize?:'large'|'xl'|'small'
    inState?:string
  }
export const PassWordInput= (
  { 
    hasLeftSymbol,
    textSize='large',
    inState='Default',
    ...rest }:InputProps
) => 
{
  const [eye,setOpen]=useState(true)

 
  const textSizeCSS:{[key:string]:string}={
    ["small"]:` text-sm py-1 px-1`,
    ["large"]:` text-lg py-1 px-1`,
    ["xl"]:` text-xl py-1 px-1`,
  }
  const backgroundCSS=`bg-gray-400 text-white w-[300px]`
  const borderCSS:{[key:string]:string}={
    ['Default']:` border-none`,
    ['Active']:` border-2 border-white`,
    ['Disable']:` border-none pointer-events-none`,
    ['Success']:` border-2 border-green-400`,
    ['Error']:` border-2 border-red-400`,

  }
  const textCSS:{[key:string]:string}={
    ['Default']:` text-white-500`,
    ['Active']:` text-white-500`,
    ['Disable']:` text-white-500`,
    ['Success']:` text-green-500`,
    ['Error']:` text-red-500`,

  }
  
  const inputStyle=twMerge(
    backgroundCSS,textSizeCSS[textSize],borderCSS[inState]
  )
  
  return (
    <div>
      <h3>Description</h3>
      <div className={`flex items-center ${inputStyle}`}>
          {hasLeftSymbol}
          <input {...rest} type={eye ? "text":"password"} className={`bg-inherit outline-none w-full`}/>
          {eye && <button onClick={()=>setOpen(false)}> <LucideEye cursor={"pointer"}/></button>}
          {!eye && <button onClick={()=>setOpen(true)}> <LucideEyeOff cursor={"pointer"}/></button>}
            
      </div>
      
      {(inState==='Proccessing') &&
      <div className="items-center flex">
          <SpinnerIcon/><span className={`${textCSS[inState]}`}> Loading....</span>
      </div>
      }
      {(inState==='Default'||inState==='Active'||inState==='Filled' ||inState==='Disable') &&
      <div className="items-center flex">
          <span className={`${textCSS[inState]}`}>Hint</span>
      </div>
      }
      {(inState==='Error') &&
      <div className="items-center flex">
          <LucideFileWarning className={``}/><span className={`${textCSS[inState]}`}>Error</span>
      </div>
      }
      {(inState==='Success') &&
      <div className="items-center flex">
          <LucideCheck className={``}/><span className={`${textCSS[inState]}`}>Successed</span>
      </div>
      }
    </div>
    )
  };
