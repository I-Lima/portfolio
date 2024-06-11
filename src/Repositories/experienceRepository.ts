import { dataProps } from "@/types/api";

export function getExperienceData() {
  return new Promise((resolve, reject) => {
    fetch("/api/experiences", { method: "GET" })
      .then((res) => res.json())
      .then((data) => resolve(data as dataProps))
      .catch((error) => reject(error as dataProps));
  });
}
