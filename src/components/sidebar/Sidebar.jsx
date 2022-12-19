import "./sidebar.scss";
import { useEffect, useState } from "react";
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
  const [expantnav, setExpantnav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  window.onresize = function () {
    myFunction();
    myFunction2();
  };
  function myFunction() {
    if (window.innerWidth < 991) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  function myFunction2() {
    if (window.innerWidth <= 576) {
      setExpantnav(true);
    } else {
      setExpantnav(false);
    }
  }
  return (
    <div
      className="sidebar navbar navbar-expand-sm"
      style={{
        width: isOpen ? null : "fit-content",
        minHeight: "100vh",
        mimWidth: "100%",
        display: "block !important",
      }}
    >
      {expantnav && (
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      )}
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ display: "block" }}
      >
        <Row
          className="top"
          style={{ height: 50, marginLeft: 0, marginRight: 0 }}
        >
          <Col>
            <span
              className="logo d-flex align-items-center justify-content-center"
              style={{ display: isOpen ? "block" : "none" }}
            >
              outo Amir
            </span>
          </Col>
        </Row>
        <hr />
        <Row className="center" style={{ marginLeft: 0, marginRight: 0 }}>
          <ul>
            <p className="title">Main</p>
            <li>
              <DashboardIcon className="icon" />
              <span style={{ display: isOpen ? "block" : "none" }}>
                Dashboard
              </span>
            </li>
            <p className="title">Lists</p>

            <li>
              <StoreIcon className="icon" />
              <span style={{ display: isOpen ? "block" : "none" }}>
                Product
              </span>
            </li>
            <p className="title">UseFull</p>

            <li>
              <InsertChartIcon className="icon" />
              <span style={{ display: isOpen ? "block" : "none" }}>Status</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span style={{ display: isOpen ? "block" : "none" }}>
                Notification
              </span>
            </li>
            <p className="title">Service</p>

            <li>
              <SettingsApplicationsIcon className="icon" />
              <span style={{ display: isOpen ? "block" : "none" }}>
                Setting
              </span>
            </li>
            <p className="title">User</p>

            <li>
              <AccountCircleIcon className="icon" />
              <span style={{ display: isOpen ? "block" : "none" }}>
                Profile
              </span>
            </li>
            <li>
              <LogoutIcon className="icon" />
              <span style={{ display: isOpen ? "block" : "none" }}>Logout</span>
            </li>
          </ul>
        </Row>
        <Row className="bottom" style={{ marginLeft: 0, marginRight: 0 }}>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </Row>
      </div>
    </div>
  );
};

export default Sidebar;
