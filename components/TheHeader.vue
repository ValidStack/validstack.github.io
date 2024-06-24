<script setup lang="ts">
const menuItems = [
  {
    name: "Services",
    url: "services",
  },
  {
    name: "Team",
    url: "team",
  },
  {
    name: "Contact",
    url: "contact",
  },
];
</script>

<template>
  <header>
    <div class="menu">
      <a :href="'#' + item.url" v-for="item in menuItems" :key="item.name">{{
        item.name
      }}</a>
      <a
        href="https://www.upwork.com/agencies/validstack/"
        title="Hire us on Upwork"
      >
        Hire us
      </a>
    </div>
    <div class="links">
      <!-- <a
        href="https://www.upwork.com/agencies/validstack/"
        title="Hire us on Upwork"
      >
        Hire us
      </a> -->
      <!-- upwork image with link -->
      <!-- <a
        href="https://www.upwork.com/agencies/validstack/"
        title="Hire us on Upwork"
      >
        <img src="/img/upwork.png" alt="upwork logo" />
      </a> -->
      <!-- github image with link -->
      <!-- <a href="https://github.com/ValidStack" title="Fork us on GitHub">
        <img src="/img/github.png" alt="github logo" />
      </a> -->
    </div>
  </header>
</template>

<style lang="postcss">
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 1;
}
.menu {
  display: flex;
  flex-direction: row;
  gap: 100px;

  > a {
    margin: 0 10px;

    text-transform: lowercase;
  }
}
.links {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;

  a {
    margin: 0 10px;
  }
  img {
    width: 25px;
  }
}

@media screen and (max-width: 768px) {
  .menu {
    gap: 50px;
  }
}
@media screen and (max-width: 470px) {
  .menu {
    gap: 30px;
  }
}

@media screen and (max-width: 400px) {
  .menu {
    gap: 5px;
  }
}
</style>
