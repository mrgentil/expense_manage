﻿import Navbar from "./Navbar"
import React from "react";

type WrapperProps = {
    children : React.ReactNode
}

const Wrapper = ({children} : WrapperProps) => {
    return (
        <div>
            <Navbar/>
            <div className="px-5 md:px-[10%] mt-10 mb-10">
                {children}
            </div>
        </div>
    )
}

export default Wrapper