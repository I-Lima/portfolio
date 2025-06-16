import ExperienceServices from "@/services/experienceServices";
import { LANGUAGES } from "@/constant/language";
import { getExperienceData } from "@/Repositories/experienceRepository";

jest.mock("@/Repositories/experienceRepository", () => ({
  getExperienceData: jest.fn(),
}));

const mockDictionary = {
  section: "",
  more: "",
  currently: "Currently",
  companyButton: "",
  projectButton: "",
};

const mockExperienceData = [
  {
    output: "2022",
    history: {
      a: {
        translations: {
          en: {
            role: "Developer",
            output: "2022-01",
            description: "Worked on frontend",
            entrance: "2021-01",
          },
          pt: {
            role: "Desenvolvedor",
            output: "2022-01",
            description: "Trabalhou no frontend",
            entrance: "2021-01",
          },
        },
      },
      b: {
        translations: {
          en: {
            role: "Engineer",
            output: "2021-01",
            description: "Backend stuff",
            entrance: "2020-01",
          },
          pt: {
            role: "Engenheiro",
            output: "2021-01",
            description: "Trabalhou com backend",
            entrance: "2020-01",
          },
        },
      },
    },
  },
];

describe("ExperienceServices", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getPreviewExperiencesData", () => {
    it("retorna preview com dois itens no history", async () => {
      (getExperienceData as jest.Mock).mockResolvedValue({
        data: mockExperienceData,
      });

      const result = await ExperienceServices.getPreviewExperiencesData({
        lang: LANGUAGES[1],
        dictionary: mockDictionary,
      });

      expect(result).toHaveLength(1);
      expect(result?.[0].history).toHaveLength(2);
      expect(result?.[0].history[0].role).toBe("Desenvolvedor");
    });

    it("retorna null em caso de erro", async () => {
      (getExperienceData as jest.Mock).mockRejectedValue(new Error("fail"));

      const result = await ExperienceServices.getPreviewExperiencesData({
        lang: LANGUAGES[1],
        dictionary: mockDictionary,
      });

      expect(result).toBeNull();
    });
  });

  describe("getAllExperienceData", () => {
    it("retorna dados completos de experiência", async () => {
      (getExperienceData as jest.Mock).mockResolvedValue({
        data: mockExperienceData,
      });

      const result = await ExperienceServices.getAllExperienceData({
        lang: LANGUAGES[1],
        dictionary: mockDictionary,
      });

      expect(result).toHaveLength(1);
      expect(result?.[0].history).toHaveLength(2);
      expect(result?.[0].history[0].role).toBe("Desenvolvedor");
    });

    it("retorna null se o fetch falhar", async () => {
      (getExperienceData as jest.Mock).mockRejectedValue(new Error("fail"));

      const result = await ExperienceServices.getAllExperienceData({
        lang: LANGUAGES[1],
        dictionary: mockDictionary,
      });

      expect(result).toBeNull();
    });
  });
});
