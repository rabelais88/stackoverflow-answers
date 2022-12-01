import { jest } from "@jest/globals";
import config from "./config";
jest.mock("./config", () => ({ default: { configValue: "mocked" } }));
import { configValue, getConfigValue } from "./index";
describe("configValue mocking", () => {
  it("is value mocked", () => {
    expect(config.configValue).toEqual("mocked");
    expect(getConfigValue()).toEqual("mocked");
  });
});
