<template>
  <section class="reviews">
    <div class="reviews__container">
      <p class="reviews__text">
        Помогите нам стать ещё лучше. Оставляя отзывы, вы таким образом указываете нам на зоны
        роста. Мы правда, читаем все отзывы.
      </p>
      <form @submit.prevent="submitReview" class="reviews__form">
        <textarea
          v-model="reviewText"
          class="reviews__textarea"
          placeholder="Введите ваш отзыв"
          required
        ></textarea>
        <button type="submit" class="reviews__button">Оставить отзыв</button>
      </form>
      <p v-if="successMessage" class="reviews__success-message">{{ successMessage }}</p>
      <ul class="reviews__list">
        <li v-for="(review, index) in reviews" :key="index" class="reviews__item">
          {{ review }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reviewText: '',
      successMessage: '',
      reviews: []
    }
  },
  created() {
    this.loadReviews()
  },
  methods: {
    submitReview() {
      if (this.reviewText.trim()) {
        this.reviews.push(this.reviewText.trim())
        localStorage.setItem('reviews', JSON.stringify(this.reviews))

        this.successMessage = 'Спасибо за ваш отзыв!'
        this.reviewText = ''

        setTimeout(() => {
          this.successMessage = ''
        }, 3000)
      }
    },
    loadReviews() {
      const savedReviews = localStorage.getItem('reviews')
      if (savedReviews) {
        this.reviews = JSON.parse(savedReviews)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.reviews {
  &__text {
    margin-top: 5.4rem;
    max-width: 52.3rem;
    font-size: 1.4rem;
  }
  &__button {
    margin-top: 3.3rem;
    padding: 1rem 1.8rem;
    background: rgb(66, 159, 58);
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    border-radius: 0.5rem;
  }
  &__form {
    margin-top: 2rem;
  }
  &__textarea {
    width: 100%;
    height: 10rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    resize: none;
  }
  &__success-message {
    margin-top: 1rem;
    color: rgb(66, 159, 58);
    font-size: 1.4rem;
  }
  &__list {
    margin-top: 2rem;
    padding: 0;
    list-style: none;
  }
  &__item {
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    font-size: 1.4rem;
  }
}
</style>
