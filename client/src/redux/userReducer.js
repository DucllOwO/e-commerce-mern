import { createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../api/api";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../Utils/constant";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    viewedProduct: [],
    loading: "idle",
  },
  reducers: {
    userLoading: (state) => {
      if (state.loading === "idle" || state.loading === "error") {
        state.loading = "pending";
      }
    },
    userReceived: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.user = action.payload;
      }
    },
    userError: (state) => {
      if (state.loading === "pending") {
        state.loading = "error";
      }
    },
    userRegister: (state, action) => {
      if (state.loading === "pending") {
        state.user = action.payload;
      }
    },
    viewProduct: (state, action) => {
      // let countDuplicate = {};
      // if (state.viewedProduct)
      //   state.viewedProduct.forEach((element) => {
      //     const key = JSON.stringify(element);
      //     countDuplicate[key] = (countDuplicate[key] || 0) + 1;
      //   });
      // const productRender = Object.entries(countDuplicate);
      // console.log(productRender)
      // state.viewedProduct.slice(0, state.viewedProduct.length);
      state.viewedProduct.push(action.payload);
    },
    logoutUser: (state, action) => {
      if (state.loading === "idle") {
        state.user = null;
      }
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  userLoading,
  userReceived,
  viewProduct,
  logoutUser,
  userError,
  userRegister,
} = actions;
export default reducer;

export const fetchUser = (username, password) => async (dispatch) => {
  try {
    dispatch(userLoading());
    const user = await publicRequest.post(LOGIN_ROUTE, { username, password });
    dispatch(userReceived(user.data));
  } catch (error) {
    dispatch(userError());
  }
};

export const userRegisterCreate = (user) => async (dispatch) => {
  try {
    dispatch(userLoading());
    const res = await publicRequest.post(REGISTER_ROUTE, {
      username: user.username,
      password: user.password,
      email: user.email,
      address: user.address,
    });
    dispatch(userRegister(res.data));
  } catch (error) {
    dispatch(userError());
    console.log(error);
  }
};
