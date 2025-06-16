<template>
  <v-grid>
    <v-row><basic-info/></v-row>
    <v-row>
      <v-col><rent-info/></v-col>
      <v-col><mortgage-info/></v-col>
    </v-row>
  </v-grid>
</template>

<script setup lang="ts">
import BasicInfo from './BasicInfo.vue';
import MortgageInfo from './MortgageInfo.vue';
import RentInfo from './RentInfo.vue';

</script>