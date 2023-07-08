import { defineStore } from 'pinia'

type User = {
  username: string;
  passwd?: string;
  // 在这里添加其他用户属性...
};


export const useUser  = defineStore({
  id: "user",
  state: () => ({
    use: {} as User,
  }),
  actions:{
    setUserInfo(users: User){
      this.use = users;
    },
}}
);