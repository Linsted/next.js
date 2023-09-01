import { useRouter } from "next/router";
import React from "react";

export default function ClientProjectId() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>The client project (id)</h1>
    </div>
  );
}
