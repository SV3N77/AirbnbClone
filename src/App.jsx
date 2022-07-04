import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="mx-auto my-0 min-h-screen">
      <Header />
      <section className="flex flex-nowrap gap-5 overflow-x-auto px-4">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
}

export default App;
