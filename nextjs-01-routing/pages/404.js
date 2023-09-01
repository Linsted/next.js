import { useRouter } from "next/router";
import React from "react";

export default function PageNotFound() {
  const router = useRouter();
  return (
    <div>
      <h1>Page not found</h1>
      <button onClick={() => router.push("/")}>To Main Page</button>
    </div>
  );
}
