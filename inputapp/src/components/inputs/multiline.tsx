
import { ChangeEvent, ChangeEventHandler, EventHandler, ReactNode, forwardRef, useState } from "react"
import { twMerge } from "tailwind-merge";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideFileWarning, LucideLoader, Rows } from "lucide-react";
import { EState, ETextSize } from "@/enum/enumdata";
import { MultilineInputProps } from "@/interface/inputs/inputinterface";

export const MultilineInput= (
  { 
    leftSymbol,
    rightSymbol,
    textSize=ETextSize.LARGE,
    inState=EState.DEFAULT,
    maxLength,
    ...rest }:MultilineInputProps
) => 
{
  const [currCount,setCount]=useState(0)
    const handleCount=(events: ChangeEvent<HTMLTextAreaElement>)=>{
        let element= events.target
        if(element.value.length <= element.maxLength)
        {
            setCount(element.value.length)
        }
        
    }

 
  const textSizeCSS:{[key:string]:string}={
    [ETextSize.SMALL]:` text-sm py-1 px-1`,
    [ETextSize.LARGE]:` text-lg py-1 px-1`,
    [ETextSize.XL]:` text-xl py-1 px-1`,
  }
  const backgroundCSS=`bg-gray-400 text-white`
  const borderCSS:{[key:string]:string}={
    [EState.DEFAULT]:` border-none`,
    [EState.ACTIVE]:` border-2 border-white`,
    [EState.DISABLE]:` border-none pointer-events-none`,
    [EState.SUCCESS]:` border-2 border-green-400`,
    [EState.ERROR]:` border-2 border-red-400`,

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
    <div className="inline-block">
      <h3 className={`${textCSS[inState]}`}>Description(optional)</h3>
      <div className={`${inputStyle}`}>
          <textarea maxLength={maxLength} onChange={handleCount} {...rest} className="bg-inherit outline-none w-full"/>
            {(maxLength !== undefined) && <div className={`${textCSS[inState]}`}>{currCount}/{maxLength}</div>}
            
            
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
