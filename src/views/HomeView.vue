<template>
  <div class="home">
    <div class="top">
      <WelcommeBanner />
    </div>
  </div>
</template>

<script>
import WelcommeBanner from "../components/Home/WelcomeBanner.vue";
export default {
  components: {
    WelcommeBanner,
  },
};
</script>

<style>
.home {
  width: 100%;
}
.top {
  margin-top: 80px;
  width: 100%;
}
.top-frame {
  position: relative;
  height: auto;
  width: 100%;
}
.top-frame > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.top-title {
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
.top-title-text {
  font-size: 10px;
}
.top-title-text-first {
  color: #000;
  font-size: 14px;
}
.top-title-text-second {
  color: #000;
  font-size: 11px;
}
.top-title-text-third {
  color: #2caec4;
  font-family: "Oleo Script";
  font-size: 13px;
}
.top-title-text-fourth {
  color: #ff4089;
  font-family: "Oleo Script";
  font-size: 13px;
}

@media only screen and (min-width: 420px) {
  .top-title {
    width: 140px;
    height: 140px;
  }
  .top-title-text {
    line-height: 1.8em;
  }
  .top-title-text-first {
    font-size: 17px;
  }
  .top-title-text-second {
    font-size: 13px;
  }
  .top-title-text-third {
    font-size: 15px;
  }
  .top-title-text-fourth {
    font-size: 15px;
  }
}

@media only screen and (min-width: 680px) {
  .top-title {
    width: 200px;
    height: 200px;
  }
  .top-title-text {
    line-height: 2.4em;
  }
  .top-title-text-first {
    font-size: 22px;
  }
  .top-title-text-second {
    font-size: 17px;
  }
  .top-title-text-third {
    font-size: 19px;
  }
  .top-title-text-fourth {
    font-size: 19px;
  }
}

@media only screen and (min-width: 1000px) {
  .top-title {
    width: 240px;
    height: 240px;
  }
  .top-title-text {
    line-height: 2.8em;
  }
  .top-title-text-first {
    font-size: 26px;
  }
  .top-title-text-second {
    font-size: 21px;
  }
  .top-title-text-third {
    font-size: 23px;
  }
  .top-title-text-fourth {
    font-size: 23px;
  }
}

@media only screen and (min-width: 1200px) {
  .top-frame {
    position: relative;
    height: 600px;
    width: 90%;
    margin: auto;
  }
  .top-title {
    width: 300px;
    height: 300px;
  }
  .top-title-text {
    line-height: 3.4em;
  }
  .top-title-text-first {
    font-size: 34px;
  }
  .top-title-text-second {
    font-size: 27px;
  }
  .top-title-text-third {
    font-size: 30px;
  }
  .top-title-text-fourth {
    font-size: 30px;
  }
}
</style>
