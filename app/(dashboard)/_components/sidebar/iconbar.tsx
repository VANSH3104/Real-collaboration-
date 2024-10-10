import { cn } from "@/lib/utils"
import { useOrganization, useOrganizationList } from "@clerk/clerk-react"
import Image from "next/image"
interface ItemProps {
    name: string,
    id: string,
    imgurl: string
}
export const IconSide = ({
    name,
    id,
    imgurl
}:ItemProps)=>{
    const {organization} = useOrganization();
    const {setActive} = useOrganizationList();

    const isActive = organization?.id === id;

    const onclick = ()=>{
        if(!isActive) return;

        setActive({ organization :id});
    }
    return (
        <div className="relative aspect-square w-10">
            <Image 
            fill
            src={imgurl}
            onClick={onclick}
            alt={name}
            className={cn("rounded-md opacity-75 hover:opacity-100 transition ", isActive && "opacity-100")}
            />
        </div>
    )
}