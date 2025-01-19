import { getAboutData } from "@/Repositories/aboutRepository";
import { dataProps } from "@/types/api";
import { aboutProps } from "@/types/about";
import to from "await-to-js";

class AboutServices {
  async getAboutData(): Promise<aboutProps | null> {
    const [error, data] = await to(getAboutData());
    if (error) return null;

    const fluencyOrder: { [key: string]: number } = {
      Fluent: 3,
      Intermediary: 2,
      Basic: 1,
    };

    const { languages } = (data as dataProps).data as aboutProps;

    const sortedLanguages = [...languages].sort(
      (a, b) => fluencyOrder[b.level] - fluencyOrder[a.level],
    );

    return {
      ...((data as dataProps).data as aboutProps),
      languages: sortedLanguages,
    };
  }
}

export default new AboutServices();
