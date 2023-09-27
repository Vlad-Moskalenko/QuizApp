<script>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container">
    <RouterView v-slot="{ Component, route }">
      <Transition name="route" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

.route-enter-from,
.router-leave-to {
  opacity: 0;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}

.route-enter-active,
.route-leave-active {
  transition: all 0.25s ease;
}
</style>
