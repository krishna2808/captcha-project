import axios from "axios";
import { useLocation } from "react-router-dom";
import {baseURL} from './constants'
// const baseURL = "http://127.0.0.1:8000/";
//const baseURL = "http://54.165.238.40:8000/";
//const baseURL = "http://54.197.107.207:8000/";
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 25000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

const checkForUserPlan = ({ paramValue, setPlanData }) => {
  axiosInstance
    .get(`api/plan-details?planId=${paramValue}`, { planId: paramValue })
    .then((res) => {
      //we got to load this page with selected plan details here
      setPlanData(res.data);
    })
    .catch((err) => {
      console.log({ err });
    });
};

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    // if (typeof error.response === "undefined") {
    //   alert(
    //     "A server/network error occurred. " +
    //       "Looks like CORS might be the problem. " +
    //       "Sorry about this - we will get it fixed shortly."
    //   );
    //   return Promise.reject(error);
    // }
    debugger;
    if (
      error.response.status === 401 &&
      originalRequest.url === baseURL + "token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }
    debugger;
    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        console.log(tokenParts.exp);

        if (tokenParts.exp > now) {
          return axiosInstance
            .post("/token/refresh/", { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access);
              localStorage.setItem("refresh_token", response.data.refresh);

              axiosInstance.defaults.headers["Authorization"] =
                "JWT " + response.data.access;
              originalRequest.headers["Authorization"] =
                "JWT " + response.data.access;

              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/signin/";
        }
      } else {
        console.log("Refresh token not available.");
        window.location.href = "/signin/";
      }
    }
    debugger;
    if (error.response.status === 401) {
      // Redirect to the signin page
      debugger;

      const currentUrl = window.location.href;

      // Get the path part after the site host
      const pathAfterHost = new URL(currentUrl).pathname;
      // alert(pathAfterHost);
      console.log("Path after site host:", pathAfterHost);
      if (
        pathAfterHost !== "/signin" &&
        pathAfterHost !== "/signup" &&
        pathAfterHost !== "/"
      ) {
        window.location.href = "/signin";
      }
      // return null
      return Promise.reject(error);
    }
    // specific error handling done elsewhere
    return Promise.reject(error); // let see where else we can handle this
  }
);

export { axiosInstance };
