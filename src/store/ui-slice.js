import { createSlice } from "@reduxjs/toolkit";
// import { setConfig } from "next/config";

const initialState = {          // estado inicial para o slice
  id: null,
  company: "Nome da empresa",
  salesGoal: 450
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {                            // reducers são funções q vao alterar o estado inicial

    setConfig: (state, { payload }) => {      // state = estado inicial
      state.id = payload._id;
      state.company = payload.company;
      state.salesGoal = payload.sales_goal;
    }
  }
});

export const { setConfig } = uiSlice.actions;

export default uiSlice.reducer;