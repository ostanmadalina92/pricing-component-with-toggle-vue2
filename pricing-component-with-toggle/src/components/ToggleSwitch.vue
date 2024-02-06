<template>
  <div class="toggle-container">
    <router-link to="/annually" v-if="label === 'Annually'"></router-link>
    <router-link to="/monthly" v-else></router-link>
    <span>
      {{ label }}
    </span>
    <button class="toggle-area" @click="toggle">
      <span
        class="toggle-btn"
        :style="{ left: isActive ? '50%' : '0%' }"
      ></span>
    </button>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
      this.$emit("toggle", {});
    },
  },
};
</script>

<style>
:root {
  --gradient: hsl(236, 72%, 79%), hsl(237, 63%, 64%);
  --purple: hsl(237, 63%, 64%);
  --very-light-grayish-blue: hsl(240, 78%, 98%);
  --light-grayish-blue: hsl(234, 14%, 74%);
  --grayish-blue: hsl(233, 13%, 49%);
  --dark-grayish-blue: hsl(232, 13%, 33%);
  --white: white;
}
.toggle-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}
.toggle-area {
  border: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  width: 3.8rem;
  height: 2.3rem;
  margin: 0 10px;
  border-radius: 25px;
  background: linear-gradient(var(--gradient));
  transition: left 0.3s ease;
}

.toggle-area:hover {
  background: hsl(237, 63%, 85%);
}

.toggle-btn {
  cursor: pointer;
  position: relative;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  background-color: var(--very-light-grayish-blue);
  margin: 0;
}
</style>
