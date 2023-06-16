import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import { useMemo } from "react";

const unique = (src) => Array.from(new Set(src));

const createStatistics = (src) =>
  src.reduce((map, id) => map.set(id, (map.get(id) ?? 0) + 1), new Map());

const totalPriceByStatistics = (src, statistics) =>
  src.reduce((total, item) => total + item.price * statistics.get(item._id), 0);

const totalPrice = (src) => src.reduce((total, item) => total + item.price, 0);

const idToIngredients = (uniqueSrc, ingredients) =>
  uniqueSrc.map((id) => ingredients.find((item) => item._id === id));

const getOrderStatus = (order) => {
  if (order.status === "done") {
    return "Выполнен";
  } else if (order.status === "pending") {
    return "Готовится";
  } else if (order.status === "created") {
    return "Создан";
  }
};

export function useOrderData(order) {
  const ingredients = useSelector(
    (state) => state.ingredientsStore.ingredients
  );

  const matchProfile = useMatch("/profile/orders/");
  const feedMatch = useMatch("/feed");

  const orderStatus = useMemo(() => getOrderStatus(order), [order]);

  const orderIngredients = useMemo(
    () => idToIngredients(order.ingredients, ingredients),
    [order.ingredients, ingredients]
  );

  const orderPrice = useMemo(
    () => totalPrice(orderIngredients),
    [orderIngredients]
  );

  const currentDate = new Date().getTimezoneOffset() / 60;
  const time =
    "i-GMT" + (currentDate > 0 ? "-" + currentDate : "+" + -currentDate);

  return {
    orderIngredients,
    orderPrice,
    orderStatus,
    time,
    feedMatch,
    matchProfile,
  };
}

export const useOrderDataWithStatistics = (order) => {
  const ingredients = useSelector(
    (state) => state.ingredientsStore.ingredients
  );

  const matchProfile = useMatch("/profile/orders/");
  const feedMatch = useMatch("/feed");

  const orderStatus = useMemo(() => getOrderStatus(order), [order]);

  const uniqueIds = useMemo(
    () => unique(order.ingredients),
    [order.ingredients]
  );

  const statistics = useMemo(
    () => createStatistics(order.ingredients),
    [order.ingredients]
  );

  console.log("statistics", statistics);

  const orderIngredients = useMemo(
    () => idToIngredients(uniqueIds, ingredients),
    [uniqueIds, ingredients]
  );

  const orderPrice = useMemo(
    () => totalPriceByStatistics(orderIngredients, statistics),
    [orderIngredients, statistics]
  );

  const currentDate = new Date().getTimezoneOffset() / 60;
  const time =
    "i-GMT" + (currentDate > 0 ? "-" + currentDate : "+" + -currentDate);

  return {
    orderIngredients,
    statistics,
    orderPrice,
    orderStatus,
    time,
    feedMatch,
    matchProfile,
  };
};
