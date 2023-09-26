<script setup>
import { useRoute } from 'vue-router';
import q from '../data/quizes.json';

const route = useRoute();

const quiz = q.find(quiz => quiz.id === parseInt(route.params.id));
</script>

<template>
  <div v-if="quiz">Question {{ quiz.questions[0] }}</div>
  <div v-else>Questions not found</div>
</template>
