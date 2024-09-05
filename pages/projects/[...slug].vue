<template>
  <main class="content">
    <ContentDoc />
  </main>
</template>

<script setup></script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  animation: smooth-appear 1s ease forwards !important;
  animation-delay: 0s !important;
}
.content {
  padding-top: 50px;
}
</style>
