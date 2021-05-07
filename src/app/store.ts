import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import mainReducer from '../reducers/main';


export const store = configureStore({
    reducer: {
        main: mainReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
