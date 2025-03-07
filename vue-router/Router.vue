<template>
  <div class="container">
    <h1>🎮 Game Pack</h1>
    <div class="nav">
      <router-link to="/number-baseball" class="nav-item">⚾ Number Baseball</router-link>
      <router-link to="/response-check" class="nav-item">⏱️ Response Check</router-link>
      <router-link to="/rock-scissors-paper" class="nav-item">✊✌️✋ Rock Scissors Paper</router-link>
      <router-link to="/lotto-generator" class="nav-item">🎰 Lotto Generator</router-link>
    </div>
    <router-view class="view-area"></router-view>
  </div>
</template>

<script>
import router from "./Route.js";

export default {
  router,
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
  font-family: "Arial", sans-serif;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.nav-item {
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s ease;
}

.nav-item:hover {
  background-color: #0056b3;
}

.view-area {
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  min-height: 200px;
}
</style>
