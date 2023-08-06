import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import patientInstance from "../axios/patientInstance";

const fetchAllPatients = createAsyncThunk("patient/All", async (payload) => {
  try {
    const patientResponse = await patientInstance.get("/patients", {
      params: {
        page: payload.page,
      },
    });
    return patientResponse.data;
  } catch (e) {
    console.log(e);
  }
});

export const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patients: [],
    page: 0,
    totalPages: 0,
    totalAvailable: 0,
    isLoading: false,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPatients.fulfilled, (state, action) => {
      state.isLoading = false;
      state.patients = action.payload.patients;
      state.totalPages = action.payload.totalPages;
      state.totalAvailable = action.payload.totalAvailable;
    });
    builder.addCase(fetchAllPatients.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

const { setPage } = patientSlice.actions;
export { setPage, fetchAllPatients };
export default patientSlice.reducer;
