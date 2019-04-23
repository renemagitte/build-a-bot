<template>
  <div id="app">
    <!-- Demo... -->
    <!-- Root Foo: {{rootFoo}} <br />
    Robots Foo: {{robotsFoo}} <br />
    Users Foo: {{usersFoo}} <br />
    <br />
    Root Getter Foo: {{rootGetterFoo}} <br />
    Robots Getter Foo: {{robotsGetterFoo}} <br /> -->

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

// Adding a helper for less code in computed section:
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'app',
  // components: {
  //   RobotBuilder,
  // },
  // Examples on how to reach states and getters in root vs namespaced module stores vs NON-namespaced modules:
  // root and NON-namespaced modules shares namespace (and so getters within it), but not state!!!
  // Also users getter will apply to root in this scenario..........
  computed: {
    ...mapState({
      rootFoo: 'foo',
      usersFoo: state => state.users.foo
    }),
    // An alternative to robotsFoo above would be (works with namespaced moldules only)
    ...mapState('robots', { robotsFoo: 'foo' }),
    // rootFoo() {
    //   return this.$store.state.foo;
    // },
    // robotsFoo() {
    //   return this.$store.state.robots.foo;
    // },
    // usersFoo() {
    //   return this.$store.state.users.foo;
    // },
    ...mapGetters({ rootGetterFoo: 'foo' }),
    ...mapGetters('robots', {robotsGetterFoo: 'foo'}),
    // rootGetterFoo() {
    //   return this.$store.getters.foo;
    // },
    // robotsGetterFoo() {
    //   return this.$store.getters['robots/foo'];
    // },
    // usersGetterFoo() {
    //   return this.$store.getters['users/foo'];
    // },
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
  width: 1084px;
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
