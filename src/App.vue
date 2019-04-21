<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <!-- eslint-disable-next-line -->
            <!-- Attrubute 'exact' makes so that special vue class 'router-link-active' only applies to the exact route! -->
            <!-- eslint-disable-next-line -->
            <!-- This can also be done with adding attribute 'active-class="my-active-class-name"' -->
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png" />
              Build-a-Bot
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>
              Build
            </router-link>
          </li>

          <li class="nav-item cart">
            <router-link class="nav-link" to="/cart" exact>
              Cart
            </router-link>
            <div class="cart-items">
              {{cart.length}}
            </div>
          </li>

        </ul>
      </nav>
    </header>

    <div class="container">

      <aside class="aside">
        <router-view name="sidebar" />
      </aside>

      <main class="main">
        <!-- <RobotBuilder /> -->
        <router-view></router-view>
      </main>

    </div>

  </div>
</template>

<script>
// import RobotBuilder from './build/RobotBuilder.vue';

export default {
  name: 'app',
  // components: {
  //   RobotBuilder,
  // },
  computed: {
    cart() {
      // When returned from store/index
      // return this.$store.state.cart;
      // When moved to separate robots-module:
      return this.$store.state.robots.cart;
    },
  },
};
</script>


<style>
  body {
    background: linear-gradient( #555555, #999999);
    background-attachment: fixed;
  }

</style>


<style scoped>

/* Target div within child component with root-name (content) and deep selector (>>>) */
/* .content /deep/ .robot-name { or .content >>> .robot-name {
  border: 2px solid blue;
} */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

/* Special Vue class! */
.router-link-active {
  color: white;
}

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}

.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}

.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}

</style>
