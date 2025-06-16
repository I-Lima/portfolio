import handler from "@/pages/api/about";
import aboutDAO from "@/daos/aboutDAO";
import responseBuilder from "@/utils/responseBuilder";
import { createMocks } from "node-mocks-http";

jest.mock("@/daos/aboutDAO");
jest.mock("@/utils/responseBuilder");

describe("API /api/about handler - unit tests", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should call responseBuilder with success when GET succeeds", async () => {
    const mockData = [{ id: 1, description: "test" }];
    (aboutDAO.getAllAboutData as jest.Mock).mockResolvedValue(mockData);

    const { req, res } = createMocks({ method: "GET" });

    await handler(req, res);

    expect(aboutDAO.getAllAboutData).toHaveBeenCalledTimes(1);
    expect(responseBuilder).toHaveBeenCalledWith(
      { status: 200, success: true, data: mockData[0] },
      res,
    );
  });

  it("should call responseBuilder with error when GET fails", async () => {
    const mockError = "some error";
    (aboutDAO.getAllAboutData as jest.Mock).mockRejectedValue(mockError);

    const { req, res } = createMocks({ method: "GET" });

    await handler(req, res);

    expect(aboutDAO.getAllAboutData).toHaveBeenCalledTimes(1);
    expect(responseBuilder).toHaveBeenCalledWith(
      {
        status: 500,
        success: false,
        error: "Error fetching about data",
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
