import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';

export type DogState = 'intro' | 'still' | 'shaking' | 'anxiety';

interface MainState {
    dogState: DogState;
    text: string | null;
    claimedByDog: number;
    total: number;
}

const initialState: MainState = {
    dogState: 'intro',
    text: null,
    claimedByDog: 0,
    total: 0,
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setDogState: (state, action: PayloadAction<DogState>) => {
            state.dogState = action.payload;
        },
        setText: (state, action: PayloadAction<string | null>) => {
            state.text = action.payload;
        },
        setTotal: (state, action: PayloadAction<number>) => {
            state.total = action.payload;
        },
        setClaimedByDog: (state, action: PayloadAction<number>) => {
            state.claimedByDog = action.payload;
        },
    },
});

let timer: any = null;

const loadFreeBytes = () => (window as any).Android?.freeBytes() ?? 1024 * 1024 * 1024 * 44.5;
const loadClaimedBytes = () => (window as any).Android?.claimedBytes() ?? 1024 * 1024 * 1024 * 32.3;

export const init = (): AppThunk => async (dispatch, rootStore) => {
    dispatch(setClaimedByDog(loadClaimedBytes()))
    dispatch(setTotal(loadFreeBytes()))
}

export const removeDoge = (): AppThunk => async (dispatch, rootStore) => {
    (window as any).Android?.giveToDoggo();
    dispatch(setClaimedByDog(loadClaimedBytes()))
    dispatch(setTotal(loadFreeBytes()))
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

export const addDoge = (): AppThunk => async (dispatch, rootStore) => {
    (window as any).Android?.takeFromDoggo();
    dispatch(setClaimedByDog(loadClaimedBytes()))
    dispatch(setTotal(loadFreeBytes()))
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

export const {
     setDogState, setText, setClaimedByDog, setTotal
} = mainSlice.actions;

export const selectTotal = (state: RootState): number => state.main.total;
export const selectClaimedByDog = (state: RootState): number => state.main.claimedByDog;
export const selectDogState = (state: RootState): DogState => state.main.dogState;
export const selectText = (state: RootState): string | null => state.main.text;

export default mainSlice.reducer;
