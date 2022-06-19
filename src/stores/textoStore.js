import { defineStore } from 'pinia'

export const useTexto = defineStore({
  id: 'useTexto',
  state: () => ({
    texto: true,
    estado: ""
    
  }),
  getters: {
    
  },
  actions: {
    cambiarImagen(event)
    {
      this.estado = event.target.value;
    }
  }
})
