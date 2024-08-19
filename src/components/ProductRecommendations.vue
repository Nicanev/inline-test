<template>
  <section class="product-recommendations">
    <div class="product-recommendations__container">
      <h2 class="product-recommendations__title">С этим товаром покупают</h2>
      <swiper-container slides-per-view="4" space-between="10" loop="true">
        <swiper-slide v-for="(item, index) in items" :key="index">
          <div class="product-recommendation">
            <img :src="item.image" :alt="item.name" />
            <h3 class="product-recommendation__title">{{ item.name }}</h3>
            <p class="product-recommendation__price">{{ item.price }}</p>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script>
import { register } from 'swiper/element/bundle'
register()

export default {
  data() {
    return {
      items: [
        { name: 'Товар 1', price: '1000 ₽', image: 'path/to/image1.jpg' },
        { name: 'Товар 2', price: '1200 ₽', image: 'path/to/image2.jpg' },
        { name: 'Товар 3', price: '800 ₽', image: 'path/to/image3.jpg' },
        { name: 'Товар 3', price: '800 ₽', image: 'path/to/image3.jpg' },
        { name: 'Товар 3', price: '800 ₽', image: 'path/to/image3.jpg' },
        { name: 'Товар 3', price: '800 ₽', image: 'path/to/image3.jpg' },
        { name: 'Товар 3', price: '800 ₽', image: 'path/to/image3.jpg' },
        { name: 'Товар 3', price: '800 ₽', image: 'path/to/image3.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.product-recommendations {
  &__title {
    font-size: 2.2rem;
    font-weight: 500;
  }
}

.product-recommendations__container {
  /* Стили для контейнера слайдера */
}

.product-recommendation {
  /* Стили для элементов слайдера */
}

.product-recommendation__title {
  /* Стили для заголовка товара */
}

.product-recommendation__price {
  /* Стили для цены товара */
}
</style>
