// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import * as nextRouter from "next/router";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const mockResponse = jest.fn();

nextRouter.useRouter = mockResponse;
nextRouter.useRouter.mockImplementation(() => ({
  route: "/",
  isReady: true,
  replace: jest.fn(),
  prefetch: jest.fn(),
  push: jest.fn(),
}));

const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });
