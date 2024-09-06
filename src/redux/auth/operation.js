import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeaders = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (forDate, thunkApi) => {
    try {
      const { data } = await instance.post("users/login", forDate);
      setAuthHeaders(data.token);
      console.log("login", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (forDate, thunkApi) => {
    try {
      const { data } = await instance.post("users/signup", forDate);
      setAuthHeaders(data.token);
      console.log("register", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiIsRefreshing = createAsyncThunk(
  "auth/refreshing",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeaders(token);
      const { data } = await instance.get("users/current");
      console.log("refreshing", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
