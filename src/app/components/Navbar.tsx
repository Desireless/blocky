/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useSupabase } from '../lib/supabase-provider';
import { useRouter } from 'next/navigation';

function Navbar() {

    const {supabase, session} = useSupabase();
    const router = useRouter();

    const check = () => {
        console.log("session: ", session);

    }

    async function signOut() {
        await supabase.auth.signOut();
        router.push('/');
    }

    useEffect(() => {
        if(!session) {
            router.push('/');
        }
    }, [session])

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
                            {session ?(
                                <div>
                                        <span className="text-white  px-3 py-2 rounded-md text-md font-medium cursor-default">
                                            {session.user?.email}
                                        </span>

                                        <span className="text-white hover:text-red-600 px-3 py-2 rounded-md text-md font-medium cursor-pointer" 
                                        onClick={signOut}>
                                            Log out
                                        </span>

                                </div>
                            ):(

                                <Link href="/login">
                                    <span className="text-white hover:text-violet-900 px-3 py-2 rounded-md text-md font-medium cursor-pointer">
                                            Iniciar sesión
                                    </span>
                                </Link>
                            )}
                                                                                                       
                             
                            
                                
                            

                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Navbar