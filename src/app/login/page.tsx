'use client'
import React from 'react'
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSupabase } from "../auth/supabase-provider";


export default function Login() {

    const {supabase} = useSupabase();

    return (
        <>
            <main className="flex flex-col items-center justify-center ">
                <div className="flex flex-col items-center justify-center border-solid border-gray-300 border rounded-xl px-12 py-7">
                    <Auth
                        redirectTo="http://localhost:3000/dashboard"
                        appearance={{ theme: ThemeSupa }}
                        supabaseClient={supabase}
                        providers={['google']}
                        socialLayout="horizontal"
                        localization={{
                            variables: {
                              sign_in: {
                                email_label: 'Email',
                                password_label: 'Contraseña',
                                email_input_placeholder: 'correo@gmail.com',
                                password_input_placeholder: '********',
                                button_label: 'Iniciar sesión',
                                link_text: '¿Ya tienes una cuenta?, Inicia sesión',
                              },
                            },
                          }}

                    />
                </div>
            </main>
        </>
    )
}
