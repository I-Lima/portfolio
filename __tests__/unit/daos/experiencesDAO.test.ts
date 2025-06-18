import { getDocs } from "firebase/firestore";
import experiencesDAO from "@/daos/experiencesDAO";

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  getDocs: jest.fn(),
}));

describe("experiencesDAO", () => {
  const mockDocs = [
    {
      id: "exp1",
      data: () => ({
        title: "Frontend Developer",
        company: "Tech Corp",
        years: 2,
      }),
    },
    {
      id: "exp2",
      data: () => ({
        title: "Backend Engineer",
        company: "DevHouse",
        years: 3,
      }),
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return experiences data with id and combined data", async () => {
    (getDocs as jest.Mock).mockResolvedValueOnce({ docs: mockDocs });

    const result = await experiencesDAO.getAllExperiencesData();

    expect(getDocs).toHaveBeenCalledTimes(1);
    expect(result).toEqual([
      {
        id: "exp1",
        title: "Frontend Developer",
        company: "Tech Corp",
        years: 2,
      },
      {
        id: "exp2",
        title: "Backend Engineer",
        company: "DevHouse",
        years: 3,
      },
    ]);
  });

  it("should include null when data() returns null", async () => {
    const docsWithNull = [...mockDocs, { id: "exp3", data: () => null }];

    (getDocs as jest.Mock).mockResolvedValueOnce({ docs: docsWithNull });

    const result = await experiencesDAO.getAllExperiencesData();

    expect(result).toHaveLength(3);
    expect(result[2]).toBeNull();
  });
});
