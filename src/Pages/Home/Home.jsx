import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import { Container, Col, Row } from "react-bootstrap";
const Home = () => {
  return (
    <Container
      fluid
      style={{
        minWidth: 100,
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <Row className="home" style={{ marginLeft: 0, marginRight: 0 }}>
        <Col
          style={{
            paddingRight: 0,
            maxWidth: "100vh",
            paddingLeft: 0,
            mimWidth: "100%",
          }}
          sm={1}
          md={1}
          lg={2}
        >
          <Sidebar />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="homeContainer">
            {/* <Navbar /> option  */}
            <div className="widgets">
              <Widgets />
              <Widgets />
              <Widgets />
              <Widgets />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
