<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
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
      <v-toolbar-title
        v-text="title"
      />

      <v-spacer />
      <v-btn
        icon
        to="/shopping_cart"
        nuxt
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
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <list-favorites
        :favorites.sync="favorites"
      />
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

export default {
  components: {
    ListFavorites
  },
  data () {
    return {
      clipped: false,
      fixed: false,
      right: true,
      rightDrawer: false,
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
      this.rightDrawer = !this.rightDrawer
    },
    async findFavorites() {
      console.log('reload')
      await this.$axios
        .get('/grocery?favorite=1')
        .then(response => (this.favorites = response.data))
    }
  }
}
</script>
