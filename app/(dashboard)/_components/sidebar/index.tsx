import { Buttonadduser } from "./buttonplus"
import { List } from "./listing"

export const Sidebar = ()=>{
    return(
        <div className="bg-blue-800 p-1 fixed left-0 z-25 h-full w-[60px]">
            <div className="w-full flex-col justify-center p-1 items-center text-white">
                <div className="">
                    <List />
                </div>
                <Buttonadduser/>
            </div>
            
        </div>
    )
}