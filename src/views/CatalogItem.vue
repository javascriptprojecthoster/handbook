<template >
  <div class="container">
      <div class="table" v-if="this.$route.params.url == 'tanks'">
        <table class="features-table">
          <thead>
            <tr>
              <th colspan="2">
                <h2 style="padding: 5px 5px 10px 5px; font-size: 40px">
                  <span id="__-34_1940"
                    >Характеристики танка {{ weapon.name }}</span
                  >
                </h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">
                <img
                  :src="weapon.img"
                  alt="{{ weapon.type weapon.name}}"
                  class="alignleft"
                  style="width: 100%; margin: 0px 0px 5px 0px"
                />
              </td>
            </tr>
            <tr>
              <td><b>Тип:</b></td>
              <td>{{ weapon.type }}</td>
            </tr>
            <tr>
              <td><b>Дата выпуска:</b></td>
              <td>{{weapon.releaseDate}}</td>
            </tr>
            <tr>
              <td><b>Длинна:</b></td>
              <td>{{weapon.length}}</td>
            </tr>
            <tr>
              <td><b>Ширина:</b></td>
              <td>{{weapon.width}}</td>
            </tr>
            <tr>
              <td><b>Высота:</b></td>
              <td>{{weapon.height}}</td>
            </tr>
            <tr>
              <td><b>Броня, лоб:</b></td>
              <td>{{weapon.armorForehead}}</td>
            </tr>
            <tr>
              <td><b>Броня, борт:</b></td>
              <td>{{weapon.armorSide}}</td>
            </tr>
            <tr>
              <td><b>Броня, башня:</b></td>
              <td>{{weapon.armorTurret}}</td>
            </tr>
            <tr>
              <td><b>Экипаж:</b></td>
              <td>{{weapon.crew}}</td>
            </tr>
            <tr>
              <td><b>Двигатель:</b></td>
              <td>{{weapon.engine}}</td>
            </tr>
            <tr>
              <td><b>Дальность хода:</b></td>
              <td>{{weapon.travelRange}}</td>
            </tr>
            <tr>
              <td><b>Максимальная скорость:</b></td>
              <td>{{weapon.maxSpeed}}</td>
            </tr>
            <tr>
              <td><b>Масса:</b></td>
              <td>{{weapon.weight}}</td>
            </tr>
            <tr>
              <td><b>Вооружение:</b></td>
              <td>
                {{weapon.armament}}
              </td>
            </tr>
            <tr>
              <td><b>Всего произведено:</b></td>
              <td>
                {{weapon.total}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table" v-if="this.$route.params.url == 'artillery'">
        <table class="features-table">
          <thead>
            <tr>
              <th colspan="2">
                <h2 style="padding: 5px 5px 10px 5px; font-size: 40px">
                  <span id="__-34_1940"
                    >Характеристики танка {{ weapon.name }}</span
                  >
                </h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">
                <img
                  :src="weapon.img"
                  alt="{{ weapon.type weapon.name}}"
                  class="alignleft"
                  style="width: 100%; margin: 0px 0px 5px 0px"
                />
              </td>
            </tr>
            <tr>
              <td><b>Тип:</b></td>
              <td>{{ weapon.type }}</td>
            </tr>
            <tr>
              <td><b>Дата выпуска:</b></td>
              <td>{{weapon.releaseDate}}</td>
            </tr>
            <tr>
              <td><b>Рассчёт:</b></td>
              <td>{{weapon.crew}}</td>
            </tr>
            <tr>
              <td><b>Калибр:</b></td>
              <td>{{weapon.caliber}}</td>
            </tr>
            <tr>
              <td><b>Длинна:</b></td>
              <td>{{weapon.length}}</td>
            </tr>
            <tr>
              <td><b>Ширина:</b></td>
              <td>{{weapon.width}}</td>
            </tr>
            <tr>
              <td><b>Вес:</b></td>
              <td>{{weapon.weight}}</td>
            </tr>
            <tr>
              <td><b>Скорострельность:</b></td>
              <td>{{weapon.rateFire}}</td>
            </tr>
            <tr>
              <td><b>Дистанция стрельбы::</b></td>
              <td>{{weapon.shootingDistance}}</td>
            </tr>
            <tr>
              <td><b>Начальная скорость снаряда:</b></td>
              <td>{{weapon.muzzleVelocity}}</td>
            </tr>
            <tr>
              <td><b>Боекомплект:</b></td>
              <td>{{weapon.ammunition}}</td>
            </tr>
            <tr>
              <td><b>Всего произведено:</b></td>
              <td>
                {{weapon.total}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table" v-if="this.$route.params.url == 'aircraft'">
        <table class="features-table">
          <thead>
            <tr>
              <th colspan="2">
                <h2 style="padding: 5px 5px 10px 5px; font-size: 40px">
                  <span id="__-34_1940"
                    >Характеристики танка {{ weapon.name }}</span
                  >
                </h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">
                <img
                  :src="weapon.img"
                  alt="{{ weapon.type weapon.name}}"
                  class="alignleft"
                  style="width: 100%; margin: 0px 0px 5px 0px"
                />
              </td>
            </tr>
            <tr>
              <td><b>Тип:</b></td>
              <td>{{ weapon.type }}</td>
            </tr>
            <tr>
              <td><b>Дата выпуска:</b></td>
              <td>{{weapon.releaseDate}}</td>
            </tr>
            <tr>
              <td><b>Экипаж:</b></td>
              <td>{{weapon.crew}}</td>
            </tr>
            <tr>
              <td><b>Двигатель:</b></td>
              <td>{{weapon.engine}}</td>
            </tr>
            <tr>
              <td><b>Максимальная скорость:</b></td>
              <td>{{weapon.maxSpeed}}</td>
            </tr>
            <tr>
              <td><b>Практический потолок:</b></td>
              <td>{{weapon.practicalCeiling}}</td>
            </tr>
            <tr>
              <td><b>Дальность полета:</b></td>
              <td>{{weapon.rangeFlight}}</td>
            </tr>
            <tr>
              <td><b>Масса пустого:</b></td>
              <td>{{weapon.emptyWeight}}</td>
            </tr>
            <tr>
              <td><b>Максимальная взлетная масса:</b></td>
              <td>{{weapon.maximumTakeoffWeight}}</td>
            </tr>
            <tr>
              <td><b>Размах крыльев:</b></td>
              <td>{{weapon.wingspan}}</td>
            </tr>
            <tr>
              <td><b>Длинна:</b></td>
              <td>{{weapon.length}}</td>
            </tr>
            <tr>
              <td><b>Высота:</b></td>
              <td>{{weapon.width}}</td>
            </tr>
            <tr>
              <td><b>Площадь крыла:</b></td>
              <td>{{weapon.wingArea}}</td>
            </tr>
            <tr>
              <td><b>Вооружение:</b></td>
              <td>
                {{weapon.armament}}
              </td>
            </tr>
            <tr>
              <td><b>Всего произведено:</b></td>
              <td>
                {{weapon.total}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table" v-if="this.$route.params.url == 'gun'">
        <table class="features-table">
          <thead>
            <tr>
              <th colspan="2">
                <h2 style="padding: 5px 5px 10px 5px; font-size: 40px">
                  <span id="__-34_1940"
                    >Характеристики танка {{ weapon.name }}</span
                  >
                </h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">
                <img
                  :src="weapon.img"
                  alt="{{ weapon.type weapon.name}}"
                  class="alignleft"
                  style="width: 100%; margin: 0px 0px 5px 0px"
                />
              </td>
            </tr>
            <tr>
              <td><b>Тип:</b></td>
              <td>{{ weapon.type }}</td>
            </tr>
            <tr>
              <td><b>Дата выпуска:</b></td>
              <td>{{weapon.releaseDate}}</td>
            </tr>
            <tr>
              <td><b>Вес (без патронов, кг):</b></td>
              <td>{{weapon.weight}}</td>
            </tr>
            <tr>
              <td><b>Длина (мм):</b></td>
              <td>{{weapon.length}}</td>
            </tr>
            <tr>
              <td><b>Калибр:</b></td>
              <td>{{weapon.caliber}}</td>
            </tr>




            <tr>
              <td><b>Темп стрельбы (в минуту):</b></td>
              <td>{{weapon.rateFire}}</td>
            </tr>
            <tr>
              <td><b>Начальная скорость пули (м/с):</b></td>
              <td>{{weapon.muzzleVelocity}}</td>
            </tr>
            <tr>
              <td><b>Емкость магазина:</b></td>
              <td>{{weapon.ammunition}}</td>
            </tr>
  



            <tr>
              <td><b>Всего произведено:</b></td>
              <td>
                {{weapon.total}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info" v-html="weapon.description">
      </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  color: rgb(207, 216, 220);
}
.container {
  width: 100%;
  padding: 10px;
}
.table{
  max-width: 640px;
  margin: 0 auto
}
tbody{
  font-size: 20px;
}
td{
  padding: 10px;
  border: 1px solid white;
}
p {
  font-size: calc(20px + (30 - 20) * ((100vw - 320px) / (1200 - 320)));
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
}
.info{
  max-width: 900px;
  margin: 0 auto;
  font-size: 20px;
  margin-top: 40px;
  padding-bottom: 20px;
  text-align: justify;
}
</style>

<script>
import weapon from "../weapon.js";
import itemCatalog from "../components/itemCatalog.vue";

export default {
  components: { itemCatalog },
  data() {
    return {
      allWeapons: [],
      weapon: null,
    };
  },
  methods: {},
  watch: {},
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

    this.weapon = this.allWeapons.find(
      (weapon) => weapon.id == this.$route.params.id
    );
  },
};
</script>
