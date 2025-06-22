import handler from "@/pages/api/about";
import aboutDAO from "@/daos/aboutDAO";
import responseBuilder from "@/utils/responseBuilder";
import {
  testSuccessfulGET,
  testFailedGET,
  testUnsupportedMethod,
} from "../../../utils/testApiHandlerHelper";

jest.mock("@/daos/aboutDAO");
jest.mock("@/utils/responseBuilder");

describe("/pages/api/about handler", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return success", async () => {
    await testSuccessfulGET({
      handler,
      daoMock: aboutDAO.getAllAboutData as jest.Mock,
      mockData: [{ id: 1, description: "test" }],
      expectedResponse: {
        matcher: responseBuilder,
        body: {
          status: 200,
          success: true,
          data: { id: 1, description: "test" },
        },
      },
    });
  });

  it("should return error", async () => {
    await testFailedGET({
      handler,
      daoMock: aboutDAO.getAllAboutData as jest.Mock,
      mockError: "some error",
      expectedResponse: {
        matcher: responseBuilder,
        body: {
          status: 500,
          success: false,
          error: "Error fetching about data",
          message: "some error",
        },
      },
    });
  });

  it("should handle invalid method", async () => {
    await testUnsupportedMethod({
      handler,
      method: "POST",
      expectedResponse: {
        matcher: responseBuilder,
        body: {
          status: 400,
          success: false,
          error: "Invalid request.",
          message: "The POST method is not accepted.",
        },
      },
    });
  });
});
