import handler from "@/pages/api/experiences";
import experiencesDAO from "@/daos/experiencesDAO";
import responseBuilder from "@/utils/responseBuilder";
import { createMocks } from "node-mocks-http";

jest.mock("@/daos/experiencesDAO");
jest.mock("@/utils/responseBuilder");

describe("API /api/experiences handler - unit tests", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should call responseBuilder with success when GET succeeds", async () => {
    const mockData = [{ id: 1, role: "Developer" }];
    (experiencesDAO.getAllExperiencesData as jest.Mock).mockResolvedValue(
      mockData,
    );

    const { req, res } = createMocks({ method: "GET" });

    await handler(req, res);

    expect(experiencesDAO.getAllExperiencesData).toHaveBeenCalledTimes(1);
    expect(responseBuilder).toHaveBeenCalledWith(
      { status: 200, success: true, data: mockData },
      res,
    );
  });

  it("should call responseBuilder with error when GET fails", async () => {
    const mockError = "DB failure";
    (experiencesDAO.getAllExperiencesData as jest.Mock).mockRejectedValue(
      mockError,
    );

    const { req, res } = createMocks({ method: "GET" });

    await handler(req, res);

    expect(experiencesDAO.getAllExperiencesData).toHaveBeenCalledTimes(1);
    expect(responseBuilder).toHaveBeenCalledWith(
      {
        status: 500,
        success: false,
        error: "Error fetching experience data",
        message: mockError,
      },
      res,
    );
  });

  it("should return 400 for unsupported methods", async () => {
    const { req, res } = createMocks({ method: "POST" });

    await handler(req, res);

    expect(responseBuilder).toHaveBeenCalledWith(
      {
        status: 400,
        success: false,
        error: "Invalid request.",
        message: "The POST method is not accepted.",
      },
      res,
    );
  });
});
