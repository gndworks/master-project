import { ref, type Ref } from 'vue';

  const yearlyIncome: Ref<number | undefined> = ref(undefined);
  const currentSavings: Ref<number | undefined> = ref(undefined);

export function useFinancialInformation() {
  return {
    yearlyIncome,
    currentSavings,
  };
}