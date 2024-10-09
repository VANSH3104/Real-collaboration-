import Image from "next/image";
export const Loading = ()=>{
    return (
        <div className="flex justify-center items-center h-full w-full">
            <Image
            src="logo.svg"
            alt="logo"
            width={60}
            height={60}
            className="duration-700 animate-pulse"
            />
        </div>
    )
}
