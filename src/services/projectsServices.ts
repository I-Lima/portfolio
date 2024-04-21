import { getProjectsData } from "@/Repositories/projectsRepository";
import { dataProps } from "@/types/api";
import { RepositoryData } from "@/types/urls";
import to from "await-to-js";
import _ from "lodash";

export default class ProjectsServices {
  async getProjectsToPreview() {
    const [error, data] = await to(getProjectsData());
    if (error) return null;

    const projectData: RepositoryData[] = (data as dataProps)
      .data as RepositoryData[];

    const dataReturn = projectData.reduce((found, item) => {
      if (item.topics.includes("pinned")) found.push(item);

      found = _.orderBy(found, ["updated_at"], ["asc"]);

      return found.slice(0, 2);
    }, [] as RepositoryData[]);

    return dataReturn;
  }
}
