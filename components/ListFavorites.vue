<template>
  <v-list dense three-line>
    <div
      v-for="favorite in favorites"
      :key="favorite.id"
    >
      <favorite
        :favorite="favorite"
      />
    </div>
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
