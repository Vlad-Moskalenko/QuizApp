<script setup>
import { useRoute, useRouter, RouterView } from 'vue-router';
import q from '../data/quizes.json';

const route = useRoute();
const router = useRouter();

const quizId = parseInt(route.params.id);
const quiz = q.find(quiz => quiz.id === quizId);
</script>

<template>
  <div v-if="quiz">
    <h1>Quiz {{ quiz.questions.length }}</h1>
    <RouterView />
    <button @click="router.push(`/quiz/${quizId}/question`)">Start</button>
  </div>
  <div v-else>Quiz not found</div>
</template>
