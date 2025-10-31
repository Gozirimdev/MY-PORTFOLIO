import React from "react";
import Navbar from "../component/Navbar";
import Connect from "../component/Connect";

const Contact:React.FC= ()=>{
    return(
        <div className="min-h-screen bg-black overflow-hidden">

        <Navbar />
        <Connect />
        </div>
    )
}
export default Contact