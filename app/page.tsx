'use client'

import type {RootState} from "@/app/GlobalRedux/store";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount} from "@/app/GlobalRedux/features/counter/counterSlice";

export default function Home() {
    const count: number = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <>
            <span className={"text-xl font-bold"}>
                Count : {count}
            </span>
            <hr/>
            <button className={"text-sm font-bold text-gray-500 bg-gray-100 px-2 border-2 border-gray-300 mr-1 mt-2 active:scale-[1.05] rounded-[5px]"}
                    onClick={() => dispatch(increment())}>
                +
            </button>
            <button className={"text-sm font-bold text-gray-500 bg-gray-100 px-2 border-2 border-gray-300 mr-1 mt-2 active:scale-[1.05] rounded-[5px]"}
                    onClick={() => dispatch(decrement())}>
                -
            </button>
            <button className={"text-sm font-bold text-gray-500 bg-gray-100 px-2 border-2 border-gray-300 mr-1 mt-2 active:scale-[1.05] rounded-[5px]"}
                    onClick={() => dispatch(incrementByAmount(2))}>
                Increment by 2
            </button>
        </>
    )
}
