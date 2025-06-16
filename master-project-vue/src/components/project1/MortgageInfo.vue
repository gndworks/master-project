<template>
  <v-form>
    <v-text-field
      label="Mortgage Amount"
      v-model="mortgageAmount"
      type="number"
      prepend-inner-icon="mdi-cash"
    />
    <v-text-field
      label="Monthly Repayment"
      v-model="monthlyRepayment"
      type="number"
      prepend-inner-icon="mdi-calendar-month"
    />
    <v-text-field
      label="Home Value"
      v-model="homeValue"
      type="number"
      prepend-inner-icon="mdi-home"
    />
    <v-text-field
      label="Yearly Home Appreciation"
      v-model="yearlyHomeAppreciation"
      type="number"
      prepend-inner-icon="mdi-trending-up"
    />
  </v-form>
</template>

<script setup lang="ts">
import { useMortgageInformation } from './composables/mortgageInformation';

const { mortgageAmount, monthlyRepayment, homeValue, yearlyHomeAppreciation } = useMortgageInformation();
</script>