"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react"

export default function Signuppage(){

       const nameref=useRef<HTMLInputElement>(null)
       const passwordref=useRef<HTMLInputElement>(null)
       const router=useRouter()
    
    
      async function Sendsignupdata(){
        console.log("data is sending from frontend")
        
        const name=nameref.current?.value
        const password=passwordref.current?.value

        console.log(name,password)
         
        const res= await fetch("http://localhost:3000/api/users",{method:"POST",headers:{  "Content-Type": "application/json"}, body: JSON.stringify({ name, password })})

         console.log("Data sended to backend")

         
          if (res.ok) {
            router.push("/signin")
          }

       

      }

    return <div className="bg-white h-screen flex  items-center justify-center "> 
              <div className="bg-gray-600 rounded-2xl h-100 w-120 ">

                  <input ref={nameref} className="bg-white h-12 w-80 rounded m-17 pl-28 text-2xl text-blue-500 placeholder:text-gray-400" type="text" placeholder="Name" />
                  <input ref={passwordref} className="bg-white h-12 w-80 rounded ml-17 pl-28 text-2xl text-blue-500 placeholder:text-gray-400" type="text" placeholder="Password" />
                    <div  className="ml-35 mt-10">
                    <button onClick={Sendsignupdata} className="bg-blue-700 rounded h-10 w-40 "> Sign Up</button>
                    </div>
              </div>
          </div>
     
}