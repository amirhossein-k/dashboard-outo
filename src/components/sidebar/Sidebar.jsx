import "./sidebar.scss";
import { Row, Col } from "react-bootstrap";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>Product</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>Status</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notification</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Setting</span>
          </li>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
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
