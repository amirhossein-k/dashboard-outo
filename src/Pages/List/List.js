import './list.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
import {Col} from 'react-bootstrap'
const List = () => {
  return (
    <div className="list row">
      <Col >
        <Sidebar/>
      </Col>
      
      <Col>
        <div className="listContainer">
          <Datatable/>
        </div>
      </Col>
        
    </div>
  );
};

export default List;
