import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import {useUser} from "@Clerk/nextjs"


const AuthGuard = ({children}:{children:React.ReactNode}) => {
    const [isLoading , setIsLoading] = useState(true);
    const {isSignedIn} = useUser();
    const router = useRouter();
    
    

    useEffect(() => {
        if(isSignedIn === false) {
            router.replace("login");
    } else {
        setIsLoading(false);
    } },[isSignedIn,router])

    if(isLoading) return <p>Loading...</p>
  return <>{children}</>
  
}

export default AuthGuard;