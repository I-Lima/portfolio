import { dataProps } from "@/types/api";

export function getAboutData() {
  return new Promise((resolve, reject) => {
    fetch("/api/about", { method: "GET" })
      .then((res) => res.json())
      .then((data) => resolve(data as dataProps))
      .catch((error) => reject(error as dataProps));
  });
}
