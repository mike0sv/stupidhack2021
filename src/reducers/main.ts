import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';
import { Filesystem, Plugins } from '@capacitor/core';
const {Storage} = Plugins;

interface MainState {
    files: string[];
    dogUsage: number;
}

const initialState: MainState = {
    files: [],
    dogUsage: 0,
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setFiles: (state, action: PayloadAction<string[]>) => {
            console.log("action2: ", action);
            state.files = action.payload;
        },
        setDogUsage: (state, action: PayloadAction<number>) => {
            console.log("action: ", action);

            state.dogUsage = action.payload;
        },
    },
});

const DOG_USAGE_KEY = "dog_usage";
const DELTA = 5;
const DATA_STORAGE = "data";

const listFiles = async (): Promise<string[]> => {
    let statResult = await Filesystem.stat({path:DATA_STORAGE});
    // await Filesystem.mkdir({path: DATA_STORAGE})
    console.log('lol', statResult)
    return Filesystem.readdir({path: DATA_STORAGE}).then(value => value.files);
}

export const init = (): AppThunk => async (dispatch, rootStore) => {
    let response = await Storage.get({key: DOG_USAGE_KEY});
    await dispatch(setDogUsage(parseFloat(response.value ?? "0")));
    let files = await listFiles();
    await dispatch(setFiles(files));
}

export const addDoge = (): AppThunk => async (dispatch, rootStore) => {
    let usage = await Storage.get({key: DOG_USAGE_KEY});
    let value = parseFloat(usage.value ?? "0") + DELTA;
    await Storage.set({key: DOG_USAGE_KEY, value: value.toString()})
    dispatch(setDogUsage(value));
}

export const addNewFile = (): AppThunk => async (dispatch, rootStore) => {
    await Filesystem.writeFile({path: `${DATA_STORAGE}/${Math.random().toString()}` , data: "kek"}).then()
    await dispatch(setFiles(await listFiles()))
}


export const {
    setFiles, setDogUsage,
} = mainSlice.actions;

export const selectFiles = (state: RootState): string[] => state.main.files;
export const selectDogUsage = (state: RootState): number => state.main.dogUsage;

export default mainSlice.reducer;
