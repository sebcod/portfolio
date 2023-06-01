import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";

const Mouse = (props) => {
  const [currentProject] = useState(projectsData[props.projectNumber]);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
      cursor.style.top = e.y + "px";
      cursor.style.left = e.x + "px";

      document.querySelectorAll(".hover").forEach((link) => {
        link.addEventListener("mouseover", () => {
          cursor.classList.add("hovered");
        });
        link.addEventListener("mouseleave", () => {
          //cursor.style.transition = "0.3s ease-out";
          cursor.classList.remove("hovered");
        });
      });
    });
  }, []);
  return (
    <span
      className="cursor"
      style={{ border: "1px solid " + currentProject.color }}
    >
      <span
        className="centerDot"
        style={{ border: "1px solid " + currentProject.color }}
      ></span>
    </span>
  );
};

export default Mouse;
