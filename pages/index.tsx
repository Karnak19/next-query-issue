// import dynamic from "next/dynamic";
// const Package = dynamic(import("../components/Package"), { ssr: false });

import Local from "../components/Local";
import Package from "../components/Package";

export default function Home() {
  return (
    <div>
      <Package />
      <Local />
    </div>
  );
}
