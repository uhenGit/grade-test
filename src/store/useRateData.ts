import { defineStore } from 'pinia';

export const useRateStore = defineStore('rateStore', {
  state: () => ({
    customRate: 0 as number,
  }),
  actions: {
    setCustomRate(val: number): void {
      this.customRate = val;
    }
  }
})