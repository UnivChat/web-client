import { useQuery } from "@tanstack/react-query";
import { featchFacilitiesDetail, type FacilitiesType } from "../api";
import { FacilitiesKey } from "../keys";

export const useFacilities = (building: string, name: string) => {
  return useQuery<FacilitiesType[]>(
    [FacilitiesKey.getFacilities, building, name],
    async () => {
      const data = await featchFacilitiesDetail({ building, name });
      return data;
    }
  );
};
