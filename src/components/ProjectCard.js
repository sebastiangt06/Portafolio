import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  projUrl,
  gitUrl,
}) => {
  return (
    <Col className="cardproj"  size={12} sm={6} md={4}>
      <div className="card-container">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <a  className="btn-git" href={gitUrl}>
        GitHub
      </a>
      <a className="btn-link" href={projUrl}>
        Project
      </a>
      </div>
    </Col>
  );
};
