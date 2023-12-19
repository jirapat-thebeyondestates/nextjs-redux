'use client'

import Link from "next/link";
import type {RootState} from "@/app/GlobalRedux/store";
import {useSelector} from "react-redux";


function Nev() {

    const count: number = useSelector((state: RootState) => state.counter.value)

    return (
        <>
            <div className="bg-red-900 text-amber-300 px-5 py-3 flex justify-between items-center">
                <Link href={"/"}>
                    <div className="p-3 text-red-900 font-bold bg-amber-100 rounded-[10px]">
                        Home
                    </div>
                </Link>
                <span className={"font-bold"}>
                    Count from store : [ {count} ]
                </span>
                <div>
                    <Link className="ml-3 hover:underline hover:underline-offset-4" href={"/login"}>Login</Link>
                    <Link className="ml-3 hover:underline hover:underline-offset-4ml-3"
                          href={"/register"}>Register</Link>
                </div>
            </div>
        </>
    )
}

export default Nev;