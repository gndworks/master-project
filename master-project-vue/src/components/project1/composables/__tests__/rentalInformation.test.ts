import { beforeEach, describe, expect, test } from "vitest";
import { useRentalInformation } from "../rentalInformation";
import type { Ref } from "vue";

describe('useRentalInformation', () => {
  describe('returned weeklyRentalPrice ref', () => {
    let weeklyRentalPrice: Ref<number | undefined>;

    beforeEach(() => {
      ({ weeklyRentalPrice } = useRentalInformation()); 
    });

    test('is undefined by default', () => {
      expect(weeklyRentalPrice.value).toEqual(undefined);
    });

    test('is shared across different instances of useRentalInformation', () => {
      weeklyRentalPrice.value = 100;

      const { weeklyRentalPrice: updatedWeeklyRentalPrice } = useRentalInformation();

      expect(updatedWeeklyRentalPrice.value).toEqual(100);
    });
  });

  describe('returned yearlyRentIncrease ref', () => {
    let yearlyRentIncrease: Ref<number | undefined>;

    beforeEach(() => {
      ({ yearlyRentIncrease } = useRentalInformation());
    });

    test('is 8.5, the national Australian average by default', () => {
      expect(yearlyRentIncrease.value).toEqual(8.5);
    });

    test('is shared across different instances of useRentalInformation', () => {
      yearlyRentIncrease.value = 20;

      const { yearlyRentIncrease: updatedYearlyRentIncrease } = useRentalInformation();

      expect(updatedYearlyRentIncrease.value).toEqual(20);
    });
  });
});