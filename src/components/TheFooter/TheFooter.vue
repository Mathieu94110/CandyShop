<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-top-container">
        <div class="footer-top-menu">
          <div class="footer-top-left">
            <div
              v-for="(items, index) in leftItems"
              :key="index"
              class="footer-top-left-item"
            >
              <div v-for="(value, key, index) in items" :key="index">
                <h4>{{ key }}</h4>
                <ul>
                  <li v-for="(item, index) in value" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-top-right">
            <h4>rejoigner la communauté</h4>
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="social-networks-icon"
            />
            <font-awesome-icon
              icon="fa-brands fa-facebook"
              class="social-networks-icon"
            />
            <font-awesome-icon
              icon="fa-brands fa-pinterest"
              class="social-networks-icon"
            />
            <font-awesome-icon
              icon="fa-brands fa-youtube"
              class="social-networks-icon"
            />
            <div class="customer-service-phone">
              <span>service client</span>
              <p>0101010101</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom-container">
      <div class="footer-bottom">
        <img src="../../assets/candy-shop.png" class="candy-img" />
        <div>Copyright 2023 © Mathieu Enault</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftItems: [
        {
          commandes: [
            "Suivi de commande",
            "Délais de livraison",
            "Echange et remboursement",
            "Moyen de paiement",
          ],
        },
        {
          "votre boutique": [
            "A propos",
            "Conditions générales de vente",
            "Charte de confidentialité",
            "Notre showroom",
          ],
        },
        {
          "nous contacter": [
            "Nous contacter",
            "Faqs",
            "Livraison & expédition",
            "Modalités de retour",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 20px;
  background-color: #161616;
  color: #fff;
}
.footer-top-container,
.footer-bottom-container {
  display: flex;
  place-content: center;
  justify-content: center;
}
.footer-top-container {
  display: flex;
  width: 1300px;
}
.footer-top {
  display: flex;
  justify-content: center;
}
.footer-top-menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.footer-top-left {
  width: auto;
}
.footer-top-left-item {
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 240px;
  margin: 25px 0;
  padding-left: 50px;
}
.footer-top-left li {
  margin-bottom: 15px;
  font-size: 11px;
}
.footer-top-left li:hover {
  cursor: pointer;
}
.footer-top-left li:last-child {
  margin-bottom: 0;
}
.footer-top-right {
  margin-top: 45px;
  text-align: center;
}
.social-networks-icon {
  width: 32px;
  width: 32px;
  margin-right: 5px;
  color: var(--color-primary);
}
.social-networks-icon + .social-networks-icon {
  margin: 0 5px;
}
.social-networks-icon:hover {
  cursor: pointer;
}
.customer-service-phone {
  margin: 15px 0 10px 0;
}
.customer-service-phone > span {
  text-transform: uppercase;
}
.customer-service-phone > p {
  margin-top: 12px;
}
.footer-bottom {
  padding: 10px;
  text-align: center;
  font-size: 12px;
}
.candy-img {
  width: 100px;
}
h4,
.customer-service-phone {
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 25px;
}

@media only screen and (min-width: 630px) {
  .footer {
    padding: 60px 0 25px 0;
  }
  .footer-top-left {
    width: 100%;
  }
  .footer-top-menu {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .footer-top-left-item {
    margin-top: 15px;
    padding-left: 20px;
    float: left;
    width: 33.333%;
  }
  .footer-top-right {
    padding-left: 25px;
    text-align: left;
  }
  .footer-top-left li {
    font-size: 13px;
  }
  .footer-bottom {
    width: 1300px;
  }
  h4,
  .customer-service-phone {
    font-size: 16px;
  }
  .social-networks-icon {
    width: 43px;
    height: 43px;
  }
}
@media only screen and (min-width: 1227px) {
  .footer-top-left {
    float: left;
    width: 75%;
  }
  .footer-top-right {
    margin-top: 15px;
    padding: 0 15px;
    text-align: center;
  }
}
</style>
