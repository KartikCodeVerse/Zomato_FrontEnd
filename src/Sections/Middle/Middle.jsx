import React from "react";
import "./Middle.css";
import Box from "./Card/Box";
import TextBox from "./Card/TextBox";

const Middle = () => {
  const boxList = [
    {
      title: "Newly Opened",
      place: " 17 Places",
      src: "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=963&q=80",
    },
    {
      title: " Trending This Week",
      place: "30 Places",
      src: "https://images.unsplash.com/photo-1564638305579-5e395c9b62c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
    {
      title: "Best of Delhi NCR",
      place: "157 Places",
      src: "https://images.unsplash.com/photo-1639843208133-438926b0bf53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
    {
      title: "Great Caffes",
      place: "28 Places",
      src: "https://images.unsplash.com/photo-1640200888120-83d88bd28107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    },
  ];
  const textList = [
    {
      place: "Connaught Place (387 pla...",
      icon: "fa-solid fa-chevron-right",
    },
    { place: "Sector 29 (281 places)...", icon: "fa-solid fa-chevron-right" },
    {
      place: "Sector 18, Noida (286 plac...",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "Rajouri Garden (665 places)",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "Saket (638 places)",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "DLF Cyber City (218 places)",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "Golf Course Road (267 pla...",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "DLF Phase 4 (781 places)",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "Greater Kailash 1 (GK1)(36...",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "Delhi University-GTB Naga...",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "Indirapuram (1962 places)",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "Vasant Kunj (929 places)",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "Rohini (2725 places)",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "Janpath (54 places)",
      icon: "fa-solid fa-chevron-right",
    },
    {
      place: "Chanakapuri (128 places)",
      icon: "fa-solid fa-chevron-right",
    },
  ];
  return (
    <section className="middle">
      <div className="sec-2">
        <h2>Collections</h2>
        <div>
          <h6>
            Explore curated listes of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </h6>
          <span>
            All Collections in Delhi NCR &nbsp;
            <i className="fas fa-caret-right"></i>
          </span>
        </div>
      </div>
      <div className="sec-3">
        {boxList.map((box, i) => {
          return (
            <Box key={i} title={box.title} place={box.place} src={box.src} />
          );
        })}
      </div>
      <h1>
        Popular localities in and around <strong>Delhi NCR</strong>
      </h1>
      <div className="sec-4">
        {" "}
        {textList.map((text, i) => {
          return <TextBox key={i} place={text.place} icon={text.icon} />;
        })}
      </div>
    </section>
  );
};

export default Middle;
