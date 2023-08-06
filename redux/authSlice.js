import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authInstance from "../axios/authInstance";

// IF THE USER HAS ALREADY SIGNED IN
const tryLocalSignIn = createAsyncThunk(
  "auth/tryLocalSignIn",
  async (thunkApi) => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      const res = await authInstance.get("/me", {
        headers: {
          "x-access-token": JSON.parse(token),
        },
      });

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isSignedIn: false,
    email: "",
    name: "",
  },
  reducers: {
    logInUser: (state, action) => {
      state.isSignedIn = true;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    logOutUser: (state, action) => {
      state.isSignedIn = false;
      state.email = "";
      state.name = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(tryLocalSignIn.fulfilled, (state, action) => {
      state.isSignedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
    });
    builder.addCase(tryLocalSignIn.rejected, (state, action) => {
      state.isSignedIn = false;
      state.email = "";
      state.name = "";
    });
  },
});

const { logInUser } = authSlice.actions;
export { logInUser, tryLocalSignIn };
export default authSlice.reducer;
