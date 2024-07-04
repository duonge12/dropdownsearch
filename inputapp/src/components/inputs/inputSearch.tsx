
import { EState, ETextSize } from "@/enum/enumdata";
import { InputProps } from "@/interface/inputs/inputinterface";
import { ChangeEvent, EventHandler, ReactNode, forwardRef, useState } from "react"
import { twMerge } from "tailwind-merge";



export const SearchInput= (
{ 
    leftSymbol,
    rightSymbol,
    textSize=ETextSize.LARGE,
    inState=EState.DEFAULT,
    ...rest }:InputProps
) => 
{
  const [currvalue,setValue]=useState('')

  const baseLayout=`flex item-center w-full`
  const textSizeCSS:{[key:string]:string}={
    [ETextSize.SMALL]:` text-sm py-1 px-1`,
    [ETextSize.LARGE]:` text-lg py-1 px-1`, 
    [ETextSize.XL]:` text-xl py-1 px-1`,
  }
  const borderCSS:{[key:string]:string}={
    [EState.DEFAULT]:` border-none box-border bg-grey-20`,
    [EState.ACTIVE]:` border-2 border-mint-300 box-border bg-grey-20`,
    [EState.DISABLE]:` border-none pointer-events-none box-border bg-grey-20`,
    [EState.SUCCESS]:` border-2 border-green-400 box-border`,
    [EState.ERROR]:` border-2 border-red-400 box-border`,

  }
  const textCSS:{[key:string]:string}={
    [EState.DEFAULT]:` text-grey-70 `,
    [EState.ACTIVE]:` text-grey-70`,
    [EState.DISABLE]:` text-grey-50`,
    [EState.SUCCESS]:` text-green-500`,
    [EState.ERROR]:` text-red-500`,

  }
  
  const inputStyle=twMerge(
    baseLayout,textSizeCSS[textSize],borderCSS[inState],textCSS[inState]
  )
  
  return (
   
      <div className={inputStyle}>
          {leftSymbol}
          <input placeholder="Type here...." {...rest} className={`bg-inherit outline-none w-full`}/>
          {rightSymbol}
      </div>
   
    )
  };
