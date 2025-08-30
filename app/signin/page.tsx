'use client'
import { useState } from "react";
import CustomInputbox from "../components/inputbox";
import Custombutton from "../components/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Signin(){
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const Router =useRouter();
    function Clickhandler(){
        axios.post("http://localhost:8080/api/v1/auth/signin",{
            email:email,
            password:password
        }).then(Response=>{
            localStorage.setItem('token',Response.data.token)
            Router.push("/connect")
        })
    }
    return(
        <div className="bg-grey-600 flex h-screen w-screen justify-center items-center">
            <div className="bg-grey-400 w-100 h-120 text-white rounded-3xl px-5">
                <div className="text-2xl font-sans font-semibold px-35 pt-5"> Sign In</div>
                <CustomInputbox placeholder="m@example.com" type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} name="Email"/>
                <CustomInputbox placeholder="abc111" type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} name="Password"/>
                <Custombutton classname="w-full" varient="lightmode" size="lg" onClick={Clickhandler}content="Signup"/>
                <h6 className="text-grey-100 pt-5">Don't have an account? <Link href={"/signup"}>Sign In</Link></h6>
            </div>
        </div>
    )
}