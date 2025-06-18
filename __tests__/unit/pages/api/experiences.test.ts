import handler from "@/pages/api/experiences";
import experiencesDAO from "@/daos/experiencesDAO";
import responseBuilder from "@/utils/responseBuilder";
import {
  testSuccessfulGET,
  testFailedGET,
  testUnsupportedMethod,
} from "../../../utils/testApiHandlerHelper";

jest.mock("@/daos/experiencesDAO");
jest.mock("@/utils/responseBuilder");

describe("/pages/api/experiences handler - unit tests", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should call responseBuilder with success when GET succeeds", async () => {
    const mockData = [{ id: 1, role: "Developer" }];
    await testSuccessfulGET({
      handler,
      daoMock: experiencesDAO.getAllExperiencesData as jest.Mock,
      mockData,
      expectedResponse: {
        matcher: responseBuilder as jest.Mock,
        body: { status: 200, success: true, data: mockData },
      },
    });
  });

  it("should call responseBuilder with error when GET fails", async () => {
    const mockError = "DB failure";
    await testFailedGET({
      handler,
      daoMock: experiencesDAO.getAllExperiencesData as jest.Mock,
      mockError,
      expectedResponse: {
        matcher: responseBuilder as jest.Mock,
        body: {
          status: 500,
          success: false,
          error: "Error fetching experience data",
          message: mockError,
        },
      },
    });
  });

  it("should return 400 for unsupported methods", async () => {
    await testUnsupportedMethod({
      handler,
      method: "POST",
      expectedResponse: {
        matcher: responseBuilder as jest.Mock,
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
