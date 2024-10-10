"use client"

import { useOrganizationList } from "@clerk/clerk-react"
import { IconSide } from "./iconbar";

export const List = ()=>{
    const {userMemberships} = useOrganizationList({
        userMemberships:{
            Infinite:true
        }
    })
    if(!userMemberships.data?.length){
        return null;
    }
    const user = userMemberships.data.map((e)=>(
     <div key={e.organization.id}>
        {<IconSide
            key={e.organization.id}
            id = {e.organization.id}
            name={e.organization.name}
            imgurl={e.organization.imageUrl}
        />}
     </div>   
    ))
    return (
        <div className="space-y-2">
            {user}
        </div>
    )
}
