import React from "react";
import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  const loadProjectHandler = () => {
    //   fetching data
    router.push("/clients/pepsi/projecta");
  };
  return (
    <div>
      <h1>Client Projects Page</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}
