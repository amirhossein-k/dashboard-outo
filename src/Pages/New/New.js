import {useState} from 'react'
import "./new.scss";
import { Col, Row,Button,Form } from "react-bootstrap";

import Sidebar from "../../components/sidebar/Sidebar";
const New = () => {
  const [namecar,setNameCar] = useState('')
  return (
   <Row className="new">
     {/* ///////Sidebar//////// */}
     <Col sm={12} md={2} lg={1}  className="fixlistnavbar">
       <Sidebar/>
      </Col>
      {/* /////////Container//////// */}
      <Col className="newContainer">
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        {/* ///// end top ////// */}
        <div className="bottom-new">
          <Form className="formfix">
            <Form.Group controlId="title">
              <Form.Label>نام خودرو</Form.Label>
              <Form.Control type="title" value={namecar}
                placeholder="نام خودرو"
                onChange={e=> setNameCar(e.target.value)} />
            </Form.Group>
          </Form>
        </div>
        {/* ///// end bottom ///// */}
      </Col>
     
   
   </Row>
  )
};

export default New;
