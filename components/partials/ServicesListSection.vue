<template>
  <section class="section section_services" id="services">
    <h2 class="section__title">Services</h2>
    <div class="section__content services-list">
      <service-list-item
        v-for="service in services"
        :key="service.title"
        v-bind="service"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const services = [
  {
    title: "Web Development",
    text: "Frontend and Backend development, creation of dynamic and interactive Enterprise level web applications. Our team ensures seamless integration and performance across all devices.",
    technologies: "Javascript, Typescript, Vue, Nuxt, Strapi, Node.js, React",
  },
  {
    title: "Dashboards and Interactive Data Visualization",
    text: "Transform your data into visual masterpieces. Our stunning dashboards and visualizations make information accessible and understandable, empowering data-driven decision-making.",
    technologies: "d3.js, highcharts, svg.js, chart.js",
  },
  {
    title: "API Design & Development",
    text: "Comprehensive API design and development to enhance the connectivity and functionality of your applications. We create robust and scalable RESTful and GraphQL APIs tailored to your specific needs.",
    technologies: "REST, GraphQL, Strapi, FastAPI, Node.js, Python",
  },
  {
    title: "Mobile Development",
    text: "End-to-end mobile app development for iOS and Android, including Progressive Web Apps (PWA). We deliver high-performance, user-friendly, and feature-rich mobile apps to meet your business requirements.",
    technologies: "Ionic, Capacitor, Vue Native, Flutter, React Native, PWA",
  },
];
</script>

<style lang="postcss">
.section_services {
  .section__title::before {
    background-color: #007dc8;
  }
}

.services-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
</style>
