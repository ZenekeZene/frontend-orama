<template>
  <article class="avatar">
    <section>
      <h2 v-if="withGreetins">{{ getGreetings }}</h2>
      <section class="image">
        <img :src="user.photoURL" :alt="`Avatar de ${user.displayName}`" />
        <div class="info">
          <span class="aka">{{ level }}</span>
          <p class="points">
            Record:
            <span class="points__value">65</span> puntos.
          </p>
        </div>
      </section>
      <base-button class="share" simple v-ripple color-secondary
        >Compartir</base-button
      >
      <slot></slot>
    </section>
  </article>
</template>
<script>
import * as moment from "moment";
import { mapState } from "vuex";

export default {
  name: "Avatar",
  props: {
    name: {
      type: String,
      default: "Aureliano Buendía"
    },
    level: {
      type: String,
      default: ""
    },
    withGreetins: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getGreetings() {
      return `${this.getGreetingTime(moment())}, ${this.user.displayName}.`;
    },
    ...mapState("user", ["user", "isLoggedIn"])
  },
  methods: {
    getGreetingTime: currentTime => {
      if (!currentTime || !currentTime.isValid()) {
        return "Hello";
      }

      const splitAfternoon = 12; // 24hr time to split the afternoon
      const splitEvening = 21; // 24hr time to split the evening
      const currentHour = parseFloat(currentTime.format("HH"));

      if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
        // Between 12 PM and 5PM
        return "Buenas tardes";
      } else if (currentHour >= splitEvening) {
        // Between 5PM and Midnight
        return "Buenas noches";
      }
      // Between dawn and noon
      return "Buenos días";
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar {
  padding: 1rem;

  > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h2 {
    padding-bottom: 0.5rem;
    font-size: 1.2rem;
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.5rem;
}

.image {
  position: relative;
  display: flex;
  margin-bottom: 0;

  img {
    width: 100px;
    height: auto;
    display: block;
    border-radius: 0.5rem;
  }
}

.points {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  font-size: 1rem;

  &__value {
    color: var(--color-tertiary);
  }
}

.share {
  margin-top: 1rem;
  margin-bottom: 0;
}
</style>
