import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase.config";


export const singUpThunk = createAsyncThunk('auth/singUp', 
async ({email, password}, {rejectWithValue})=>{
try {
   const data = await createUserWithEmailAndPassword(auth, email, password);
  console.log(data);
} catch (error) {
    console.log("error");
    return rejectWithValue();
}
})