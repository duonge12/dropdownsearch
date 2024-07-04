
import { ChangeEvent, EventHandler, ReactNode, forwardRef, useState } from "react"
import { twMerge } from "tailwind-merge";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideFileWarning, LucideLoader } from "lucide-react";
import { InputProps } from "@/interface/inputs/inputinterface";
import { EState, ETextSize } from "@/enum/enumdata";

export const SimpleInput= (
  { 
    leftSymbol,
    rightSymbol,
    textSize=ETextSize.LARGE,
    inState=EState.DEFAULT,
    ...rest }:InputProps
) => 
{
  const [currvalue,setValue]=useState('')

 
  const textSizeCSS:{[key:string]:string}={
    [ETextSize.SMALL]:` text-sm py-1 px-1`,
    [ETextSize.LARGE]:` text-lg py-1 px-1`,
    [ETextSize.XL]:` text-xl py-1 px-1`,
  }
  const backgroundCSS=`bg-gray-400 text-white w-[300px]`
  const borderCSS:{[key:string]:string}={
    [EState.DEFAULT]:` border-none`,
    [EState.ACTIVE]:` border-2 border-white`,
    [EState.DISABLE]:` border-none pointer-events-none`,
    [EState.SUCCESS]:` border-2 border-green-400`,
    [EState.ERROR]:` border-2 border-red-400`,

  }
  const textCSS:{[key:string]:string}={
    [EState.DEFAULT]:` text-white-500`,
    [EState.ACTIVE]:` text-white-500`,
    [EState.DISABLE]:` text-white-500`,
    [EState.LOADING]:` text-white-500`,
    [EState.SUCCESS]:` text-green-500`,
    [EState.ERROR]:` text-red-500`,

  }
  
  const inputStyle=twMerge(
    backgroundCSS,textSizeCSS[textSize],borderCSS[inState]
  )
  
  return (
    <div>
      <h3 className={`${textCSS[inState]}`}>Description(optional)</h3>
      <div className={`flex items-center ${inputStyle}`}>
          {leftSymbol}
          <input {...rest} className={`bg-inherit outline-none w-full`}/>
          {rightSymbol}
      </div>
      
      {(inState===EState.LOADING) &&
      <div className="items-center flex">
          <SpinnerIcon/><span className={`${textCSS[inState]}`}> Loading....</span>
      </div>
      }
      {(inState===EState.DEFAULT||inState===EState.ACTIVE||inState===EState.DISABLE) &&
      <div className="items-center flex">
          <span className={`${textCSS[inState]}`}>Hint</span>
      </div>
      }
      {(inState===EState.ERROR) &&
      <div className="items-center flex">
          <LucideFileWarning className={``}/><span className={`${textCSS[inState]}`}>Error</span>
      </div>
      }
      {(inState===EState.ERROR) &&
      <div className="items-center flex">
          <LucideCheck className={``}/><span className={`${textCSS[inState]}`}>Successed</span>
      </div>
      }
    </div>
    )
  };
