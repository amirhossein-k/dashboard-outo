import "./widgets.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const Widgets = ({type}) => {
  let data;
  ////
  const amount = 100;
  const diff = 20
  ////
  switch(type){
    case 'user':
    data={
      title: 'USERS',
      isMoney: false,
      link: 'See all Users',
      icon:  <PersonOutlineIcon className="icon"/>
    }
    break
    case 'order':
    data={
      title: 'ORDERS',
      isMoney: false,
      link: 'View all Orders',
      icon:  <ShoppingCartIcon className="icon"/>
    }
    break
    case 'erarning':
    data={
      title: 'ERARNING',
      isMoney: true,
      link: 'View net Erarnings',
      icon:  <MonetizationOnIcon className="icon"/>
    }
    break
    case 'balance':
    data={
      title: 'BALANCE',
      isMoney: true,
      link: 'See Details',
      icon:  <AccountBalanceWalletIcon className="icon"/>
    }
    break
   
    
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="perecentage positive">
          <KeyboardArrowUpIcon/>{diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
