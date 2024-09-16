import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { type } from "@testing-library/user-event/dist/type";
import {
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
} from "./ActionType";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8080/auth/signin",
      loginData
    );
    console.log("loged in user ", data);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
  }
};

export const registerUser = (registerData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8080/auth/signup",
      registerData
    );
    console.log("user signed up ", data);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("error ", error);
    dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
  }
};

export const getUserProfile = (jwt) => async (dispatch) => {
  console.log("JWT ", jwt);

  try {
    const { data } = await axios.get(
      "http://localhost:8080/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("DAATAA ",data);
    
    dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error in getUserProfile:", error.response || error.message);
    dispatch({ type: GET_USER_PROFILE_FAILURE, payload: error.message });
  }
};

// export const getUserProfile = () => async (dispatch) => {
//   const jwt = localStorage.getItem("jwt"); // Get JWT from localStorage

//   if (!jwt) {
//     dispatch({ type: GET_USER_PROFILE_FAILURE, payload: "No JWT available" });
//     return;
//   }

//   try {
//     const { data } = await axios.get("http://localhost:8080/api/users/profile", {
//       headers: {
//         Authorization: `Bearer ${jwt}`, // Add the token in the Authorization header
//         "Content-Type": "application/json",
//       },
//     });
//     dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data }); // On success, dispatch success action with the data
//   } catch (error) {
//     console.error("Error fetching profile: ", error);
//     dispatch({ type: GET_USER_PROFILE_FAILURE, payload: error.message }); // Dispatch failure action with error message
//   }
// };
