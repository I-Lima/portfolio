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

  it("should return only pinned projects, ordered by updated_at", async () => {
    (getProjectsData as jest.Mock).mockResolvedValue({
      data: mockProjects,
    });

    const service = new ProjectsServices();
    const result = await service.getProjectsToPreview();

    expect(result).toHaveLength(2);
    expect(result?.[0].name).toBe("Project C");
    expect(result?.[1].name).toBe("Project A");
  });

  it("should return null if the fetch fails", async () => {
    (getProjectsData as jest.Mock).mockRejectedValue(new Error("Fail"));

    const service = new ProjectsServices();
    const result = await service.getProjectsToPreview();

    expect(result).toBeNull();
  });
});
