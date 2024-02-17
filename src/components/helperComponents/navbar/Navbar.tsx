import { ThemeToggleButton } from "@/components/ThemeComponents/themeToggleButton/ThemeToggleButton"
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper"

const Navbar=()=>{

    return(
        <MaxWidthWrapper>
        <div className=" py-5">
            <div className="grid grid-cols-2">
                <div className="col-span-1 flex items-center text-3xl font-bold">HackMatrix</div>
                <div className=" col-span-1 flex md:hidden justify-end items-center"><ThemeToggleButton/></div>

                <div className="col-span-1 hidden md:flex items-center gap-5 font-bold ">
                    <div className="">Home</div>
                    <div className="">Communities</div>
                    <div className="">Clubs</div>
                    <div className="">Connect</div>
                    <div className="">Login</div>
                </div>
            </div>
        </div>
        </MaxWidthWrapper>
    )
}

export default Navbar