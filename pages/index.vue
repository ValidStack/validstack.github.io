<script lang="ts" setup></script>

<template>
  <section class="intro">
    <div class="initial-logo">
      <img
        class="letter"
        src="/img/logo-v-transparent.png"
        alt="validstack v letter"
      />
    </div>
    <div class="welcome-text">alidStack</div>

    <a href="#services" class="arrow">
      <img class="arrow__img" src="/img/down-arrow.png" alt="arrow-downr" />
    </a>
  </section>

  <partials-services-list-section />
  <partials-team-section />
  <partials-portfolio-section />
  <partials-contact-section />
</template>

<style>
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
  position: absolute;
  left: 50%;
  right: 0;
  bottom: 70px;
  transform: translateX(-15px);
}

.arrow__img {
  opacity: 0;
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

/* Styles for tablet devices */
@media screen and (max-width: 550px) {
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
      transform: translate(-125px, -50%);
    }
  }

  .letter {
    max-width: 50%;
  }

  .welcome-text {
    font-size: 42px;
    transform: translate(0, -8px);
  }
  @keyframes fadeInText {
    0% {
      opacity: 0;
      transform: translate(0, -8px);
    }
    100% {
      opacity: 1;
      transform: translate(-80px, -8px);
    }
  }
}

/* Styles for mobile devices */
@media screen and (max-width: 425px) {
}
</style>
