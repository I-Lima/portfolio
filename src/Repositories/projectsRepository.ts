import { dataProps } from "@/types/api";

export function getProjectsData() {
  return new Promise((resolve, reject) => {
    fetch("/api/projects", { method: "GET" })
      .then((res) => res.json())
      .then((data) => resolve(data as dataProps))
      .catch((error) => reject(error as dataProps));
  });
}
