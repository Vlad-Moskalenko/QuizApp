<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import quizes from '../data/quizes.json';

import QuizHeader from '../components/QuizHeader.vue';
import QuizQuestion from '../components/QuizQuestion.vue';
import QuizResult from '../components/QuizResult.vue';

const route = useRoute();

const quizId = parseInt(route.params.id);
const quiz = quizes.find(quiz => quiz.id == parseInt(quizId));

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

const questionStatus = computed(() => `${currentQuestionIndex.value} / ${quiz.questions.length}`);
const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);

const selectedOption = isCorrect => {
  if (isCorrect) {
    numberOfCorrectAnswers.value += 1;
  }

  if (currentQuestionIndex.value === quiz.questions.length - 1) {
    showResults.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuizHeader :question-status="questionStatus" :bar-percentage="barPercentage" />
    <Transition name="fade">
      <QuizQuestion
        v-if="!showResults"
        :question="quiz.questions[currentQuestionIndex]"
        @selected-option="selectedOption"
      />
      <QuizResult
        v-else
        :number-of-correct-answers="numberOfCorrectAnswers"
        :quiz-questions-length="quiz.questions.length"
      />
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>
