import ProjectsServices from "@/services/projectsServices";
import { getProjectsData } from "@/Repositories/projectsRepository";
import { ProjectData } from "@/types/repository";

jest.mock("@/Repositories/projectsRepository", () => ({
  getProjectsData: jest.fn(),
}));

const mockProjects: ProjectData[] = [
  {
    name: "Project A",
    topics: ["pinned", "typescript"],
    updated_at: "2024-05-10",
  },
  {
    name: "Project B",
    topics: ["react"],
    updated_at: "2024-05-12",
  },
  {
    name: "Project C",
    topics: ["pinned"],
    updated_at: "2024-06-01",
  },
] as ProjectData[];

describe("ProjectsServices", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("retorna apenas projetos com o tópico 'pinned', ordenados por data", async () => {
    (getProjectsData as jest.Mock).mockResolvedValue({
      data: mockProjects,
    });

    const service = new ProjectsServices();
    const result = await service.getProjectsToPreview();

    expect(result).toHaveLength(2);
    expect(result?.[0].name).toBe("Project C");
    expect(result?.[1].name).toBe("Project A");
  });

  it("retorna null em caso de erro", async () => {
    (getProjectsData as jest.Mock).mockRejectedValue(new Error("Fail"));

    const service = new ProjectsServices();
    const result = await service.getProjectsToPreview();

    expect(result).toBeNull();
  });
});
