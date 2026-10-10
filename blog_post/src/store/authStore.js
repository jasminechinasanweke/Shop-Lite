// import { create } from "zustand";
// import axios from "axios";


// const API_BASE_URL = "https://my-backend-3sme.onrender.com";

// export const useAuthstore = create((set) => ({
//     user: null,
//     loading: false,
//     error: null,

//     //Register
//     register: async (name, email, password) => {
//         set({ loading: true, error: null });

//         try {
//             const response = await axios.post(`${API_BASE_URL}/api/auth/register`, { name, email, password });
//             set({ loading: false });
//             return { success: true, data: response.data };
//         } catch (error) {
//             const errorMsg = error.response?.data?.message || "Register failed";
//             set({ loading: false, error: errorMsg });
//             return { success: false, error: errorMsg };
//         }
//     },

//     //Login
//     login: async (email, password) => {
//         set({ loading: true, error: null });

//         try {
//             const response = await axios.post(`${API_BASE_URL}/api/auth/login`, { email, password });

//             console.log("Login response:", response.data);

//             const token = response.data.token || response.data?.data?.token || response.data?.accessToken || response.data?.data?.accessToken || response.data?.user?.token;
//             if (token) {
//                 try {
//                     // ensure token is stored as a string
//                     localStorage.setItem("token", String(token));
//                     console.log(response.data);
//                 } catch (err) {
//                     console.error("Failed to write token to localStorage:", err);
//                 }
//             } else {
//                 console.warn("Login response did not include a token:", response.data);
//             }

//             // prefer to store a user object if present
//             const userObj = response.data.user || response.data;
//             set({ user: userObj, loading: false });
//             return { success: true, data: response.data, token };
//         } catch (error) {
//             const errorMsg = error.response?.data?.message || "Login failed";
//             set({ loading: false, error: errorMsg });
//             return { success: false, error: errorMsg };
//         }
//     },
//     // helper to read token from localStorage (useful for debugging)
//     getToken: () => {
//         try {
//             return localStorage.getItem("token");
//         } catch (e) {
//             console.warn("Unable to read token from localStorage", e);
//             return null;
//         }
//     },
//     logout: () => {
//         localStorage.removeItem("token");
//         set({ user: null, error: null });
//     }
// }));



