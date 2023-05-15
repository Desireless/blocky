"use client"
import Link from 'next/link';
import React from 'react'

function Navbar() {
    const check = () => {
        console.log("session");
    }
  return (
    <>
        <div className="px-8 mx-auto max-w-7xl">
                <div className="flex items-center justify-between h-14">
                    <div className=" flex items-center">
                        <div className="flex-shrink-0 w-12" >
                            <span>B</span>
                            <span className="text-black  px-3 py-2 rounded-md text-md font-medium cursor-default">blocky</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-baseline ml-10 space-x-4">
                                <a className="text-white hover:text-violet-900 px-3 py-2 rounded-md text-md font-medium" href="/">
                                    Home
                                </a>
                                <a className="text-white hover:text-violet-900 px-3 py-2 rounded-md text-md font-medium" href="/dashboard">
                                    Dashboard
                                </a>
                                <button className="text-white hover:text-violet-900 px-3 py-2 rounded-md text-md font-medium" onClick={check}> CHECK</button>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="flex -mr-2 md:block">

                                
                                    <>
                                        <span className="text-white  px-3 py-2 rounded-md text-md font-medium cursor-default">
                                            Usuario
                                        </span>
                                        <span className="text-white hover:text-red-600 px-3 py-2 rounded-md text-md font-medium cursor-pointer" 
                                        >
                                            Log out
                                        </span>
                                    </>
                                
                                
                                
                             
                                <Link href="/login">
                                    <span className="text-white hover:text-violet-900 px-3 py-2 rounded-md text-md font-medium cursor-pointer">
                                            Iniciar sesión
                                    </span>
                                </Link>
                            
                                
                            

                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Navbar