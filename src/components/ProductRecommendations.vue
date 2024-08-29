<script setup>
import { register } from 'swiper/element/bundle'
import ProductCard from './ProductCard.vue'

register()
</script>

<template>
  <section class="product-recommendations">
    <div class="product-recommendations__container">
      <h2 class="product-recommendations__title">С этим товаром покупают</h2>
      <swiper-container slides-per-view="auto" space-between="10" :breakpoints="breakpoints">
        <swiper-slide v-for="(item, index) in items" :key="index">
          <ProductCard :item="item" />
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Молоко 3,2 %',
          price: '95 ₽',
          value: '0,93 л',
          producer: 'Вадима Рошки',
          image:
            'https://github.com/Nicanev/inline-test/blob/main/src/assets/images/products/product1.png?raw=true'
        },
        {
          name: 'Хлеб пшеничный',
          price: '95 ₽',
          value: '930 г',
          producer: 'Дарьи и Марии',
          image:
            'https://github.com/Nicanev/inline-test/blob/main/src/assets/images/products/product2.png?raw=true'
        },
        {
          name: 'Яйца куриные',
          price: '120 ₽',
          value: '10 шт',
          producer: 'Евгения Рошаль',
          image:
            'https://github.com/Nicanev/inline-test/blob/main/src/assets/images/products/product3.png?raw=true'
        },
        {
          name: 'Масло сливочное 82 %',
          price: '290 ₽',
          value: '250 г',
          producer: 'Евгения Рошаль',
          image:
            'https://github.com/Nicanev/inline-test/blob/main/src/assets/images/products/product4.png?raw=true'
        }
      ],
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.product-recommendations {
  margin-bottom: 1.8rem;
  &__title {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 3rem;
    margin-top: 5.4rem;
  }
}
</style>
