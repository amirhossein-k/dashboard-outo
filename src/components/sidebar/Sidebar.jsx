import "./sidebar.scss";
import { Row, Col } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Row
        className="top"
        style={{ height: 50, marginLeft: 0, marginRight: 0 }}
      >
        <Col>
          <span className="logo d-flex align-items-center justify-content-center">
            outo Amir
          </span>
        </Col>
      </Row>
      <hr />
      <Row className="center" style={{ marginLeft: 0, marginRight: 0 }}>
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </Row>
      <Row className="bottom" style={{ marginLeft: 0, marginRight: 0 }}>
        color
      </Row>
    </div>
  );
};

export default Sidebar;
