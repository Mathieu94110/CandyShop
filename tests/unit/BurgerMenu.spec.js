import { shallowMount } from "@vue/test-utils";
import BurgerMenu from "../../src/components/BurgerMenu/BurgerMenu";
describe("BurgerMenu", () => {
  const wrapper = shallowMount(BurgerMenu, {
    propsData: {
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
    },
    stubs: ["router-link"],
  });
  test("component displaying parents props", async () => {
    expect(wrapper.classes()).toContain("burger-menu--closed");
    expect(wrapper.html()).toContain("Gâteaux de Bonbons");
    expect(wrapper.html()).toContain("Bonbons");
    expect(wrapper.html()).toContain("Bonbons Rétro");
  });

  test("switch-modal-display event emitted when search item is clicked", async () => {
    const searchLink = wrapper.find("#searchItem");
    searchLink.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("switch-modal-display");
  });
});
