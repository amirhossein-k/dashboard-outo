import "./widgets.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const Widgets = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USER</span>
        <span className="counter">1252</span>
        <span className="link">see all user</span>
      </div>
      <div className="Right">
        <div className="perecentage positive">
          <KeyboardArrowUpIcon/>20%
        </div>
        <PersonOutlineIcon className="icon"/>
      </div>
    </div>
  );
};

export default Widgets;
