import React from "react";
import "./projects.css";
import axios from "axios";
import ProjectData from "./Projectdata";
import { Link } from "react-router-dom";

const NewProjects = () => {
  const [projects, setProjects] = React.useState([]);

  console.log(projects);

  const getProjectsData = async () => {
    const projectsGet = await axios.get("http://localhost:5000");
    setProjects(projectsGet.data);
  };

  console.log(ProjectData);

  React.useEffect(() => {
    getProjectsData();
  }, []);

  const projectMap = ProjectData.map((pr) => {
    return (
      <div class="col-sm-4 mt-3 mb-3">
        <div class="portofolio-container">
          <div class="header">
            <div class="img-portofolio">
              <img src={`${pr.image}`} alt="" />
            </div>
            <h2 className="text-center mt-3">
              <aside>{pr.judul}</aside>{" "}
            </h2>
          </div>
          <p className="mt-3 mb-4 textnya fs-6">{pr.text}</p>

          <div class="link">
            <a className="btn btn-link" target="-blank" href={pr.link}>
              Kunjungi
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div class="container mt-5">
        <div class="row">{projectMap}</div>
      </div>
    </div>
  );
};

export default NewProjects;
