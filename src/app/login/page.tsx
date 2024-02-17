"use client"
import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper"
import { signIn, useSession } from "next-auth/react"

const LoginPage=()=>{

    const {data,status} = useSession()

    console.log(data,status)
    return(
        <MaxWidthWrapper>
            <div className="mt-16 md:mt-0">
                <div className="md:p-20 lg:p-40 p-7 flex items-center justify-center">
                    <div className=" flex flex-col gap-10 bg-gray-800 p-16 md:p-36 rounded">
                        <div onClick={()=>signIn("google")} className="p-4 md:p-6 lg:p-7 dark:bg-red-800 rounded font-semibold ">Sign in with Google</div>
                        <div className="p-4 md:p-6 lg:p-7 dark:bg-gray-900 rounded font-semibold">Sign in with Github</div>
                        <div className="p-4 md:p-6 lg:p-7 dark:bg-blue-800 rounded font-semibold">Sign in with Twitter</div>
                    </div>
                </div>

            </div>
        </MaxWidthWrapper>
    )
}

export default LoginPage