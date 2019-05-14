<template>
  <div class="container">
    Hi, {{ title }}
    <button type="button" name="button" @click="todo">点我</button>
  </div>
</template>

<script>
export default {
  name: "thirdSon",
  data() {
    return {
      title: "thirdSon"
    };
  },
  methods: {
    todo() {
      this.$bus.$emit("todoSth", {
        from: this.title,
        info: "Hi， I'm son_3."
      });
    }
  }
};
</script>

<style lang="css"></style>
