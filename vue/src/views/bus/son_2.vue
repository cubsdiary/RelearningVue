<template>
  <div class="container">
    Hi, {{ title }}
    <p>
      <button type="button" name="button" @click="change">改bus呀</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "secondSon",
  data() {
    return {
      title: "secondSon",
      busName: "second bus"
    };
  },
  methods: {
    change() {
      this.$bus.busName = "second change name.";
    }
  }
};
</script>

<style lang="css"></style>
