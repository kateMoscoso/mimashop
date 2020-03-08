<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <list-cart v-if="$store.state.amount > 0" />
    <div v-else>
      Empty
    </div>
  </v-layout>
</template>

<script>
import ListCart from '~/components/ListCart'

export default {
  components: {
    ListCart
  }
}
</script>
