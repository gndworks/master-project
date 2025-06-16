import { ref, type Ref } from "vue";

const weeklyRentalPrice: Ref<number | undefined> = ref(undefined);
const yearlyRentIncrease: Ref<number> = ref(8.5);

export function useRentalInformation() {
  return {
    weeklyRentalPrice,
    yearlyRentIncrease
  };
}