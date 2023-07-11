import { useMatch } from "react-router-dom";
import { useMemo } from "react";
import { IOrderDetails } from "../services/actions/order-actions";
import { useTypedSelector } from "../services/hooks";

const unique = (src: string) => Array.from(new Set(src));

const createStatistics = (src: Array<string>) => 
  src.reduce((map: any, id: string) => map.set(id, (map.get(id) ?? 0) + 1), new Map());

const totalPriceByStatistics = (src: Array<string>, statistics: any) =>
  src.reduce((total: number, item: any) => total + item.price * statistics.get(item._id), 0);

const totalPrice = (src: Array<string>) => src.reduce((total: number, item: any) => total + item.price, 0);

const idToIngredients = (uniqueSrc: any, ingredients: any) =>
  uniqueSrc.map((id: any) => ingredients.find((item: any) => item._id === id));



const getOrderStatus = (order: any) => {
  if (order.status === "done") {
    return "Выполнен";
  } else if (order.status === "pending") {
    return "Готовится";
  } else if (order.status === "created") {
    return "Создан";
  }
};

export function useOrderData(order: IOrderDetails | undefined) {
  const ingredients = useTypedSelector(state => state.ingredientsStore.ingredients);

  const matchProfile = useMatch("/profile/orders/");
  const feedMatch = useMatch("/feed");

  const orderStatus = useMemo(() => getOrderStatus(order), [order]);

  const orderIngredients = useMemo(
    () => idToIngredients(order?.ingredients, ingredients),
    [order?.ingredients, ingredients]
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

export const useOrderDataWithStatistics = (order: any) => {
  const ingredients = useTypedSelector(state => state.ingredientsStore.ingredients);

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
