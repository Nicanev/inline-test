<script setup>
import ProductRecommendations from '@/components/ProductRecommendations.vue'
</script>

<template>
  <section class="product-description">
    <div class="product-description__container">
      <div class="product-description__text">
        Томаты на ветке красные (помидоры) - более плотные, яркие и ароматные по сравнению с
        обычными. Они славятся низкой калорийностью и высоким содержанием витаминов, клетчатки,
        пектина и минеральных веществ. В них содержатся также каротиноиды, кислоты и мощный
        антиоксидант ликопин.
        <br />
        <br />
        Помидор - незаменимый продукт в мировой кулинарии. Он - основа многочисленных соусов,
        маринадов, кетчупа, испанского холодного супа Гаспачо или итальянской закуски Капрезе. С ним
        делают салаты, его тушат, солят и консервируют. Помидоры на веточке особенно красиво
        смотрятся в запеченном виде.
      </div>
    </div>
  </section>
  <section class="product-details">
    <div class="product-details__container">
      <div class="product-details__column">
        <div class="product-details__block characteristics">
          <h2 class="characteristics__title">Характеристики</h2>
          <div class="characteristics__item">
            <div class="characteristics__name">Страна</div>
            <div class="characteristics__value">Россия</div>
          </div>
          <div class="characteristics__item">
            <div class="characteristics__name">Поставщик</div>
            <div class="characteristics__value">Фермеры: Наталья и Юрий Лейшан</div>
          </div>
          <div class="characteristics__item">
            <div class="characteristics__name">Тип упаковки</div>
            <div class="characteristics__value">Крафтовый пакет</div>
          </div>
          <div class="characteristics__item">
            <div class="characteristics__name">Сертификаты качества</div>
            <div class="characteristics__value">В наличии</div>
          </div>
        </div>

        <div class="product-details__block storage-conditions">
          <h2 class="storage-conditions__title">Условия хранения</h2>
          <div class="storage-conditions__item">
            <div class="storage-conditions__name">Срок хранения</div>
            <div class="storage-conditions__value">7 дней</div>
          </div>
          <div class="storage-conditions__item">
            <div class="storage-conditions__name">Температура хранения</div>
            <div class="storage-conditions__value">от 3° до 7°</div>
          </div>
        </div>
      </div>

      <div class="product-details__column">
        <div class="product-details__block nutrition">
          <h2 class="nutrition__title">Пищевая ценность на 100г</h2>
          <div class="nutrition__item">
            <div class="nutrition__name">Энергетическая ценность</div>
            <div class="nutrition__value">18 кКал</div>
          </div>
          <div class="nutrition__item">
            <div class="nutrition__name">Белки</div>
            <div class="nutrition__value">0.9 г</div>
          </div>
          <div class="nutrition__item">
            <div class="nutrition__name">Жиры</div>
            <div class="nutrition__value">0.2 г</div>
          </div>
          <div class="nutrition__item">
            <div class="nutrition__name">Углеводы</div>
            <div class="nutrition__value">3.9 г</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ProductRecommendations />
</template>

<style lang="scss">
.product-description {
  margin-top: 5.1rem;
  margin-bottom: 2.5rem;
  &__text {
    font-size: 1.4rem;
    line-height: 2rem;
  }
}
.product-details {
  &__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3rem;
  }
  &__column {
    flex: 1;
    @media (max-width: 48em) {
      flex: 1 1 100%;
    }
  }
  &__block {
    margin-bottom: 2rem;
  }
}

.characteristics,
.storage-conditions,
.nutrition {
  &__title {
    margin-bottom: 1.3rem;
    text-transform: uppercase;
    font-weight: 500;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    border-bottom: 0.05rem solid rgba(178, 178, 178, 0.5);

    &__value {
      text-align: right;
    }
  }
}
</style>
