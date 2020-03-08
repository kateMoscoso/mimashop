<template>
  <v-list dense three-line>
    <v-template
      v-for="favorite in favorites"
      :key="favorite.id"
    >
      <favorite
        :favorite="favorite"
      />
    </v-template>
  </v-list>
</template>
<script>
import Favorite from '~/components/Favorite'

export default {
  name: 'ListFavorites',
  components: {
    Favorite
  },
  props: {
    favorites: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
