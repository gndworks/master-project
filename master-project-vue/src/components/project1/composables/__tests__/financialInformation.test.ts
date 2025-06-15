import { describe, expect, test } from 'vitest';
import { useFinancialInformation } from '../financialInformation';

describe('financialInformation', () => {
  describe('useFinancialInformation', () => {
    test('returns a ref of yearly income defaulted to undefined', () => {
      const { yearlyIncome } = useFinancialInformation();

      expect(yearlyIncome.value).toEqual(undefined);
    });

    test('returns a ref of current savings defaulted to undefined', () => {
      const { currentSavings } = useFinancialInformation();

      expect(currentSavings.value).toEqual(undefined);
    });
  });
});