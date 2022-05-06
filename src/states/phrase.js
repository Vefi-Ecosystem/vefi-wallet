import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { composeMnemonic } from '../utils';

export const generateMnemonic = createAsyncThunk(
  'wallet/generateMnemonic',
  (mnemonic) =>
    new Promise((resolve, reject) => {
      composeMnemonic(mnemonic).then(resolve).catch(reject);
    })
);

const phraseSlice = createSlice({
  name: 'phrase',
  initialState: { phrase: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(generateMnemonic.fulfilled, (state, action) => {
      state.phrase = action.payload;
    });
  }
});

export const phraseReducer = phraseSlice.reducer;
