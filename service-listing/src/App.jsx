import React from "react";
import "./App.css"
import ServiceCard from "./components/ServiceCard";

function App(){
  return (
  <div>
    <ServiceCard 
    title = "Web Development"
    description = "Web Development is a very in-demand Computer Science Skill"
    />
    <ServiceCard
    title = "Data Structures and Algorithms"
    description = "DSA is very imporant to crack companies like Google and Meta"
    />
  </div>
  );
};


export default App;