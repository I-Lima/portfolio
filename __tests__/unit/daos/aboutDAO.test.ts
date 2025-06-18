import { getDocs } from "firebase/firestore";
import aboutDAO from "@/daos/aboutDAO";

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  getDocs: jest.fn(),
}));

describe("aboutDAO", () => {
  const mockDocs = [
    { id: "1", data: () => ({ title: "Sobre nós", content: "Texto aqui" }) },
    {
      id: "2",
      data: () => ({ title: "Missão", content: "Nossa missão é..." }),
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return formatted data", async () => {
    (getDocs as jest.Mock).mockResolvedValueOnce({
      docs: mockDocs,
    });

    const result = await aboutDAO.getAllAboutData();

    expect(getDocs).toHaveBeenCalledTimes(1);
    expect(result).toEqual([
      { id: "1", title: "Sobre nós", content: "Texto aqui" },
      { id: "2", title: "Missão", content: "Nossa missão é..." },
    ]);
  });

  it("should return null for documents with null data", async () => {
    const mockWithNull = [...mockDocs, { id: "3", data: () => null }];

    (getDocs as jest.Mock).mockResolvedValueOnce({
      docs: mockWithNull,
    });

    const result = await aboutDAO.getAllAboutData();

    expect(result).toHaveLength(3);
    expect(result[2]).toBeNull();
  });
});
