<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div>
      <h3>Office location</h3>
      <address>Gladsaxevej 34, st. th., 2860 Søborg, Denmark</address>
      <span>CVR 45290980</span>
    </div>
    <div>
      <h3>Get in touch</h3>
      <a href="mailto:hello@validstack.pro">hello@validstack.pro</a>
      <div class="social">
        <a href="https://github.com/ValidStack" title="Follow us on GitHub" target="_blank">
          <img src="/img/github.png" alt="github" />
        </a>
        <!-- <a
          href="https://www.upwork.com/agencies/validstack/"
          title="Hire us on Upwork (for small projects)"
        >
          <img src="/img/upwork.png" alt="upwork logo" />
        </a> -->
      </div>
    </div>
  </footer>
</template>

<style lang="postcss">
footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 10px;
  background-color: #e5e5e5;
  min-height: 100px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    line-height: 1.5;

    h3 {
      font-weight: bold;
    }

    img {
      max-width: 20px;
    }
  }

  .social {
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    a {
      margin: 0 5px;
    }

  }
}
</style>
