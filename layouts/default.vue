<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-btn
        icon
        to="/"
        nuxt
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="reloadCart"
      >
        {{ $store.state.amount }}
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="reload"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="favoritesDrawer"
      :right="right"
      temporary
      fixed
      width="25%"
    >
      <v-subheader>
        Favorites
      </v-subheader>
      <v-divider></v-divider>
      <list-favorites
        :favorites.sync="favorites"
      />
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="cartDrawer"
      width="25%"
      :right="right"
      temporary
      app
    >
      <list-cart />
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import ListFavorites from '~/components/ListFavorites'
import ListCart from '~/components/ListCart'

export default {
  components: {
    ListFavorites,
    ListCart
  },
  data () {
    return {
      clipped: false,
      fixed: false,
      right: true,
      favoritesDrawer: false,
      cartDrawer: false,
      title: 'Mimashop',
      favorites: []
    }
  },
  mounted () {
    this.findFavorites()
  },
  methods: {
    reload() {
      console.log('reload')
      this.findFavorites()
      this.favoritesDrawer = !this.favoritesDrawer
    },
    reloadCart() {
      this.cartDrawer = !this.cartDrawer
      this.clipped = !this.clipped
    },
    async findFavorites() {
      await this.$axios
        .get('/grocery?favorite=1')
        .then(response => (this.favorites = response.data))
    }
  }
}
</script>
