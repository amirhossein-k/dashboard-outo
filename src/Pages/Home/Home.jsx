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
      <Row className="home g-0" style={{ marginLeft: 0, marginRight: 0 }}>
        <Col
          className="g-0"
          style={{
            paddingRight: 0,
            maxWidth: "100vh",
            paddingLeft: 0,
            mimWidth: "100%",
          }}
          xs={12}
          sm={1}
          md={2}
          lg={2}
        >
          <Sidebar />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }} className="g-0">
          <div className="homeContainer g-0">
            {/* option  */}
            {/* <Navbar /> */}
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
