import Link from "next/link";
import React from "react";

export default function ClientsPage() {
  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        <li>
          <Link href="/clients/pepsi">Pepsi</Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/clients/[id]",
              query: {
                id: "cola",
              },
            }}
          >
            Cola
          </Link>
        </li>
      </ul>
    </div>
  );
}
