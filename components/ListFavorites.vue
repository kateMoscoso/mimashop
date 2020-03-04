<template>
  <div>
    <v-subheader>
      Favorites
    </v-subheader>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="favorite in favorites"
        :key="favorite.id"
      >
        <favorite :favorite="favorite" />
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import Favorite from '~/components/Favorite'

export default {
  name: 'ListFavorites',
  components: {
    Favorite
  },
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      favorites: []
    }
  },
  mounted () {
    this.$axios
      .get('/grocery?favorite=1')
      .then(response => (this.favorites = response.data))
  }
}
</script>
