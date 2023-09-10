import fs from "fs/promises";
import path from "path";
import Link from "next/link";

function HomePage({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    redirect: {
      destination: "/";
    }
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: data,
    revalidate: 10,
  };
}
export default HomePage;
