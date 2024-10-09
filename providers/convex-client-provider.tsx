"use client"
import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { 
    AuthLoading, 
    Authenticated , 
    ConvexReactClient, 
    Unauthenticated
} from "convex/react"
import { Loading } from "@/app/auth/loading"
interface ConvexClientProvderProp {
    children: React.ReactNode
}
const convexurl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexurl)
export const ConvexClientProvder = ({children }:ConvexClientProvderProp)=>{
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <Unauthenticated>
                    {children}
                </Unauthenticated>
                <Authenticated>
                    {children}
                </Authenticated>
                <AuthLoading>
                    <Loading/>
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}