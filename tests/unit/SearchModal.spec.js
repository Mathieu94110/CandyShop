import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import SearchModal from "../../src/components/SearchModal/SearchModal";

describe("SearchModal", () => {
  let wrapper;
  let store;
  let textInput;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const productModule = {
      state: {
        datas: [
          {
            id: 2,
            img: "https://www.laboutiqueharibo.fr/dw/image/v2/BFFT_PRD/on/demandware.static/-/Sites-haribo-master-catalog/default/dwa5c0e208/food/sachets/CARenSAC%20500g%202022%20500px.png?sw=240&sh=240",
            title: "Haribo Carensac",
            category: "candy",
            description: "HARIBO Dragibus SOFT en sac de 2 kg",
            price: 6.9,
            bag: [
              { quantity: "150g", price: 3 },
              { quantity: "500g", price: 10 },
            ],
            batch: null,
          },
          {
            id: 2,
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
            id: 3,
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
      namespaced: true,
    };
    store = new Vuex.Store({
      modules: {
        product: productModule,
      },
    });

    wrapper = shallowMount(SearchModal, {
      store,
      localVue,
    });
    textInput = wrapper.find('input[type="text"]');
  });

  test("set search input value", async () => {
    await textInput.setValue("haribo");
    expect(wrapper.find('input[type="text"]').element.value).toBe("haribo");
  });
  test("two results appear after typed haribo on search input", async () => {
    await textInput.setValue("haribo");
    expect(wrapper.findAll("li").length).toEqual(2);
  });
  test("Aucun résultat trouvé ! text should be displayed", async () => {
    await textInput.setValue("chupa chups");
    expect(wrapper.findAll("li").length).toEqual(0);
    expect(wrapper.text()).toContain("Aucun résultat trouvé !");
  });
});
