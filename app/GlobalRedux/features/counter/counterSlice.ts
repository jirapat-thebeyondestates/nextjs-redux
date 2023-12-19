'use client';

import {createSlice} from "@reduxjs/toolkit";
import {stat} from "fs";
import {reducer} from "next/dist/client/components/router-reducer/router-reducer";

export interface CounterSlice {
    value: number
}

const initialState: CounterSlice = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer