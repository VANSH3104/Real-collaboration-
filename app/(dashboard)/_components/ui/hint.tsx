import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
export interface Hintprop {
    label: string;
    children: React.ReactNode;
    side?: "Top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideoffset?:number;
    alignoffset?: number;
}
export const Hint =({
    label,
    children,
    side,
    align,
    sideoffset,
    alignoffset,

}:Hintprop)=>{
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent className="bg-black border-black" side={side} align={align} sideOffset={sideoffset} alignOffset={alignoffset}>
                <p className="bold text-white font-semibold capitalize">{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}