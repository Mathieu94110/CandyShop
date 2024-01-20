import { shallowMount } from "@vue/test-utils";
import TheHeader from "../../src/components/TheHeader/TheHeader";

describe("BurgerMenu", () => {
  const wrapper = shallowMount(TheHeader, {
    props: {
      showMobileMenu: false,
      menuList: [
        {
          text: "Gâteaux de Bonbons",
          name: "candy cake",
          path: "/categories-list/candy cake",
        },
        { text: "Bonbons", name: "candy", path: "/categories-lis/candy" },
        {
          text: "Bonbons Rétro",
          name: "retro candy",
          path: "/categories-list/retro candy",
        },
      ],
      products: [
        {
          id: 1,
          img: "https://cdn.store-factory.com/www.confiserie-foraine.com/content/product_4936768b.jpg?v=1531989933",
          title: "LUTTI bouteille Bubblizz ",
          category: "candy",
          description: "Bonbons Lutti en vrac / sachet de 2 kg",
          price: 13.0,
          bag: [
            { quantity: "150g", price: 3 },
            { quantity: "500g", price: 10 },
          ],
          batch: null,
        },
        {
          id: 2,
          img: "https://cdn.store-factory.com/www.confiserie-foraine.com/content/product_5434123b.jpg?v=1524126219",
          title: "HARIBO Dragibus",
          category: "candy",
          description: "HARIBO Dragibus SOFT en sac de 2 kg",
          price: 19.0,
          bag: [
            { quantity: "150g", price: 3 },
            { quantity: "500g", price: 10 },
          ],
          batch: null,
        },
      ],
      showMobileMenu: false,
    },
    stubs: ["router-link", "router-view"],
  });

  test("display menu event emitted when burger icon is clicked", async () => {
    const burgerIcon = wrapper.find("#burgerIcon");
    burgerIcon.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("show-menu");
  });
});
