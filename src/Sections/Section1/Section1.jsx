import React from "react";
import "./Section1.css";
import Card from "./Card/Card";

const Section1 = () => {
  const boxList = [
    {
      para: "Order Food Online",
      src: "https://welcometosheffield.azureedge.net/media-cache/5/0/0/e/3/b/500e3b4c5074fef88c6365f919596c0ef4e59219.jpg",
    },
    {
      para: "Go out for a meal",
      src: "https://images.unsplash.com/photo-1608048608495-e062fc7d0725?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80https://images.unsplash.com/photo-1608048608495-e062fc7d0725?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=8",
    },
    {
      para: "Zomato Pro",
      src: "https://images.unsplash.com/photo-1581954548218-415cd6ee5f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    },
    {
      para: "Nightlife & Clubs",
      src: "https://images.unsplash.com/photo-1422748733255-ee572fddeab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    },
  ];
  return (
    <section className="sec-1">
      {boxList.map((card, i) => {
        return <Card key={i} para={card.para} src={card.src} />;
      })}
    </section>
  );
};

export default Section1;
