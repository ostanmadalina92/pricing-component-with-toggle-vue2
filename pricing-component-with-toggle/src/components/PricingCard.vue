<template>
  <div class="pricing-card">
    <p>{{ data.plan }}</p>
    <h1>{{ data.price }}</h1>
    <ul class="features">
      <li v-for="(feature, index) in data.features" :key="index">
        {{ feature }}
      </li>
    </ul>
    <button class="pricing-button" @click="handleClick">LEARN MORE</button>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    name: String,
  },
  methods: {
    handleClick() {
      this.$emit("select", {
        plan: this.data.plan,
        price: this.data.price,
        name: this.name,
      });
    },
  },
};
</script>

<style>
.pricing-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 22rem;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  color: var(--grayish-blue);
  font-weight: bold;
}
.pricing-button {
  cursor: pointer;
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 5px;
  border-color: transparent;
  border-style: solid;
  border-width: 1px;
  padding: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  word-spacing: 3px;
  font-weight: 700;
  text-align: center;
}
.features {
  list-style: none;
  padding: 0;
  border-top: 1px solid #ccc;
  width: 90%;
}
.features li {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 800px) {
  .pricing-container {
    width: 60%;
  }
}
</style>
