import React, { PureComponent } from "react";

class ProjectCard extends PureComponent {
  render() {
    const {
      projID,
      title,
      description,
      githubLink,
      deployedLink,
      logoSrc
    } = this.props;

    return (
      <article className="content-card clearfix" id={projID}>
        <a href={deployedLink ? deployedLink : githubLink}>
          <div className="card-photo">
            <img src={logoSrc} alt={`Thumbnail for ${title}`} />
          </div>
          <div className="card-text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </a>
        <div className="card-links">
          <a href={githubLink}>View this project on GitHub</a>
          {deployedLink && <a href={deployedLink}>View the app</a>}
        </div>
      </article>
    );
  }
}

export default ProjectCard;
