import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import type { Staff } from "@shared/types";

import { axiosInstance } from "@/axiosInstance";
import { queryKeys } from "@/react-query/constants";

async function getStaff(): Promise<Staff[]> {
  const { data } = await axiosInstance.get("/staff");
  return data;
}

export function useStaff() {
  const [filter, setFilter] = useState("all");
  const fallback: Staff[] = [];

  const { data: staff = fallback } = useQuery({
    queryKey: [queryKeys.staff],
    queryFn: getStaff,
  });

  return { staff, filter, setFilter };
}
