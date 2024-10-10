import { Navbar } from "./_components/navbar"
import { Sidebar_extent } from "./_components/sidebar-extende"
import { Sidebar } from "./_components/sidebar/index"

interface Dashboardlayoutprop{
    children: React.ReactNode
}
const Dashboardlayout = ({children}:Dashboardlayoutprop)=>{
    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-[60px] h-full flex gap-x-2">
                <Sidebar_extent/>
                <div className="flex-1 h-full">
                    <Navbar/>
                    {children}
                </div>
            </div>
        </main>
    )
}
export default Dashboardlayout