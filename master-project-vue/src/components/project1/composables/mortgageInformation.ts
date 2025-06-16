import { ref, type Ref } from "vue";

const mortgageAmount: Ref<number | undefined> = ref(undefined);
const monthlyRepayment: Ref<number | undefined> = ref(undefined);
const homeValue: Ref<number | undefined> = ref(undefined);
const yearlyHomeAppreciation = ref(5.8);

export function useMortgageInformation() {
  return {
    mortgageAmount,
    monthlyRepayment,
    homeValue,
    yearlyHomeAppreciation
  };
}