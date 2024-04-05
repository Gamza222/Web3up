import { createSlice } from '@reduxjs/toolkit';
import { PounterSchema } from '../types/counterSchema';

const initialState: PounterSchema = {
  value: 0,
};

export const pounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const { actions: pounterActions } = pounterSlice;
export const { reducer: pounterReducer } = pounterSlice;
