import { EState, ETextSize } from "@/enum/enumdata";
import { ISearchDrop, InputProps } from "@/interface/inputs/inputinterface";
import { SearchInput } from "../inputs/inputSearch";
import { LucideSearch } from "lucide-react";
import { ChangeEvent, EventHandler, useEffect, useState } from "react";
import { IData } from "@/interface/data/simple";
import { Li } from "./itemList/li/simpleli";


export const SearchDrop=(
{
    textSize=ETextSize.MEDIUM,
    inState=EState.DEFAULT,data,...rest
}:ISearchDrop
)=>{
    const [drop,setDrop]=useState(true)
    const [value,setValue]=useState('')

    const [list,setList]=useState<IData[]>(data as IData[])
    const [removeElement,setRemoveElement]=useState<IData>()
    const [removeList,setRemoveList]=useState<IData[]>([])
   
    const handleSearching=(e: ChangeEvent<HTMLInputElement>)=>{
        let word=e.target.value
        setValue(word)
    }
    const onDestroy=(e: React.MouseEvent<HTMLButtonElement>)=>{
        let buttonEle=e.target as HTMLButtonElement
        if(buttonEle.parentElement !== null)
        {
            let liEle=buttonEle.parentElement.parentElement
            let name=liEle?.getElementsByTagName('h1')[0].innerText
            setRemoveElement(list.find(item=> item.name===name) as IData)  
        }
    }
    useEffect(()=>{
        let newArr=list.filter(item=>item.value.toLowerCase().startsWith(value.toLowerCase()))
        setList(newArr)
    },[value.length]);
    useEffect(()=>{
        if(removeElement !== null && removeElement !== undefined)
        {
            console.log(removeElement)
            setRemoveList(prev => [...prev, removeElement]);
            console.log(removeElement)
            let newData=list.filter(item=> item.name !== removeElement.name)
            setList(newData)
            console.log(removeList)
        }
    },[removeElement?.value])
    return(
        <div className="inline-block w-full relative">

            <button onClick={handleDrop} className="w-full">
                <SearchInput textSize={ETextSize.XL} value={value} onChange={handleSearching}  id="inputID" leftSymbol={<LucideSearch/>} />
            </button>
            <ul className={`absolute ${drop ? `hidden`:`visible`} left-0 right-0`}>
                {
                   (list!== undefined)&& list.map(item =>
                        (
                            <Li key={item.name} name={item.name} onDestroy={onDestroy}>
                                <span>{item.value}</span>
                            </Li>
                        )
                    )
                }
            </ul>
        </div>
    )
    function handleDrop()
    {
        if(drop===true)
            setDrop(false)
        else
            setDrop(true)

    }
  
}