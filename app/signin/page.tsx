
export default function Signinpage(){
    
    return <div className="bg-white h-screen flex  items-center justify-center "> 
              <div className="bg-gray-600 rounded-2xl h-100 w-120 ">

                  <input className="bg-white h-12 w-80 rounded m-17 pl-28 text-2xl text-blue-500 placeholder:text-gray-400" type="text" placeholder="Name" />
                  <input className="bg-white h-12 w-80 rounded ml-17 pl-28 text-2xl text-blue-500 placeholder:text-gray-400" type="text" placeholder="Password" />
                    <div  className="ml-35 mt-10">
                    <button className="bg-blue-700 rounded h-10 w-40 "> Sign in</button>
                    </div>
              </div>
          </div>
     
}