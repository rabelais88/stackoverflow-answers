import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SampleState {
  orders: number[];
}

const initialState: SampleState = {
  orders: [],
};

interface CustomMeta {
  status: 'completed' | 'incomplete';
}
// define custom action with meta info
type CustomAction = PayloadAction<number, string, CustomMeta>

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getAllOrders: {
      reducer: (state, action: CustomAction) => {
        // the code below should not get any warnings
        if (action.meta?.status === "completed") {
          // blank
        }
      },
      prepare(payload: CustomAction['payload']) {
        return { payload, meta: { status: "completed" } } as CustomAction;
      },
    },
  },
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sample: sampleSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
