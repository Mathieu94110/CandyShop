import { shallow } from "@vue/test-utils";
import SearchModal from "../../src/components/SearchModal/SearchModal";

describe("BurgerMenu", () => {
  const wrapper = shallow(SearchModal, {
    mocks: {
      $store: {
        state: {
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
        },
      },
    },
  });

  test("set search input value", async () => {
    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue("haribo");
    expect(wrapper.find('input[type="text"]').element.value).toBe("haribo");
  });
});
