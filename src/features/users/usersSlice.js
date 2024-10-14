import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'Dude Lebowski'},
  { id: '1', name: 'Nail Young'},
  { id: '2', name: 'Nick Ndolo'},
  { id: '3', name: 'Jenny Mwende'},
]

const usersSlice = createSlice({
  name: 'users', 
  initialState,
  reducers: {

  }
})

export const selectAllUsers = (state) => state.users
 export default usersSlice.reducer