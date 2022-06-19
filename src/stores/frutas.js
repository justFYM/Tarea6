import { defineStore } from 'pinia'

export const useFrutasStore = defineStore({
  id: 'useFrutasStore',
  state: () => ({
    frutas:[
        {
            id: 1,
            nombre: 'Manzana',
            selected: false
        },
        {
            id: 2,
            nombre: 'Pera',
            selected: false
        },
        {
            id: 3,
            nombre: 'Sandía',
            selected: true
        }

   ],
   nuevaFruta:''
    
  }),
  getters: {
  },
  actions: {
    agregarFruta(){
        //console.log(this.frutas.length+1)
        
        this.frutas.push(
            {
                nombre: this.nuevaFruta, id: this.frutas.length+1
            }
            )
            
    }

  }
})


