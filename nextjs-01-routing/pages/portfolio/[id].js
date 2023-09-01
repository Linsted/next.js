import { useRouter } from "next/router";
import React from "react";

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>The portfolio project page</h1>
    </div>
  );
}
