import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Counter from "./Counter.vue";

describe("Counter", () => {
  it("shows 0 when it starts", () => {
    const wrapper = mount(Counter);
    expect(wrapper.text()).toContain("0");
  });
  it("checks if counter add a number", async () => {
    const wrapper = mount(Counter);
    await wrapper.find(".add").trigger("click");
    expect(wrapper.text()).toContain("1");
  });
  it("check if counter subtrack a number", async () => {
    const wrapper = mount(Counter);
    await wrapper.find(".subtract").trigger("click");
    expect(wrapper.text()).toContain("0");
  });
  it("check what happens when u click subtract and the count is zero", async () => {
    const wrapper = mount(Counter);
    await wrapper.find(".subtract").trigger("click");
    expect(wrapper.find(".warning").exists());
  });
});
