import { ThemeToggleButton } from "@/components/ThemeComponents/themeToggleButton/ThemeToggleButton"
import { Menu } from "lucide-react"
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper"

const Navbar=()=>{

    return(
        <MaxWidthWrapper>
        <div className=" py-5">
            <div className="grid grid-cols-2">
                <div className="col-span-1 flex items-center text-3xl font-bold">HackMatrix</div>
                
                <div className="col-span-1  md:hidden items-center gap-5 font-bold ">
               
                    <div className="flex items-center justify-end gap-5">
                    <div className="  flex justify-end items-center "><ThemeToggleButton/></div>
                        <Menu/>
                    </div>
                </div>
                <div className="col-span-1 hidden md:flex items-center gap-5 font-bold justify-end">
                <div className="  flex justify-end items-center mr-3"><ThemeToggleButton/></div>
                    <div className="">Home</div>
                    <div className="">Communities</div>
                    <div className="">Clubs</div>
                
                    <div className="">Login</div>
                </div>
            </div>
        </div>
        </MaxWidthWrapper>
    )
}

export default Navbar