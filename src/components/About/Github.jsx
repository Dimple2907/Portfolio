import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <p style={{ textAlign: "center" }}>
        Check out my GitHub profile for my coding activity and projects!
      </p>
      <p style={{ textAlign: "center" }}>
        <a
          href="https://github.com/Dimple2907"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#c770f0" }}
        >
          github.com/Dimple2907
        </a>
      </p>
    </Row>
  );
}

export default Github;
