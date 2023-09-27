<script setup>
import gsap from 'gsap';

const emit = defineEmits(['selectedOption']);

defineProps({
  question: Object,
});

const beforeEnter = el => {
  el.style.opacity = 0;
  el.style.transform = 'translateX(-100px)';
};

const enter = el => {
  gsap.to(el, {
    x: 0,
    opacity: 1,
    duration: 0.2,
    delay: el.dataset.index * 0.2,
  });
};
</script>

<template>
  <div>
    <div class="question-container">
      <h1 class="question">{{ question.text }}</h1>
    </div>
    <ul class="options">
      <TransitionGroup name="question" appear @before-enter="beforeEnter" @enter="enter">
        <li
          @click="emit('selectedOption', option.isCorrect)"
          v-for="(option, index) in question.options"
          :key="option.id"
          :data-index="index"
          class="option"
        >
          <p class="option-label">{{ option.label }}</p>
          <div class="option-value">
            <p>{{ option.text }}</p>
          </div>
        </li>
      </TransitionGroup>
    </ul>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 20px;
}

.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.options {
  list-style: none;
  padding-left: 0;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  background-color: bisque;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  background-color: rgb(244, 239, 239);
  width: 100%;
  font-size: 30px;
  padding: 0 20px;
}
</style>
