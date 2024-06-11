<script lang="ts" setup></script>

<template>
  <div class="vs-site">
    <the-header class="header" />

    <section class="intro">
      <div class="initial-logo">
        <img
          class="letter"
          src="/img/logo-v-transparent.png"
          alt="validstack v letter"
        />
      </div>
      <div class="welcome-text">alidStack</div>

      <div class="arrow"></div>
    </section>

    <partials-services-list-section />
    <partials-team-section />
    <partials-contact-section />

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
  /* color: #333; */
  /* font-family: monospace, Arial, Helvetica, sans-serif; */
}

.vs-site {
  width: 100%;
  height: 100%;
}

.intro {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation-container_depr {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.initial-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  animation: appearAndSlide 2s ease-in-out forwards;
}

@keyframes appearAndSlide {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-250px, -50%);
  }
}

.welcome-text {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #000;
  font-size: 84px;
  line-height: 1;
  font-weight: bold;
  font-family: monospace;
  opacity: 0;
  transform: translate(0, -8px);
  animation: fadeInText 1s ease-in-out 1.5s forwards;
}

@keyframes fadeInText {
  0% {
    opacity: 0;
    transform: translate(0, -8px);
  }
  100% {
    opacity: 1;
    transform: translate(-160px, -8px);
  }
}

.arrow {
  cursor: pointer;
}
.arrow:after {
  content: "🡣";
  position: absolute;
  width: 35px;
  height: 35px;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 30px;
  color: #000;
  opacity: 0;
  font-size: 35px;
  animation: appearAndPulse 1s ease-in-out infinite;
  animation-delay: 2.5s;
}

@keyframes appearAndPulse {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.about {
  background-color: blue;
}

.techs {
  background-color: green;
}
</style>
