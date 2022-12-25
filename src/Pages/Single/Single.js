import "./single.scss";
import {Col} from 'react-bootstrap'
import Sidebar from '../../components/sidebar/Sidebar'


const Single = () => {
  return (
    <div className="single  row">
      
      <Col  sm={12} md={2} lg={1} className='fixlistnavbar'><Sidebar/></Col>
      <Col  sm={12} md={10} lg={11}>
        <div className="singleContainer">
          <div className="top">
            <div className="left">
              <div className="editButton">Edit </div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars2_tgwa6d.jpg" 
                alt="" className="itemImg"/>
                <div className="details">
                  <h1 className="itemTitle">samand</h1>
                  <div className="dataItem">
                    <span className="itemKey">کارخانه</span>
                    <span className="itemValue">سایپا</span>
                  </div>
                  <div className="dataItem">
                    <span className="itemKey">کارکرد</span>
                    <span className="itemValue">5</span>
                  </div>
                  <div className="dataItem">
                    <span className="itemKey">وضعیت</span>
                    <span className="itemValue">موجود</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </div>
          <div className="buttom"></div>
        </div>
      </Col>
    </div>
  );
};

export default Single;
