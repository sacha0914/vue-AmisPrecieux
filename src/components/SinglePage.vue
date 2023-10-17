<script >
import Header from '../components/Header.vue';
import Home from '../components/Home.vue';
import Footer from '../components/Footer.vue';

export default {
components: {
      'component-header': Header,
      'component-home': Home,
      'component-footer': Footer
}
};
</script>

<template>

  <component-header></component-header>
  <component-home></component-home>
  <component-footer></component-footer>
</template>

<style scoped>

</style>