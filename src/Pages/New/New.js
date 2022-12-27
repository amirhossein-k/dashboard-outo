import { useState, useRef, useEffect } from "react";
import "./new.scss";
import { Col, Row, Button, Form, FormControl } from "react-bootstrap";
import { TagsInput } from "react-tag-input-component";
import { Link, useNavigate } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
const New = () => {
  const [namecar, setNameCar] = useState("");
  const [factory, setFactory] = useState("");
  const [distance, setDistance] = useState("");
  const [propertys, setPropertys] = useState("");
  const [skills, setSkills] = useState([]);
  const [pic, setPic] = useState("");
  // const skills=[]
  ////////////////////////
  let navigate = useNavigate();
  const fileInput = useRef(null);
  //////////////////////
  useEffect(() => {
    // if (userInfo) {
    //   navigate("/product");
    // }
    console.log(pic);
  }, [fileInput, pic]);
  //////////////////////////
  const postDetails = (pics) => {
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "dijamrzud");
      ///////
      console.log(fileInput.current.files);

      // setTimeout(() => {
      //   setDisable(false);
      //   console.log(fileInput.current.files, "toye tttt");
      // }, 5000);
      /////
      fetch("https://api.cloudinary.com/v1_1/dijamrzud/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => console.log(err));
    } else {
      return null;
    }
  };
  ///////////////
  return (
    <Row className="new">
      {/* ///////Sidebar//////// */}
      <Col sm={12} md={2} lg={1} className="fixlistnavbar">
        <Sidebar />
      </Col>
      {/* /////////Container//////// */}
      <Col className="newContainer">
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        {/* ///// end top ////// */}
        <div className="bottom-new">
          <img src={pic} className="imgproduct" />
          <Form className="formfix">
            <div className="form-0">
              <Form.Group controlId="pic">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  // onChange={(e) => postDetails(e.target.files[0])}
                  onChange={(e) => postDetails(e.target.files[0])}
                  ref={fileInput}
                />
              </Form.Group>
            </div>
            <div className="form-1">
              {/* //// */}
              <Form.Group controlId="titlecar" style={{ width: "100%" }}>
                <Form.Label>نام خودرو</Form.Label>
                <Form.Control
                  type="text"
                  value={namecar}
                  placeholder="نام خودرو"
                  onChange={(e) => setNameCar(e.target.value)}
                />
              </Form.Group>
              {/* //// */}
              <Form.Group controlId="factory" style={{ width: "100%" }}>
                <Form.Label>نام خودرو</Form.Label>
                <Form.Control
                  type="text"
                  value={factory}
                  placeholder="نام کارخانه"
                  onChange={(e) => setFactory(e.target.value)}
                />
              </Form.Group>
              {/* //// */}
              <Form.Group controlId="distance" style={{ width: "100%" }}>
                <Form.Label>نام خودرو</Form.Label>
                <Form.Control
                  type="number"
                  value={distance}
                  placeholder="کارکرد"
                  onChange={(e) => setDistance(e.target.value)}
                />
              </Form.Group>
              {/* //// */}
            </div>
            <div className="form-2">
              {/* //// */}
              {/* <Form.Group controlId="formControlsTextarea">
              <Form.Label>نام خودرو</Form.Label>
              <Form.Control componentClass="textarea" value={propertys}
                placeholder="ویژگی"
                onChange={e=> setPropertys(e.target.value)} />
            </Form.Group> */}
              {/* //// */}
              <TagsInput
                value={skills}
                onChange={setSkills}
                name="fruits"
                placeHolder="ویژگی"
              />
            </div>
          </Form>
        </div>
        {/* ///// end bottom ///// */}
      </Col>
    </Row>
  );
};

export default New;
