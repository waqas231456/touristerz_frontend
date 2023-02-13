import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
  auth: false,
  name: "",
  token: "",
  user: "",
  msg: "",
  loading: false,
  error: "",
};

export const signIn = createAsyncThunk("signin", async (body) => {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const result = res.json();
  // const { name } = await result;
  // console.log(name);


  // localStorage.setItem("name", name);
  return await result;
});

// Actual Slice
export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
      if (token) {
        state.auth = true;
      }
    },

    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },

    logOut: (state, action) => {
      state.token = null;
      localStorage.clear();
      state.auth = false;
    },

    // Action to set the authentication status
    // setAuthState(state, action) {
    //   state.authState = action.payload;
    // },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [signIn.pending]: (state, action) => {
        state.loading = true;
      },

      [signIn.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
        console.log(payload);
        state.loading = false;
        

        if (error) {
          state.error = error;
        } else {
          state.msg = msg;
          state.token = token;
          state.user = user;

          localStorage.setItem("msg", JSON.stringify(msg));
          localStorage.getitem("user", JSON.stringify(user));
          localStorage.setItem("user", JSON.stringify(token));
        }
      },

      [signIn.rejected]: (state, action) => {
        state.loading = true;
        state.error = error;
      },

      // [HYDRATE]: (state, action) => {
      //   return {
      //     ...state,
      //     ...action.payload.auth,
      //   };
      // },
    },
  },
});

const { addUser, addToken, logOut } = authSlice.actions;

export default authSlice.reducer;
