import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { httpClient } from "../../core";

const initialOtpState = {
  isLoading: false,
  result: [],
};

const search = createAsyncThunk("dogs/search", async (query, thunkAPI) => {
  const response = await httpClient("/v1/breeds/search?q=" + query);

  if (response.status > 400) {
    return thunkAPI.rejectWithValue(await response.json());
  }
  const result = await response.json();

  return result;
});

/**
 * Reducers
 */
const Reducer = createSlice({
  name: "dashboard",
  initialState: initialOtpState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(search.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(search.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.result = payload;
    });
    builder.addCase(search.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

/*Actions export*/

export { search };
/*Reducer export*/
export default Reducer.reducer;
