import React from "react";

export default function UserIdPage(props) {
  return <div>{props.id}</div>;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { userId } = params;

  return {
    props: { id: "userId-" + userId },
  };
}
