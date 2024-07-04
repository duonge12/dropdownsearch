import { ButtonDestroy } from "@/components/buttons/destroybuttons";
import { ILi } from "@/interface/li/liinterface";

export const Li=(
    {
        name,
        children,onDestroy,...rest
    }:ILi
)=>{
    
    return(
        <li className="w-full" {...rest} >
            <h1 className="text-xl">
                {name}
            </h1>
            <div className="flex justify-between">
                {children}
                <ButtonDestroy onClick={onDestroy}> X </ButtonDestroy>
               
            </div>
           
        </li>
    )
}