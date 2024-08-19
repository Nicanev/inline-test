<template>
  <header class="header">
    <div class="header__container">
      <nav class="header__nav">
        <RouterLink class="header__link header__link--active" to="">Описание</RouterLink>
        <RouterLink class="header__link" to="">Отзывы</RouterLink>
        <RouterLink class="header__link" to="">Откуда?</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__container {
    margin-top: 1.6rem;
    border-bottom: 0.05rem solid rgb(178, 178, 178);
  }
  &__nav {
    display: flex;
    justify-content: center;
    gap: 9.8rem;
    padding-bottom: 1.9rem;
  }
  &__link {
    font-size: 1.6rem;
    font-weight: bold;
    color: rgb(68, 68, 68);
    position: relative;
    text-transform: uppercase;
    &--active::before {
      content: '';
      position: absolute;
      bottom: -1.8rem;
      border-radius: 0.5rem;
      background-color: rgb(66, 159, 58);
      width: 100%;
      height: 0.5rem;
    }
  }
}
</style>
