import { defineStore } from 'pinia'

export const useUser  = defineStore({
  id:"user",
  state:()=>({
    use:'1',
  }),
  actions:{
    addItem(name: string) {
      this.use = name
    },
  }

})