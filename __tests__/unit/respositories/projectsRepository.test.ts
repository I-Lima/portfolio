import { getProjectsData } from "@/Repositories/projectsRepository";
import { dataProps } from "@/types/api";

describe("getProjectsData", () => {
  const mockResponse: dataProps = {
    status: 200,
    success: true,
    data: [
      { id: 1, name: "Project One", topics: ["pinned"] },
      { id: 2, name: "Project Two", topics: [] },
    ],
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should resolve with project data when fetch is successful", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await getProjectsData();

    expect(fetch).toHaveBeenCalledWith("/api/projects", { method: "GET" });
    expect(result).toEqual(mockResponse);
  });

  it("should reject if fetch fails", async () => {
    const error = new Error("Fetch failed");

    (global.fetch as jest.Mock).mockRejectedValue(error);

    await expect(getProjectsData()).rejects.toThrow("Fetch failed");
  });
});
