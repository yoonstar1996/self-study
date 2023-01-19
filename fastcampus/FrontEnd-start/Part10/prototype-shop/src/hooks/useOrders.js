import React from "react";
import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function Orders() {
  const { orders } = useContext(AppStateContext);
  return orders;
}
