import { LiHTMLAttributes, ReactNode } from "react";

export interface ILi extends React.LiHTMLAttributes <HTMLLIElement>
{
    name?:string
    children?:ReactNode
    onDestroy?:(e: React.MouseEvent<HTMLButtonElement>)=>void

}
