import { defineStore } from 'pinia'

export const useMenusStore = defineStore({
  id: 'menus',
  state: () => ({
    menus: [],
  }),
  getters: {
    allMenus: (state) => [state.menus],
  },
})