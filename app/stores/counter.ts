import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    value: 0 as number,
  }),

  actions: {
    increase(): void {
      this.value++
    },
    decrease(): void {
      if (this.value > 0) this.value--
    }
  }
})
