
import { ChangeEvent, EventHandler, ReactNode, forwardRef, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideFileWarning, LucideLoader } from "lucide-react";
import { InputProps } from "@/interface/inputs/inputinterface";
import { EState, ETextSize } from "@/enum/enumdata";


export const PhoneInput= (
  { 
    leftSymbol,
    rightSymbol,
    textSize=ETextSize.LARGE,
    inState=EState.DEFAULT,
    ...rest }:InputProps
) => 
{
  const [nation,setNation]=useState('+1')
  const [phone,setPhone]=useState('')

  const handleItemSelected=(e: ChangeEvent<HTMLSelectElement>)=>{
        setNation(e.target.value)
  }
  const handleInputOnChange=(e: ChangeEvent<HTMLInputElement>)=>{

  
      let str=e.target.value
      let char=str.substring((nation+phone).length)
      if (e.nativeEvent instanceof InputEvent && e.nativeEvent.inputType === 'deleteContentBackward') {
        // Handle backspace
        setPhone(phone.slice(0, -1)); // Remove last character from phone
      }
      else if(!isNaN(Number(char)))
      {
        setPhone(phone+char)
      }
  }
  
 

 
  return (
    <div>
      <h3 >Description(optional)</h3>
      <div >
      <select value={nation} onChange={handleItemSelected} className="bg-inherit">
            <option value="+1">+1-America</option>
            <option value="+84">+84-Vietnam</option>
            <option value="+7">+7-Russia</option>
            <option value="+39">+39-Italy</option>
            <option value="+86">China</option>
      </select>
          <input value={nation+' '+phone} onChange={handleInputOnChange} type="tel" {...rest} onBlur={handleInputOnChange} />
          {/* <input {...rest} onChange={()=>{}} value={nation+phone} className="hidden"/> */}
          
      </div>
      
      {(inState===EState.LOADING) &&
      <div className="items-center flex">
          <SpinnerIcon/><span > Loading....</span>
      </div>
      }
      {(inState===EState.DEFAULT||inState===EState.ACTIVE||inState===EState.DISABLE) &&
      <div className="items-center flex">
          <span >Hint</span>
      </div>
      }
      {(inState===EState.ERROR) &&
      <div className="items-center flex">
          <LucideFileWarning/><span >Error</span>
      </div>
      }
      {(inState===EState.SUCCESS) &&
      <div className="items-center flex">
          <LucideCheck /><span >Successed</span>
      </div>
      }
    </div>
    )
  };
