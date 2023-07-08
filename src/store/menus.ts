import { defineStore } from 'pinia'




export const useMenus  = defineStore({
  id: "menus",
  state: () => ({
    menus: [] as any
  }),
  actions:{
    setMenu(menu:any){
      this.menus = menu
    }
}}
);