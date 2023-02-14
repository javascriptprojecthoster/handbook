<template>
  <h1 class="title">КАТЕГОРИИ</h1>
  <div class="catalogs">
    <router-link
      class="catalog"
      v-for="catalog of catalogs"
      :key="catalog.id"
      :to="{ name: 'Catalog', params: { url: catalog.url } }"
    >
      <img :src="catalog.img" alt="" />
      <p class="name">{{ catalog.name }}</p>
    </router-link>
     <p>Сайт посвящен 78-летию Победы советского народа в Великой Отечественной войне. В ней рассказывается о наиболее известных образцах отечественного вооружения и военной техники, сыгравших важную роль в Великой Отечественной войне и ставших символами Победы. Иллюстрированное рисунками, издание станет полезным не только учителям, но ученикам среднего и старшего школьного возраста, а также всем тем, кто интересуется военной историей России.</p>
  </div>

  <h1 class="title">ТЕХНИКА</h1>
  <div class="form-group">
    <label for="category">Выберите категорию:</label>
    <select id="country" class="form-control" v-model="category">
      <option
        v-for="(category, index) of categories"
        :key="index"
        :value="category.value"
      >
        {{ category.label }}
      </option>
    </select>
  </div>
  <div class="categories">
    <itemCatalog
      v-for="venichle of collection"
      :key="venichle.id"
      :img="venichle.img"
      :id="venichle.id"
      :url="venichle.url"
      >{{ venichle.name.substring(0, 10) }}</itemCatalog
    >
  </div>
  <div class="container">
    <div class="btn__toolbar">
      <div class="btn__group">
        <button
          class="btn"
          :class="{active: p == this.pagination.currentPage}"
          v-for="(p, index) in pagination.pages"
          :key="index"
          @click.prevent="setPage(p)"
        >
          {{ p }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import weapon from "../weapon.js";
import weaponMassiv from "../weaponMassiv.js";
import itemCatalog from "../components/itemCatalog.vue";

export default {
  components: { itemCatalog },
  data() {
    return {
      perPage: 6,
      pagination: {},
      allWeapons: [],
      allTank: [],
      allArtillery: [],
      allAviation: [],
      allGun: [],
      catalogs: weaponMassiv,
      category: "allWeapons",
      categories: [
        {
          label: "Всё",
          value: "allWeapons",
        },
        {
          label: "Танки",
          value: "allTank",
        },
        {
          label: "Артиллерия",
          value: "allArtillery",
        },
        {
          label: "Самолёты",
          value: "allAviation",
        },
        {
          label: "Стрелковое оружие",
          value: "allGun",
        },
      ],
      filterWeapons: [],
    };
  },
  methods: {
    setPage(p) {
      this.pagination = this.paginator(this.filterWeapons.length, p);

    },
    paginate(data) {
      return data.slice(
        this.pagination.startIndex,
        this.pagination.endIndex + 1
      );
    },
    paginator(totalItems, currentPage) {
      const startIndex = (currentPage - 1) * this.perPage,
        endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);

      return {
        currentPage,
        startIndex,
        endIndex,
        pages: this.fillMassive(this.filterWeapons.length),
      };
    },
    fillMassive(number) {
      const pages = Math.ceil(number/this.perPage)
      var filled = Array.apply(null, Array(pages)).map(function (val, index) {
        return index + 1;
      });

      return filled;
    },
  },
  computed: {
    collection() {
      return this.paginate(this.filterWeapons);
    },
  },
  watch: {
    category() {
      if (this.category == "allTank") {
        this.filterWeapons = this.allTank;
      } else if (this.category == "allArtillery") {
        this.filterWeapons = this.allArtillery;
      } else if (this.category == "allAviation") {
        this.filterWeapons = this.allAviation;
      } else if (this.category == "allGun") {
        this.filterWeapons = this.allGun;
      } else if (this.category == "allWeapons") {
        this.filterWeapons = this.allWeapons;
      }
      this.setPage(1)
    },
  },
  created() {
    this.allWeapons.push(...weapon.tanks.light);
    this.allWeapons.push(...weapon.tanks.medium);
    this.allWeapons.push(...weapon.tanks.heavy);
    this.allWeapons.push(...weapon.tanks.spai);
    this.allWeapons.push(...weapon.artillery.antiAircraft);
    this.allWeapons.push(...weapon.artillery.antiTank);
    this.allWeapons.push(...weapon.aviation.fighter);
    this.allWeapons.push(...weapon.aviation.bomber);
    this.allWeapons.push(...weapon.gun.pistol);
    this.allWeapons.push(...weapon.gun.rifle);
    this.allWeapons.push(...weapon.gun.machine);
    this.allWeapons.push(...weapon.gun.easelMachine);

    this.allTank.push(...weapon.tanks.light);
    this.allTank.push(...weapon.tanks.medium);
    this.allTank.push(...weapon.tanks.heavy);
    this.allTank.push(...weapon.tanks.spai);
    this.allArtillery.push(...weapon.artillery.antiAircraft);
    this.allArtillery.push(...weapon.artillery.antiTank);
    this.allAviation.push(...weapon.aviation.fighter);
    this.allAviation.push(...weapon.aviation.bomber);
    this.allGun.push(...weapon.gun.pistol);
    this.allGun.push(...weapon.gun.rifle);
    this.allGun.push(...weapon.gun.machine);
    this.allGun.push(...weapon.gun.easelMachine);

    this.filterWeapons = this.allWeapons;

    this.setPage(1)
  },

};
</script>

