import React from "react";
import fs from "fs/promises";
import path from "path";

export default function ProductDetailedPage(props) {
  const { loadedProduct } = props;

  //   if (!loadedProduct) {
  //     return <div>Loading ... </div>;
  //   }

  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const { productId } = params;

  const data = await getData();

  const product = data.products.find((product) => productId === product.id);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { loadedProduct: product },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const pathsWithParams = ids.map((id) => ({
    params: {
      productId: id,
    },
  }));

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}
