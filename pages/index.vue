<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
      </div>
      <v-row dense>
        <v-col
          v-for="product in products"
          :key="product.productName"
          cols="4"
        >
          <v-card>
            <v-img
              :src="product.image_url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="product.productName"></v-card-title>
            </v-img>
            <v-card-subtitle>{{ product.productDescription }}</v-card-subtitle>
            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-icon>mdi-currency-eur</v-icon>
                <div class="grey--text ml-4">
                  {{ product.price }}
                </div>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn>
                <span>{{ product.stock }}</span>
                <v-icon>{{ product.stock > 0 ? 'mdi-cart-outline': 'mdi-cart-off' }}</v-icon>
              </v-btn>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>{{ product.favorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>{{ product.stock > 0 ? 'mdi-cart-plus' : 'mdi-cart-off' }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      products: [{
        id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
        image_url: 'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
        stock: 8,
        productName: 'Unbranded Metal Chair',
        price: 43,
        productDescription: 'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
        favorite: '1'
      },
      {
        id: '20cc33f1-223b-4cf0-878d-fdedb3f60b56',
        image_url: 'https://dummyimage.com/400x400/2ee9f7/000&text=Handcrafted Metal Towels',
        stock: 41,
        productName: 'Handcrafted Metal Towels',
        price: 98,
        productDescription: 'Rerum minima laudantium blanditiis dolorem dolores ut sint ut quidem. Est doloremque repellat excepturi dolor consequatur rerum qui. Facere ut vel et enim accusamus ipsum dolores aut. Eaque quo ut omnis unde quam error voluptas non iure.',
        favorite: 0
      }]
    }
  }
}
</script>
