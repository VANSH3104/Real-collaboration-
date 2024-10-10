import { UserButton } from "@clerk/nextjs"

export const Navbar = ()=>{
    return (
        <div className="bg-yellow-400 p-2 flex item-center">
            <div className="hidden lg:block lg:flex-1 bg-yellow-300">
                {/* input*/}
            </div>
            <div>
            <UserButton />
          </div>
        </div>
    )
}