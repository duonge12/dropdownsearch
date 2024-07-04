import { EState, ETextSize } from "@/enum/enumdata"

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    textSize?:ETextSize.SMALL|ETextSize.MEDIUM|ETextSize.LARGE|ETextSize.XL
    inState?:EState.DEFAULT|EState.ACTIVE|EState.DISABLE|EState.ERROR|EState.LOADING|EState.SUCCESS
}