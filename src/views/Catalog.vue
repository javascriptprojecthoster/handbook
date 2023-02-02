<template>
  <h1 class="title">{{ title }}</h1>
  <div class="categories">
    <itemCatalog
      v-for="weapon of weapons"
      :key="weapon.id"
      :img="weapon.img"
      :id="weapon.id"
      :to="{ name: 'CatalogItem', params: { id: weapon.id } }"
    >
      {{ weapon.name.substring(0, 10) }}
    </itemCatalog>
  </div>
</template>

<script>
import weapon from "../weapon.js";
import itemCatalog from "../components/itemCatalog.vue";

export default {
  components: { itemCatalog },
  data() {
    return {
      weapons: [],
      title: ''
    };
  },
  methods: {},
  watch: {},
  created() {
    const weapons = [];
    if (this.$route.params.url == "tanks") {
      weapons.push(...weapon.tanks.light);
      weapons.push(...weapon.tanks.medium);
      weapons.push(...weapon.tanks.heavy);
      weapons.push(...weapon.tanks.spai);
      this.title = 'Наземная техника'
      this.weapons = weapons;
    } else if (this.$route.params.url == "artillery") {
      weapons.push(...weapon.artillery.antiAircraft);
      weapons.push(...weapon.artillery.antiTank);
      this.title = 'Артиллерия'
      this.weapons = weapons;
    } else if (this.$route.params.url == "aircraft") {
      weapons.push(...weapon.aviation.bomber);
      weapons.push(...weapon.aviation.fighter);
      this.title = 'Авиация'
      this.weapons = weapons;
    } else if (this.$route.params.url == "gun") {
      weapons.push(...weapon.gun.pistol);
      weapons.push(...weapon.gun.rifle);
      weapons.push(...weapon.gun.machine);
      weapons.push(...weapon.gun.easelMachine);
      this.title = 'Стрелковое оружие'
      this.weapons = weapons;
    }
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: block;
  max-width: 1100px;
  padding-top: 50px;
  padding-left: 20px;
  margin: 0 auto;
  font-size: calc(30px + (50 - 30) * ((100vw - 320px) / (1200 - 320)));
  font-weight: 600;
  color: rgb(207, 216, 220);
  font-family: Arial, Helvetica, sans-serif;
}
.categories {
  max-width: 1100px;
  padding: 20px 10px 30px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}
</style>
