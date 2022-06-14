import { createSlice } from "@reduxjs/toolkit";

const initialOtpState = {
  isLoading: false,
};

/**
 * Reducers
 */
const Reducer = createSlice({
  name: "footer",
  initialState: initialOtpState,
  reducers: {},
  extraReducers: (builder) => {},
});

/*Actions export const {} = Reducer.actions;*/
export {};
/*Reducer export*/
export default Reducer.reducer;
