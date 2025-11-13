import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("axios"); // mock axios ก่อน import component
import axios from "axios";

import IT021 from "@/Views/IT021.vue";

// Mock router
const pushMock = vi.fn();
vi.mock("vue-router", () => ({
    useRouter: () => ({ push: pushMock })
}));

describe("IT021.vue", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        window.alert = vi.fn();
    });

    it("renders inputs and button", () => {
        const wrapper = mount(IT021);
        expect(wrapper.findAll("input").length).toBe(2);
        expect(wrapper.find("button").exists()).toBe(true);
    });

    it("updates model when typing", async () => {
        const wrapper = mount(IT021);
        const [usernameInput, passwordInput] = wrapper.findAll("input");

        await usernameInput.setValue("testuser");
        await passwordInput.setValue("12345");

        expect(wrapper.vm.username).toBe("testuser");
        expect(wrapper.vm.password).toBe("12345");
    });

    it("calls axios.post and stores token", async () => {
        axios.post.mockResolvedValue({ data: { token: "fake-token" } });
        const wrapper = mount(IT021);

        wrapper.vm.username = "testuser";
        wrapper.vm.password = "12345";

        await wrapper.vm.login();

        expect(axios.post).toHaveBeenCalled();
        expect(localStorage.getItem("jwtToken")).toBe("fake-token");
        expect(pushMock).toHaveBeenCalledWith("/IT023");
    });
});
