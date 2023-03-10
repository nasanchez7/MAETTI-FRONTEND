import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  dataCopy: []
}
export const propiedadesSlice = createSlice({
  name: 'propiedades',
  initialState,
  reducers: {
    setPropiedades: (state, payload) => {
      state.data = payload.payload
      state.dataCopy = payload.payload
    },
    setFilter: (state, payload) => {
      if(payload.payload === "todo"){
        state.dataCopy = state.data
      }else if(payload.payload === "noche" || payload.payload === "mensual"){
        state.dataCopy = state.data.filter((p) => p.alquiler === payload.payload)
      }else{
        state.dataCopy = state.data.filter((p) => p.ubicacion === payload.payload)
      }
    }
  }
})

export const { setPropiedades, setFilterUbicacion, setFilterAlquiler, setFilterAll, setFilter } = propiedadesSlice.actions

export default propiedadesSlice.reducer