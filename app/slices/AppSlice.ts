import { createSlice } from '@reduxjs/toolkit';

// Define the Apptypeinitialstate interface 
interface Apptypeinitialstate {
    isLoading: boolean;
    userInfo: undefined | { name: string };
}

const initialState: Apptypeinitialstate = {
    isLoading: false,
    userInfo: undefined,
};

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {},
});

export const {} = AppSlice.actions;
