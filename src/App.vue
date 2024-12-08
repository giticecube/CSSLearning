<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>html/css/javascript</header>
  <div class="content">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/hello">Hello</router-link>
    </div>
    <RouterView />

  </div>
</template>

<style scoped>
.content {
  display: flex;

}

.nav {
  display: flex;
  flex-direction: column;
  width: 20%;
}
</style>
