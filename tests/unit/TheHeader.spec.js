import { shallowMount } from "@vue/test-utils";
import TheHeader from "../../src/components/TheHeader/TheHeader";
describe("TheHeader", () => {
  const wrapper = shallowMount(TheHeader, {
    props: {
      showMobileMenu: false,
      menuList: [],
      products: [],
      showMobileMenu: false,
    },
  });

  test("display menu event emitted when burger icon is clicked", async () => {
    const burgerIcon = wrapper.find("#burgerIcon");
    burgerIcon.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("show-menu");
  });
  test("current path url replaced", async () => {
    const mockRouter = {
      replace: jest.fn(),
    };
    const mockRoute = {
      path: "/shop",
    };
    const wrapper = shallowMount(TheHeader, {
      mocks: {
        $route: mockRoute,
        $router: mockRouter,
      },
      props: {
        showMobileMenu: false,
        menuList: [],
        products: [],
        showMobileMenu: false,
      },
    });
    await wrapper.find("#candyLogo").trigger("click");
    expect(mockRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockRouter.replace).toHaveBeenCalledWith({ path: "/" });
  });

  test("current path url should not change", async () => {
    const mockRouter = {
      replace: jest.fn(),
    };
    const mockRoute = {
      path: "/home",
    };
    const wrapper = shallowMount(TheHeader, {
      mocks: {
        $route: mockRoute,
        $router: mockRouter,
      },
      props: {
        showMobileMenu: false,
        menuList: [],
        products: [],
        showMobileMenu: false,
      },
    });
    await wrapper.find("#candyLogo").trigger("click");
    expect(mockRouter.replace).toHaveBeenCalledTimes(0);
  });
});
