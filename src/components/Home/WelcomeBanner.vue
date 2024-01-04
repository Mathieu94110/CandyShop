<template>
  <div class="welcome-frame">
    <h2 class="welcome-title">
      <span class="welcome-title-text"
        ><span class="welcome-title-text-first">Bienvenue</span><br /><span
          class="welcome-title-text-second"
        >
          dans l'univers</span
        ><br />
        <span class="welcome-title-text-third">doux et sucré </span><br />
        <span class="welcome-title-text-fourth">de Candy Shop</span></span
      >
    </h2>
    <img src="../../assets/colorful-candies-sweets.jpg" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.welcome-frame {
  position: relative;
  height: auto;
  width: 100%;
}
.welcome-frame > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.welcome-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 11px;
  font-weight: 600;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  width: 100px;
  height: 100px;
  line-height: 1.4em;
  text-align-last: justify;
}
.welcome-title-text {
  font-size: 10px;
}
.welcome-title-text-first {
  color: #000;
  font-size: 14px;
}
.welcome-title-text-second {
  color: #000;
  font-size: 11px;
}
.welcome-title-text-third {
  color: var(--color-secondary);
  font-family: "Oleo Script";
  font-size: 13px;
}
.welcome-title-text-fourth {
  color: var(--color-primary);
  font-family: "Oleo Script";
  font-size: 13px;
}

@media only screen and (min-width: 420px) {
  .welcome-title {
    width: 140px;
    height: 140px;
  }
  .welcome-title-text {
    line-height: 1.8em;
  }
  .welcome-title-text-first {
    font-size: 17px;
  }
  .welcome-title-text-second {
    font-size: 13px;
  }
  .welcome-title-text-third {
    font-size: 15px;
  }
  .welcome-title-text-fourth {
    font-size: 15px;
  }
}

@media only screen and (min-width: 680px) {
  .welcome-title {
    width: 200px;
    height: 200px;
  }
  .welcome-title-text {
    line-height: 2.4em;
  }
  .welcome-title-text-first {
    font-size: 22px;
  }
  .welcome-title-text-second {
    font-size: 17px;
  }
  .welcome-title-text-third {
    font-size: 19px;
  }
  .welcome-title-text-fourth {
    font-size: 19px;
  }
}

@media only screen and (min-width: 1000px) {
  .welcome-title {
    width: 240px;
    height: 240px;
  }
  .welcome-title-text {
    line-height: 2.8em;
  }
  .welcome-title-text-first {
    font-size: 26px;
  }
  .welcome-title-text-second {
    font-size: 21px;
  }
  .welcome-title-text-third {
    font-size: 23px;
  }
  .welcome-title-text-fourth {
    font-size: 23px;
  }
}

@media only screen and (min-width: 1200px) {
  .welcome-frame {
    position: relative;
    height: 600px;
    width: 90%;
    margin: auto;
  }
  .welcome-title {
    width: 300px;
    height: 300px;
  }
  .welcome-title-text {
    line-height: 3.4em;
  }
  .welcome-title-text-first {
    font-size: 34px;
  }
  .welcome-title-text-second {
    font-size: 27px;
  }
  .welcome-title-text-third {
    font-size: 30px;
  }
  .welcome-title-text-fourth {
    font-size: 30px;
  }
}
</style>
