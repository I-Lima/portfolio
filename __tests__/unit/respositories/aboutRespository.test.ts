import { getAboutData } from "@/Repositories/aboutRepository";
import { dataProps } from "@/types/api";

describe("getAboutData", () => {
  const mockData: dataProps = {
    status: 200,
    success: true,
    data: {
      language: {},
      descriptions: {
        translations: {
          en: "English description",
          pt: "Descrição em português",
        },
      },
    },
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should resolve with the expected data", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await getAboutData();
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith("/api/about", { method: "GET" });
  });

  it("should reject with an error", async () => {
    const error = new Error("Failed to fetch");

    (global.fetch as jest.Mock).mockRejectedValue(error);

    await expect(getAboutData()).rejects.toThrow("Failed to fetch");
  });
});
