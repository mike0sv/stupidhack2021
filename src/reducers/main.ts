import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';
import { Filesystem, Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export type DogState = 'intro' | 'still' | 'shaking' | 'anxiety';

interface MainState {
    files: string[];
    dogUsage: number;
    dogState: DogState;
    text: string | null;
}

const initialState: MainState = {
    files: [],
    dogUsage: 0,
    dogState: 'intro',
    text: null,
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setFiles: (state, action: PayloadAction<string[]>) => {
            console.log('action2: ', action);
            state.files = action.payload;
        },
        setDogUsage: (state, action: PayloadAction<number>) => {
            console.log('action: ', action);

            state.dogUsage = action.payload;
        },
        setDogState: (state, action: PayloadAction<DogState>) => {
            state.dogState = action.payload;
        },
        setText: (state, action: PayloadAction<string | null>) => {
            state.text = action.payload;
        },
    },
});

const DOG_USAGE_KEY = 'dog_usage';
const DELTA = 5;
const DATA_STORAGE = 'data';

let timer: any = null;

const listFiles = async (): Promise<string[]> => {
    let statResult = await Filesystem.stat({ path: DATA_STORAGE });
    // await Filesystem.mkdir({path: DATA_STORAGE})
    console.log('lol', statResult)
    return Filesystem.readdir({ path: DATA_STORAGE }).then(value => value.files);
}

export const init = (): AppThunk => async (dispatch, rootStore) => {
    let response = await Storage.get({ key: DOG_USAGE_KEY });
    await dispatch(setDogUsage(parseFloat(response.value ?? '0')));
    let files = await listFiles();
    await dispatch(setFiles(files));
}

export const addDoge = (): AppThunk => async (dispatch, rootStore) => {
    let usage = await Storage.get({ key: DOG_USAGE_KEY });
    let value = parseFloat(usage.value ?? '0') + DELTA;
    await Storage.set({ key: DOG_USAGE_KEY, value: value.toString() })
    dispatch(setDogUsage(value));
    dispatch(setDogState('shaking'));
    dispatch(setText('NOO!'));
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        dispatch(setDogState('anxiety'));
        dispatch(setText('GIVE BACC!!'));
        timer = setTimeout(() => {
            dispatch(setDogState('still'));
            dispatch(setText(null));
        }, 1200);
    }, 800);
}

export const removeDoge = (): AppThunk => async (dispatch, rootStore) => {
    let usage = await Storage.get({ key: DOG_USAGE_KEY });
    let value = parseFloat(usage.value ?? '0') - DELTA;
    if (value < 0) {
        value = 0;
    }
    await Storage.set({ key: DOG_USAGE_KEY, value: value.toString() })
    dispatch(setDogUsage(value));
    dispatch(setDogState('shaking'));
    dispatch(setText('YES GIVE IT BACC!'));
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        dispatch(setDogState('still'));
        dispatch(setText(null));
    }, 1200);
}

export const addNewFile = (): AppThunk => async (dispatch, rootStore) => {
    await Filesystem.writeFile({ path: `${DATA_STORAGE}/${Math.random().toString()}`, data: 'kek' }).then()
    await dispatch(setFiles(await listFiles()))
}


export const {
    setFiles, setDogUsage, setDogState, setText
} = mainSlice.actions;

export const selectFiles = (state: RootState): string[] => state.main.files;
export const selectDogUsage = (state: RootState): number => state.main.dogUsage;
export const selectDogState = (state: RootState): DogState => state.main.dogState;
export const selectText = (state: RootState): string | null => state.main.text;

export default mainSlice.reducer;
