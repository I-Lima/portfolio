import { getExperienceData } from "@/Repositories/experienceRepository";
import { dataProps } from "@/types/api";

describe("getExperienceData", () => {
  const mockResponse: dataProps = {
    status: 200,
    success: true,
    data: [
      { id: 1, name: "Experience 1" },
      { id: 2, name: "Experience 2" },
    ],
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should resolve with the expected data", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await getExperienceData();

    expect(fetch).toHaveBeenCalledWith("/api/experiences", { method: "GET" });
    expect(result).toEqual(mockResponse);
  });

  it("should reject with an error if fetch fails", async () => {
    const error = new Error("Failed to fetch");

    (global.fetch as jest.Mock).mockRejectedValue(error);

    await expect(getExperienceData()).rejects.toThrow("Failed to fetch");
  });
});
