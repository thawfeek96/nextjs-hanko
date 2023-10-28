import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name?: string;
  email?: string;
  contact?: string;
  age?: string;
}

interface UserState {
  user: User[];
}

const initialState: UserState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = [...state.user, action.payload];
    },
    removeUser: (state: UserState, action: PayloadAction<User>): void => {
      const newStateUsers = state.user.filter(
        (i) => i.id !== action.payload.id
      );
      state.user = newStateUsers;
    },
   
  },
});

export const {addUser, removeUser} = userSlice.actions


export default userSlice.reducer