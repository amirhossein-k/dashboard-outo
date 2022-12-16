import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
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
          }}
          sm={2}
          md={3}
          lg={3}
        >
          <Sidebar />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }} sm={10} md={9} lg={9}>
          <div className="homeContainer">container</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
