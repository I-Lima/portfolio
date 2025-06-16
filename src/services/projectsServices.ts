import { getProjectsData } from "@/repositories/projectsRepository";
import { dataProps } from "@/types/api";
import { ProjectData } from "@/types/repository";
import to from "await-to-js";
import _ from "lodash";

export default class ProjectsServices {
  async getProjectsToPreview() {
    const [error, data] = await to(getProjectsData());
    if (error) return null;

    const projectData: ProjectData[] = (data as dataProps)
      .data as ProjectData[];

    const dataReturn = projectData.reduce((found, item) => {
      if (item.topics.includes("pinned")) found.push(item);

      found = _.orderBy(found, ["updated_at"], ["desc"]);

      return found;
    }, [] as ProjectData[]);

    return dataReturn;
  }
}
