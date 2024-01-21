import { shallowMount } from "@vue/test-utils";
import ProductDetails from "../../src/components/ProductDetails/ProductDetails";
describe("ProductDetails", () => {
  const wrapper = shallowMount(ProductDetails, {
    propsData: {
      info: {
        id: 3,
        img: "https://cdn.store-factory.com/www.confiserie-foraine.com/content/product_11421816b.jpg?v=1697119568",
        title: "Fini TWIST marshmallow",
        category: "candy",
        description: "Fini TWIST marshmallow torsadé en sachet de 125 unités",
        price: 8.0,
        bag: [
          { quantity: "150g", price: 2 },
          { quantity: "500g", price: 6 },
        ],
        batch: null,
      },
    },
  });

  test("component displaying parents props", async () => {
    const qtySpan = wrapper.find(".product-details__info-qty-value");
    expect(wrapper.find("h1").text()).toMatch("Fini TWIST marshmallow");
    expect(wrapper.find("h2").text()).toMatch("8€");
  });
});
