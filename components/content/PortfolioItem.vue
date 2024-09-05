<template>
  <section class="portfolio-item">
    <!-- two colunm layout. Aside on the left -->
    <section class="portfolio-item__aside">
      <ContentSlot :use="$slots.aside" unwrap="p"></ContentSlot>
    </section>
    <section class="portfolio-item__main">
      <h1 class="portfolio-item__title">
        <ContentSlot :use="$slots.title" unwrap="p"></ContentSlot>
      </h1>
      <div class="portfolio-item__subtitle">
        <ContentSlot :use="$slots.date" unwrap="p"></ContentSlot>
        &nbsp;
        <ContentSlot :use="$slots.country" unwrap="p"></ContentSlot>
      </div>
      <h2>Business description</h2>
      <slot name="description"></slot>
      <h2>Our contribution</h2>
      <slot name="contribution"></slot>
      <span v-for="i in +stars" :key="i">*</span>
      <slot name="review"></slot>
    </section>
  </section>
</template>

<script lang="ts" setup>
defineProps(["stars"]);
</script>

<style lang="postcss">
.portfolio-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;

  &__aside {
    flex: 1;
  }

  &__main {
    flex: 1;
  }

  &__title {
    /* margin-bottom: 20px; */
    font-size: 34px;
  }

  &__subtitle {
    margin-bottom: 20px;
    font-size: 14px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
}
</style>
