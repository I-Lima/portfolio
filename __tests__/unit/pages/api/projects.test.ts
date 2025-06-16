import handler from "@/pages/api/projects";
import { getGithubRepositories } from "@/axiosConfig";
import responseBuilder from "@/utils/responseBuilder";
import { createMocks } from "node-mocks-http";

jest.mock("@/axiosConfig");
jest.mock("@/utils/responseBuilder");

describe("API /api/github handler - unit tests", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should call responseBuilder with data on successful GET", async () => {
    const mockResponse = { data: [{ id: 1, name: "repo1" }] };
    (getGithubRepositories as jest.Mock).mockResolvedValue(mockResponse);

    const { req, res } = createMocks({ method: "GET" });

    await handler(req, res);

    expect(getGithubRepositories).toHaveBeenCalledTimes(1);
    expect(responseBuilder).toHaveBeenCalledWith(
      { status: 200, success: true, data: mockResponse.data },
      res,
    );
  });

  it("should call responseBuilder with error on failed GET", async () => {
    const mockError = "Network error";
    (getGithubRepositories as jest.Mock).mockRejectedValue(mockError);

    const { req, res } = createMocks({ method: "GET" });

    await handler(req, res);

    expect(getGithubRepositories).toHaveBeenCalledTimes(1);
    expect(responseBuilder).toHaveBeenCalledWith(
      {
        status: 500,
        success: false,
        error: "Error fetching repositories",
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
