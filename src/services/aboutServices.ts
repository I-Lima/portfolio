import { getAboutData } from "@/Repositories/aboutRepository";
import { dataProps } from "@/types/api";
import { aboutProps } from "@/types/dao";
import to from "await-to-js";

class AboutServices {
  async getAboutData() {
    const [error, data] = await to(getAboutData());
    if (error) return null;

    return (data as dataProps).data as aboutProps;
  }
}

export default new AboutServices();
