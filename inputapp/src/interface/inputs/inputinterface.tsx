import { EState, ETextSize } from "@/enum/enumdata"
import { ReactNode } from "react"
import { IData } from "../data/simple"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   
    leftSymbol?:ReactNode
    rightSymbol?:ReactNode
    textSize?:ETextSize.SMALL|ETextSize.MEDIUM|ETextSize.LARGE|ETextSize.XL
    inState?:EState.DEFAULT|EState.ACTIVE|EState.DISABLE|EState.ERROR|EState.LOADING|EState.SUCCESS
}
export interface MultilineInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

    leftSymbol?:ReactNode
    rightSymbol?:ReactNode
    textSize?:ETextSize.SMALL|ETextSize.MEDIUM|ETextSize.LARGE|ETextSize.XL
    inState?:string
    maxLength?:number
}
export interface ISearchDrop extends InputProps {
    data?:IData[]
   
}

