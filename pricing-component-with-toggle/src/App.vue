<template>
  <div id="app">
    <img
      alt="Bottom Background"
      class="background bottom-left"
      src="./assets/bg-bottom.svg"
    />
    <img
      alt="Top Background"
      class="background top-right"
      src="./assets/bg-top.svg"
    />
    <div class="center-content">
      <h2>Our pricing</h2>
      <div class="toggle">
        <ToggleSwitch label="Annually" @toggle="handleToggle">
          <span>Monthly</span></ToggleSwitch
        >
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ToggleSwitch from "./components/ToggleSwitch.vue";

export default {
  components: {
    ToggleSwitch,
  },
  data() {
    return {
      currentPlan: "Annually",
    };
  },
  updated() {
    console.log("router", this.$router);
  },
  methods: {
    handleToggle() {
      this.$router.push(
        this.currentPlan === "Annually" ? "/monthly" : "/annually"
      );
      this.currentPlan =
        this.currentPlan === "Annually" ? "Monthly" : "Annually";
    },

    getCardClass(index) {
      if (index === 0) {
        return "first-card";
      } else if (index === this.monthlyCards.length - 1) {
        return "last-card";
      }
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--very-light-grayish-blue);
  height: 100vh;
}
.center-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.toggle {
  color: var(--light-grayish-blue);
}
h2 {
  color: var(--grayish-blue);
}

@media screen and (max-width: 800px) {
  #app {
    height: auto;
  }
  #app img {
    width: 50%;
  }
}
</style>
