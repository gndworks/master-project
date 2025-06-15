import { describe, expect, test } from 'vitest';
import { useFinancialInformation } from '../financialInformation';

describe('financialInformation', () => {
  describe('useFinancialInformation', () => {
    test('returns a ref of yearly income defaulted to undefined', () => {
      const { yearlyIncome } = useFinancialInformation();

      expect(yearlyIncome.value).toEqual(undefined);
    });

    test('returns a ref of yearly income that has a shared value', () => {
      const { yearlyIncome } = useFinancialInformation();
      yearlyIncome.value = 100;

      const { yearlyIncome: updatedYearlyIncome } = useFinancialInformation();
      expect(updatedYearlyIncome.value).toEqual(100);
    });

    test('returns a ref of current savings defaulted to undefined', () => {
      const { currentSavings } = useFinancialInformation();

      expect(currentSavings.value).toEqual(undefined);
    });

    test('returns a ref of current savings that has a shared value', () => {
      const { currentSavings } = useFinancialInformation();
      currentSavings.value = 100;

      const { currentSavings: updatedCurrentSavings } = useFinancialInformation();
      expect(updatedCurrentSavings.value).toEqual(100);
    });
  });
});