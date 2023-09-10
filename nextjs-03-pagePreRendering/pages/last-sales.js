import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSalesPage() {
  const [sales, setSales] = useState();
  //   const [isLoading, setIsLoading] = useState(false);

  const { data, error, isLoading } = useSWR(
    "https://nextcourse-83da0-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedData = [];
      for (const key in data) {
        transformedData.push({
          id: key,
          userName: data[key].userName,
          volume: data[key].volume,
        });
      }
      setSales(transformedData);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://nextcourse-83da0-default-rtdb.firebaseio.com/sales.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const transformedData = [];
  //         for (const key in data) {
  //           transformedData.push({
  //             id: key,
  //             userName: data[key].userName,
  //             volume: data[key].volume,
  //           });
  //         }
  //         setSales(transformedData);
  //         setIsLoading(false);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (isLoading || !data || !sales) {
    return <p>Loading ...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          <span>{sale.userName}</span>
          <span>{sale.volume}</span>
        </li>
      ))}
    </ul>
  );
}
