import './list.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
import {Col} from 'react-bootstrap'
const List = () => {
  return (
    <div className="list row">
      <Col sm={12} md={2} lg={1} className='fixlistnavbar'>
        <Sidebar/>
      </Col>
      
      <Col sm={12} md={10} lg={11}>
        <div className="listContainer">
          <Datatable/>
        </div>
      </Col>
        
    </div>
  );
};

export default List;
