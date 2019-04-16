<template>

  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">

      <!-- 1. Conditional inline styling: -->
      <!-- <div class="top part" :style="headBorderStyle"> -->
      <!-- 2. Conditional class: -->
      <!-- <div class="top part" :class="{'sale-border': selectedRobot.head.onSale}"> -->
      <!-- 3. Conditional class & regular classes together: -->
      <div :class="[saleBorderClass, 'top', 'part']">

        <!-- v-once will run ONCE, but we don't want that here.. -->
        <!-- <div v-once class="robot-name"> -->
        <div class="robot-name">
          {{ selectedRobot.head.title }}

          <!-- If v-if is false, the element is removed completely from dom -->
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>

          <!-- If v-show is false, the element gets styling 'display: none' -->
          <!-- <span v-show="selectedRobot.head.onSale" class="sale">Sale!</span> -->

          <!-- v-show is better for expensive repetative rendering (so it won't have to rerender all the time) -->

        </div>

        <!-- 'v-bind:src' or just ':src' here. Just ':' is short for 'v-bind:' -->
        <!-- <img v-bind:src="availableParts.heads[selectedHeadIndex].src" title="head"/> -->
        <img :src="selectedRobot.head.src" title="head"/>

        <!-- 'v-on:click' or just '@black' here. Just '@' is short for 'v-on:' -->
        <!-- <button v-on:click="selectPreviousHead()" class="prev-selector">&#9668;</button> -->
        <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>

        <button v-on:click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="selectedRobot.leftArm.src" title="left arm"/>
        <button v-on:click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="selectedRobot.torso.src" title="left arm"/>
        <button v-on:click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="selectedRobot.rightArm.src" title="left arm"/>
        <button v-on:click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="selectedRobot.base.src" title="left arm"/>
        <button v-on:click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>

    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>

          <!-- Needs unique key, eg index -->
          <tr v-for="(robot, index) in cart" :key="index">
            <td> {{ robot.head.title }} </td>
            <td class="cost"> {{ robot.cost }} </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>

</template>

<script>

  import availableParts from '../data/parts';
  import createdHookMixin from './created-hook-mixin'

  function getPreviousValidIndex(index, length) {
    const deprecatedIndex = index -1;
    return deprecatedIndex < 0 ? length -1 : deprecatedIndex;
  }

  function getNextValidIndex(index, length) {
    const incrementedIndex = index -1;
    return incrementedIndex < 0 ? length -1 : incrementedIndex;
  }



  export default {
    name: 'RobotBuilder',
    data() {
      return {
        availableParts,
        cart: [],
        selectedHeadIndex: 0,
        selectedLeftArmIndex: 0,
        selectedTorsoIndex: 0,
        selectedRightArmIndex: 0,
        selectedBaseIndex: 0,
      };
    },
    mixins: [createdHookMixin],
    computed: {
      saleBorderClass() {
        return this.selectedRobot.head.onSale ? 'sale-border' : '';
      },
      // Conditional inline styling:
      // headBorderStyle() {
      //   return {
      //     border: this.selectedRobot.head.onSale ? '3px solid red' : '3px solid grey'
      //   };
      // },
      selectedRobot () {
          return {
            head: availableParts.heads[this.selectedHeadIndex],
            leftArm: availableParts.arms[this.selectedLeftArmIndex],
            torso: availableParts.torsos[this.selectedTorsoIndex],
            rightArm: availableParts.arms[this.selectedRightArmIndex],
            base: availableParts.bases[this.selectedBaseIndex],

          }

      }
    },
    methods: {
      addToCart() {
        const robot = this.selectedRobot;
        const cost = robot.head.cost + robot.leftArm.cost + robot.torso.cost + robot.rightArm.cost + robot.base.cost;
        this.cart.push(Object.assign({}, robot, { cost }));

      },
      selectNextHead() {
        this.selectedHeadIndex = getNextValidIndex(this.selectedHeadIndex, availableParts.heads.length);
      },
      selectPreviousHead() {
        this.selectedHeadIndex = getPreviousValidIndex(this.selectedHeadIndex, availableParts.heads.length);
      },
      selectNextLeftArm() {
        this.selectedLeftArmIndex = getNextValidIndex(this.selectedLeftArmIndex, availableParts.arms.length);
      },
      selectPreviousLeftArm() {
        this.selectedLeftArmIndex = getPreviousValidIndex(this.selectedLeftArmIndex, availableParts.arms.length);
      },
      selectNextTorso() {
        this.selectedTorsoIndex = getNextValidIndex(this.selectedTorsoIndex, availableParts.torsos.length);
      },
      selectPreviousTorso() {
        this.selectedTorsoIndex = getPreviousValidIndex(this.selectedRightIndex, availableParts.arms.length);
      },
      selectNextRightArm() {
        this.selectedRightArmIndex = getNextValidIndex(this.selectedRightArmIndex, availableParts.arms.length);
      },
      selectPreviousRightArm() {
        this.selectedRightArmIndex = getPreviousValidIndex(this.selectedRightArmIndex, availableParts.arms.length);
      },
      selectNextBase() {
        this.selectedBaseIndex = getNextValidIndex(this.selectedBaseIndex, availableParts.bases.length);
      },
      selectPreviousBase() {
        this.selectedBaseIndex = getPreviousValidIndex(this.selectedBaseIndex, availableParts.bases.length);
      },


    }
  }

</script>

<style lang="scss" scoped>

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}

.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part {
  img {
    width:165px;
  }
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale{
  color: red;
}

td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}

.sale-border {
  border: 3px solid red;
}
</style>
