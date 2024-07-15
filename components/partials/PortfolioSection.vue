<template>
  <section class="section section_portfolio" id="portfolio">
    <h2 class="section__title">Portfolio</h2>
    <div class="section__content">
      <p>
        At ValidStack we take pride in delivering cutting-edge solutions for our
        clients. Explore our work and discover how we can transform your vision
        to reality.
      </p>
      <div class="section__button">
        <a href="/portfolio/validstack_company_brochure.pdf" class="button button_portfolio">Explore Our Portfolio</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="postcss">
.section_portfolio {
  .section__title::before {
    background-color: #007dc8;
  }

  .section__button {
    display: flex;
    justify-content: center;
  }

  .button_portfolio {
    margin-top: 15px;
    display: inline-block;
    background-color: #fff;
    border: 1px solid #007dc8;
    color: #007dc8;
    padding: 5px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #007dc8;
      color: #fff;
    }
  }
}
</style>
