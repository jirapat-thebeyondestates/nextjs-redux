import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Nev from "@/app/Component/Nevbar/Nev";
import {Providers} from "@/app/GlobalRedux/provider";
import React from "react";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: "Redux",
    description: 'How to redux',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <body className={inter.className}>

        <Providers>
            {/*  Import NevBar */}
            <Nev/>
            <div className="flex justify-center">
                <div className="w-[70%] bg-white p-5 px-10 min-h-[100vh]">
                    {children}
                </div>
            </div>
        </Providers>

        </body>
        </html>
    )
}
