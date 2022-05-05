import { phraseReducer } from './phrase';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    phraseReducer
  }
});
