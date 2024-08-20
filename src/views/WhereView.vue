<template>
  <section class="where">
    <div class="where__container">
      <div class="where__text">
        Томаты на ветке красные (помидоры) - более плотные, яркие и ароматные по сравнению с
        обычными. Они славятся низкой калорийностью и высоким содержанием витаминов, клетчатки,
        пектина и минеральных веществ. В них содержатся также каротиноиды, кислоты и мощный
        антиоксидант ликопин.
        <br />
        <br />
        Помидор - незаменимый продукт в мировой кулинарии. Он - основа многочисленных соусов,
        маринадов, кетчупа, испанского холодного супа Гаспачо или итальянской закуски Капрезе.
      </div>
      <div class="where__right">
        <img
          src="https://github.com/Nicanev/inline-test/blob/main/src/assets/images/where.png?raw=true"
          alt="Откуда"
          class="where__img"
        />
        <div class="where__buttons">
          <button class="where__button">Сертификаты</button
          ><button class="where__button">О поставщике</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.where {
  &__container {
    margin-top: 4.9rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 48em) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  &__text {
    max-width: 51.1rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
  &__img {
    width: 37.6rem;
    height: 26.7rem;
    margin-bottom: 2.5rem;
  }
  &__buttons {
    display: flex;
    gap: 0.8rem;
  }
  &__button {
    color: rgb(68, 68, 68);
    font-size: 1.4rem;
    text-align: center;
    font-weight: 500;
    padding: 1rem 3.9rem;
    border: 0.05rem solid rgb(68, 68, 68);
    border-radius: 0.5rem;
  }
}
</style>
