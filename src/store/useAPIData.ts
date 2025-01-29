import { defineStore } from 'pinia';
import { postman } from '@/functions';
import { apiResponse } from '@/types/APIResponse.ts';

export const useAPIStore = defineStore('APIData', {
  state: () => ({
    apiData: [] as apiResponse[],
    errors: [] as string[],
  }),
  actions: {
    setError(err: string): void {
      this.errors.push(err);
    },

    async loadData(): Promise<void> {
      try {
        const result: apiResponse[] = await postman('1124a700?count=100', 'GET');

        if (!result) {
          this.setError('Load data error');

          return;
        }

        this.apiData = result;
      } catch (err) {
        this.errors.push(err.message);
      }
    },

    dropErrors(): void {
      this.errors = [];
    },
  },
  getters: {
    getErrorsList(): string {
      return this.errors.join('\r\n');
    }
  },
})