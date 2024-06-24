<template>
  <div class="service-list-item">
    <div class="service-list-item__title">
      {{ title }}
    </div>
    <div class="service-list-item__text">
      {{ text }}
    </div>
    <div class="service-list-item__technologies">
      {{ technologies }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  text: String,
  technologies: String,
});
</script>

<style lang="postcss">
.service-list-item {
  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: left;
  }

  &__technologies {
    margin-top: 5px;
    font-size: 14px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
}
</style>
