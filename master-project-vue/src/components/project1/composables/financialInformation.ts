import { ref } from 'vue';

export function useFinancialInformation() {
  const yearlyIncome = ref(undefined);
  const currentSavings = ref(undefined);

  return {
    yearlyIncome,
    currentSavings,
  };
}