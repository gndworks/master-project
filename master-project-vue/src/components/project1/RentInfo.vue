<template>
  <v-form>
    <v-text-field
      label="Weekly Rental Price"
      v-model="weeklyRentalPrice"
      type="number"
      prepend-icon="mdi-currency-usd"
      required
    ></v-text-field>
    <v-text-field
      label="Yearly Rent Increase"
      v-model="yearlyRentIncrease"
      type="number"
      prepend-icon="mdi-trending-up"
      required
    ></v-text-field>
  </v-form>
</template>

<script setup lang="ts">
import { useRentalInformation } from './composables/rentalInformation';

const { weeklyRentalPrice, yearlyRentIncrease } = useRentalInformation();
</script>