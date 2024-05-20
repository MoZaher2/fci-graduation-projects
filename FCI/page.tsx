import React from "react";
import Link from "next/link";
import TeamCards from "@/components/FCI/TeamCards"
export default function HomePage() {
  return (
    <>
    <div className="container" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(325px,1fr))",gap: "10px",}}>
      <TeamCards />
      <TeamCards />
      <TeamCards />
      <TeamCards />
      <TeamCards />
      <TeamCards />
      <TeamCards />
      <TeamCards />
      <TeamCards />
      <TeamCards />
    </div>
    </>
  );
}
