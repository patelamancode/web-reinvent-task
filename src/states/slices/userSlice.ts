import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  token: string | null;
  userDetails: object | null;
}

const initialState: UserState = {
  isAuthenticated: true,
  token: null,
  userDetails: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ token: string, userDetails: object }>) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userDetails = action.payload.userDetails;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.userDetails = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
