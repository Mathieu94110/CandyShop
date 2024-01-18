import { shallowMount } from "@vue/test-utils";
import BurgerMenu from "../../src/components/BurgerMenu/BurgerMenu";
// import { screen } from "@testing-library/vue";

describe("BurgerMenu", () => {
  test("component displaying parents props", async () => {
    const msg = "submit";
    const wrapper = shallowMount(BurgerMenu, {
      propsData: {
        showMobileMenu: false,
        menuList: [
          {
            text: "Gâteaux de Bonbons",
            name: "candy cake",
            path: "/categories-list",
          },
          { text: "Bonbons", name: "candy", path: "/categories-list" },
          {
            text: "Bonbons Rétro",
            name: "retro candy",
            path: "/categories-list",
          },
        ],
      },
    });
    expect(wrapper.classes()).toContain("burger-menu--closed");
    // expect(screen.getByTestId(wrapper, "nav-list-item")).toHaveTextContent(
    //   "Bonbons Rétro"
    // );
  });
});
