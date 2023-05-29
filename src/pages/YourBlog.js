import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const YourBlog = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <Buttons left={"/YourResto"} right={"/ComeUp"} />
      </div>
    </main>
  );
};
export default YourBlog;