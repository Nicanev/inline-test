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
      <button class="product-card__btn--mobile">
        В корзину
        <span
          ><IconPlus class="product-card__icon-plus" /><IconCart class="product-card__icon-cart"
        /></span>
      </button>
      <div class="product-card__rating">
        <IconStar v-for="index in 5" :key="index" class="product-card__star" />
      </div>
    </div>
  </div>
</template>

<script setup>
import IconCart from './icons/IconCart.vue'
import IconPlus from './icons/IconPlus.vue'
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
  &__btn--mobile {
    display: none;
  }
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 2.1rem;
    background: rgb(66, 159, 58);
    border-radius: 5rem 0 0 5rem;
    color: white;
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
  @media (max-width: 48em) {
    border: none;
    border-radius: 0.8rem;
    box-shadow: 0rem 0.2rem 1rem 0.2rem rgba(0, 0, 0, 0.1);
    display: flex;
    // align-items: center;
    width: 30rem;
    padding-top: 2.8rem;
    padding-right: 2.1rem;
    &__title {
      font-size: 1.5rem;
    }
    &__info {
      margin: 0;
      margin-left: 0.4rem;
      width: 100%;
    }
    &__image {
      width: 10rem;
      height: 9.4rem;
      border-radius: 0.8rem;
      margin-left: 0.2rem;
    }
    &__rating {
      display: none;
    }
    &__btn {
      display: none;
    }
    &__icon-plus {
      width: 1.5rem;
      height: 1.5rem;
      color: rgb(66, 159, 58);
    }
    &__icon-cart {
      width: 1.6rem;
      height: 1.6rem;
      color: rgb(66, 159, 58);
    }
    &__btn--mobile {
      float: right;
      margin-top: 1.4rem;
      padding: 1.4rem 1.6rem;
      font-size: 1.4rem;
      font-weight: 600;
      color: rgb(66, 159, 58);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.9rem;
      border: 0.07rem solid rgb(222, 222, 222);
      border-radius: 0.5rem;
      margin-bottom: 2.1rem;
      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
    &__price {
      width: 100%;
      text-align: right;
    }
  }
}
</style>
