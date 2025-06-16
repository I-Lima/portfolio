import AboutServices from "@/services/aboutServices";
import { getAboutData as mockGetAboutData } from "@/Repositories/aboutRepository";
import { LANGUAGES } from "@/constant/language";
import { dataProps } from "@/types/api";

jest.mock("@/repositories/aboutRepository", () => ({
  getAboutData: jest.fn(),
}));

const mockedGetAboutData = mockGetAboutData as jest.Mock;

describe("AboutServices.getAboutData", () => {
  const fakeData: dataProps = {
    status: 200,
    success: true,
    data: {
      descriptions: {
        translations: {
          en: "About me in English",
          pt: "Sobre mim em Português",
        },
      },
      language: {
        en: [
          { name: "English", level: "Fluent", order: 2 },
          { name: "Spanish", level: "Intermediate", order: 1 },
        ],
        pt: [
          { name: "Português", level: "Nativo", order: 2 },
          { name: "Inglês", level: "Avançado", order: 1 },
        ],
      },
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("retorna os dados processados corretamente para o idioma EN", async () => {
    mockedGetAboutData.mockResolvedValue(fakeData);

    const result = await AboutServices.getAboutData(LANGUAGES[0]);

    expect(result).not.toBeNull();
    expect(result?.description).toBe("About me in English");
    expect(result?.languages).toEqual([
      { name: "English", level: "Fluent", order: 2 },
      { name: "Spanish", level: "Intermediate", order: 1 },
    ]);
  });

  it("retorna os dados corretamente para o idioma PT", async () => {
    mockedGetAboutData.mockResolvedValue(fakeData);

    const result = await AboutServices.getAboutData(LANGUAGES[1]);

    expect(result?.description).toBe("Sobre mim em Português");
    expect(result?.languages[0].order).toBeGreaterThanOrEqual(
      result?.languages[1].order,
    );
  });

  it("retorna null se getAboutData lança erro", async () => {
    mockedGetAboutData.mockRejectedValue(new Error("Erro de rede"));

    const result = await AboutServices.getAboutData(LANGUAGES[0]);

    expect(result).toBeNull();
  });
});
