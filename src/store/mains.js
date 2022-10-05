import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    valueOpenTheModal: false,
    dataCliente: []
  }),
  actions: {
    openModal() {
      this.valueOpenTheModal = true
    },
    closeModal(){
      this.valueOpenTheModal = false
    },
    saveCliente(){
      this.dataCliente.push()
    }
  },
})