<style lang="scss" scoped>
.catalogs {
  max-width: 1100px;
  padding: 30px 10px 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: calc(20px + (40 - 20) * ((100vw - 320px) / (1200 - 320)));
}
.catalog {
  position: relative;
  max-width: 500px;
  min-width: 300px;
  width: 100%;
  overflow: hidden;
  box-shadow: inset 30px -30px 100px 50px rgb(38, 50, 56);
  transition: box-shadow 0.3s;
}
img {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -2;
  filter: blur(0.8px);
  transition: all 0.3s;
}
.name {
  position: absolute;
  bottom: calc(10px + (20 - 10) * ((100vw - 320px) / (1200 - 320)));
  left: calc(10px + (20 - 10) * ((100vw - 320px) / (1200 - 320)));
  font-size: calc(20px + (30 - 20) * ((100vw - 320px) / (1200 - 320)));
  font-weight: 600;
  text-decoration: none;
  color: rgb(207, 216, 220);
  font-family: Arial, Helvetica, sans-serif;
}
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

p {
  display: block;
  max-width: 1100px;
  padding-top: 20px;
  padding-left: 20px;
  margin: 0 auto;
  font-size: calc(15px + (25 - 15) * ((100vw - 320px) / (1200 - 320)));
  font-weight: 400;
  color: rgb(207, 216, 220);
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
}
.catalog:hover img {
  filter: blur(0px);
  transform: scale(1.1);
}
.catalog:hover {
  box-shadow: inset 30px -30px 70px 30px rgb(38, 50, 56);
  outline: 1px solid rgb(207, 216, 220);
}
.categories {
  max-width: 1100px;
  padding: 0px 10px 30px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}
.form-group {
  max-width: 1100px;
  padding: 20px;
  margin: 0 auto;
}
label {
  font-size: calc(20px + (30 - 20) * ((100vw - 320px) / (1200 - 320)));
  font-weight: 400;
  color: rgb(207, 216, 220);
  font-family: Arial, Helvetica, sans-serif;
}
select {
  margin: 0px 0 0 10px;
  font-size: calc(10px + (20 - 10) * ((100vw - 320px) / (1200 - 320)));
  font-weight: 300;
  color: rgb(13, 17, 19);
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px;
}
.container {
padding: 10px 10px 30px 10px;
}

.btn__group {
  display: flex;
  justify-content: center;
}
.btn {
  font-size: calc(20px + (20 - 20) * ((100vw - 320px) / (1200 - 320)));
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  margin-right: 7px;
}
.btn:last-child{
  margin-right: 0px;
}
.btn:hover{
  transform: scale(1.1);
}
.active{
  background: rgb(40,52,58);
  color: white;
}
@media (max-width: 480px) {
  .catalogs {
    margin-top: 20px;
  }
  .title {
    padding-top: 20px;
  }
  .title:first-child {
    padding-top: 30px;
  }
}
@media (max-width: 387px) {
  select {
    margin: 10px 0 0 22px;
  }
  .catalogs {
    max-width: 1100px;
    padding: 20px 10px 20px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: calc(20px + (40 - 20) * ((100vw - 320px) / (1200 - 320)));
  }
}
</style>
