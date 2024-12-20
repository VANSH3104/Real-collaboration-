"use client"
import { FaPlus } from "react-icons/fa6";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/clerk-react";
import { Hint } from "../ui/hint";
  
export const Buttonadduser = ()=>{
    return(
        <div className="pt-2 pl-1">
            <Dialog>
            <DialogTrigger asChild >
                <div className="aspect-square">
                    <Hint label="Create organinzation"
                    side="right"
                    align="center"
                    sideoffset={18}>
                    <button className="bg-white/25 p-2 rounded-md  opacity-100 hover:opacity-80 transition">
                        <FaPlus  className="text-white"/>
                    </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="p-5 bg-transparent border-none text-white">
                <CreateOrganization/>
            </DialogContent>
    </Dialog>
        </div>
    )
}