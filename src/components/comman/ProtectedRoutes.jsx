import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoutes = ({children}) => {

    const [isLoging,setisLoging] = useState(false)
    const [isLoading,setisLoading] = useState(true)

    useEffect(()=>{

        const token = localStorage.getItem("token")

        if(token){
            setisLoging(true)
        }else{
            setisLoging(false)
        }

        setisLoading(false)
    },[])

      if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-50">
                <div className="text-lg font-medium text-slate-600 animate-pulse">Loading authorization...</div>
            </div>
        )
    }

    if(!isLoging){
        return <Navigate to="/" replace/>
    }

    return children
}
export default ProtectedRoutes