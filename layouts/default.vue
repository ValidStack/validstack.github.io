<template>
  <div class="vs-site">
    <the-header class="header" />
    <slot />
    <the-footer />
  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  color: #333;
  scroll-behavior: smooth;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  animation: smooth-appear 1s ease forwards;
  animation-delay: 2.5s;
}
@keyframes smooth-appear {
  to {
    opacity: 1;
  }
}

#vs-site-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
  max-width: 1280px;
  margin: 0 auto;
}

.vs-site {
  width: 100%;
  height: 100%;
}
</style>
