<template>
  <v-form>
    <v-text-field
      label="Yearly Income"
      v-model="yearlyIncome"
      type="number"
      prepend-icon="mdi-currency-usd"
      required
    ></v-text-field>
    <v-text-field
      label="Current Savings"
      v-model="currentSavings"
      type="number"
      prepend-icon="mdi-bank"
      required
    ></v-text-field>
  </v-form>
</template>

<script setup lang="ts">
import { useFinancialInformation } from './composables/financialInformation';

const { yearlyIncome, currentSavings } = useFinancialInformation();
</script>