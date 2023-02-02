<template>
  <router-link
    class="item"
    :to="{ name: 'CatalogItem', params: { url: url, id: id } }"
  >
    <img :src="img" alt="" />
    <p class="name">
      <slot></slot>
    </p>
  </router-link>
</template>

<script>
export default {
  props: {
    img: String,
    id: Number,
    url: String,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
};
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  width: 292px;
  height: 270px;
  background: white;
  outline: 3px solid rgb(207, 216, 220);
  box-shadow: 5px 5px 5px black;
  margin-top: 20px;
}
.name {
  position: absolute;
  display: block;
  width: 100%;
  background-color: rgb(13, 17, 19);
  bottom: 0px;
  left: 0px;
  padding: 10px 0 7px 10px;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
  color: rgb(207, 216, 220);
  font-family: Arial, Helvetica, sans-serif;
}
img {
  width: 100%;
  height: 222px;
}
@media (max-width: 387px) {
    .item {
  margin-top: 0px;
}
}
</style>
