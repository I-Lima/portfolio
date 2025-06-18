import handler from "@/pages/api/projects";
import { getGithubRepositories } from "@/axiosConfig";
import responseBuilder from "@/utils/responseBuilder";
import {
  testSuccessfulGET,
  testFailedGET,
  testUnsupportedMethod,
} from "../../../utils/testApiHandlerHelper";

jest.mock("@/axiosConfig");
jest.mock("@/utils/responseBuilder");

describe("/pages/api/projects handler - unit tests", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should call responseBuilder with data on successful GET", async () => {
    const mockData = [{ id: 1, name: "repo1" }];
    await testSuccessfulGET({
      handler,
      daoMock: getGithubRepositories as jest.Mock<
        Promise<{ data: typeof mockData }>
      >,
      mockData: { data: mockData },
      expectedResponse: {
        matcher: responseBuilder as jest.Mock,
        body: { status: 200, success: true, data: mockData },
      },
    });
  });

  it("should call responseBuilder with error on failed GET", async () => {
    const mockError = "Network error";
    await testFailedGET({
      handler,
      daoMock: getGithubRepositories as jest.Mock,
      mockError,
      expectedResponse: {
        matcher: responseBuilder as jest.Mock,
        body: {
          status: 500,
          success: false,
          error: "Error fetching repositories",
          message: mockError,
        },
      },
    });
  });

  it("should return 400 for unsupported methods", async () => {
    await testUnsupportedMethod({
      handler,
      method: "PUT",
      expectedResponse: {
        matcher: responseBuilder as jest.Mock,
        body: {
          status: 400,
          success: false,
          error: "Invalid request.",
          message: "The PUT method is not accepted.",
        },
      },
    });
  });
});
