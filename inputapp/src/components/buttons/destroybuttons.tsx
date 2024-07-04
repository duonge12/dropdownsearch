import { Children, ReactNode } from "react"
import SpinnerIcon from "../icons/loadingicon"
import { twMerge } from "tailwind-merge";
import { IButton } from "@/interface/buttons/buttoninterface";
import { EState, ETextSize } from "@/enum/enumdata";


export const ButtonDestroy=(
    {
        textSize=ETextSize.LARGE,
        inState=EState.DEFAULT,...rest
    }:IButton
) => {
    const textCSS: { [key: string]: string }={
        ["small"]:` text-sm py-3 px-1`,
        [ETextSize.LARGE]:` text-lg py-1 px-5`, 
        ["xl"]:` text-xl py-3 px-1`,
    }
    const stateCSS: { [key: string]: string }={
        ['Default']:` border-none box-border bg-opacity-0 text-grey-70
        hover:bg-red-400 hover:text-white
        `,
        ['Disable']:` border-none pointer-events-none box-border bg-opacity-0`, 
    }
    const buttonStyle=twMerge(textCSS[textSize],stateCSS[inState])
    return (
        <button
            {...rest}
            className={buttonStyle}
        >
            
        </button>
    );
};