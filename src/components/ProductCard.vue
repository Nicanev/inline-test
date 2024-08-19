<template>
  <div class="product-card">
    <img class="product-card__image" :src="item.image" :alt="item.name" />
    <div class="product-card__info">
      <h3 class="product-card__title">{{ item.name }}</h3>
      <div class="product-card__producer">от {{ item.producer }}</div>
      <div class="product-card__bottom">
        <div class="product-card__price">
          {{ item.price }} <span class="product-card__value">/ {{ item.value }}</span>
        </div>
        <button class="product-card__btn"><IconCart /></button>
      </div>
      <div class="product-card__rating">
        <IconStar v-for="index in 5" :key="index" class="product-card__star" />
      </div>
    </div>
  </div>
</template>

<script setup>
import IconCart from './icons/IconCart.vue'
import IconStar from './icons/IconStar.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.product-card {
  border: 0.1rem solid rgb(222, 222, 222);
  border-radius: 1rem;
  &__info {
    margin: 1rem 0 1.7rem 1.3rem;
  }
  &__image {
    width: 100%;
    height: auto;
  }
  &__title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
  }
  &__producer {
    font-size: 1.2rem;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.9rem;
  }
  &__price {
    font-size: 2rem;
    font-weight: bold;
  }
  &__value {
    font-size: 1.2rem;
    font-weight: normal;
    color: #a69895;
  }
  &__rating {
    display: flex;
    gap: 0.3rem;
    margin-top: 1rem;
  }
  &__star {
    width: 1.5rem;
    height: 1.4rem;
  }
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 2.1rem;
    background: rgb(66, 159, 58);
    border-radius: 5rem 0 0 5rem;
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>
