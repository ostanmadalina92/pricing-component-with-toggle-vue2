<template>
  <div class="center-content">
    <div class="cards">
      <PricingCard
        v-for="(card, index) in cards"
        @select="handlePrice"
        :data="card"
        :name="card.name"
        :key="index"
        :class="getCardClass(index)"
      />
    </div>
  </div>
</template>

<script>
import PricingCard from "../components/PricingCard.vue";

export default {
  components: {
    PricingCard,
  },
  data() {
    return {
      cards: [
        {
          plan: "Basic",
          price: "$19.99",
          name: "first",
          features: {
            storage: "500 GB Storage",
            users: "2 Users Allowed",
            sending: "Send up to 3 GB",
          },
        },
        {
          plan: "Professional",
          price: "$24.99",
          name: "second",
          features: {
            storage: "1 TB Storage",
            users: "5 Users Allowed",
            sending: "Send up to 10 GB",
          },
        },
        {
          plan: "Master",
          price: "$39.99",
          name: "third",
          features: {
            storage: " 2 TB Storage",
            users: "10 Users Allowed",
            sending: "Send up to 20 GB",
          },
        },
      ],
    };
  },
  methods: {
    handlePrice(data) {
      console.log(data);
    },
    getCardClass(index) {
      if (index === 0) {
        return "first-card";
      } else if (index === 1) {
        return "middle-card";
      } else if (index === this.cards.length - 1) {
        return "last-card";
      } else {
        return "";
      }
    },
  },
};
</script>

<style>
@import "../css/shared-styles.css";
</style>
