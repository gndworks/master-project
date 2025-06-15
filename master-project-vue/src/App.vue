<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawerOpen = !drawerOpen"></v-app-bar-nav-icon>
      <v-toolbar-title>Guan's Master Project</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawerOpen">
      <v-list>
        <v-list-item link>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>Project 1</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <!-- Main content here -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const drawerOpen = ref(true);

</script>

<style scoped>
</style>
