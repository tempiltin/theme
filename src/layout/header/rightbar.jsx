import React, { Fragment, useState, useEffect } from 'react';
import man from '../../assets/images/dashboard/profile.jpg'
import { FileText, LogIn, Mail, User, MessageSquare, Bell, Maximize, Search, ShoppingCart, Minus, Plus, X } from 'react-feather';
import { useNavigate } from 'react-router-dom'
import { firebase_app } from '../../data/config'
import { useAuth0 } from '@auth0/auth0-react'
import Bookmark from "../../layout/bookmark"
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { English, Deutsch, Español, Français, Português, 简体中文, Notification, DeliveryProcessing, OrderComplete, TicketsGenerated, DeliveryComplete, CheckAllNotification, ViewAll, MessageBox, EricaHughes, KoriThomas, Admin, Account, Inbox, Taskboard, LogOut, AinChavez, CheckOut, ShopingBag, OrderTotal, GoToyourcart } from '../../constant'
import { InputGroup, InputGroupText } from 'reactstrap';
import { classes } from '../../data/layouts';

const Rightbar = () => {

  const history = useNavigate();
  const [profile, setProfile] = useState('');
  const [name, setName] = useState('')
  const [searchresponsive, setSearchresponsive] = useState(false)
  const [langdropdown, setLangdropdown] = useState(false)
  const [moonlight, setMoonlight] = useState(false)
  const [cartDropdown, setCartDropDown] = useState(false)
  const [notificationDropDown, setNotificationDropDown] = useState(false)
  const [chatDropDown, setChatDropDown] = useState(false)
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState('en');

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelected(lng);
  };


  const { logout } = useAuth0()
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"))

  useEffect(() => {
    setProfile(localStorage.getItem('profileURL') || man);
    setName(localStorage.getItem('Name'))
    if (localStorage.getItem("layout_version") === "dark-only") {
      setMoonlight(true)
    }
    i18n.changeLanguage('en');
  }, []);

  const Logout_From_Firebase = () => {
    localStorage.removeItem('profileURL')
    localStorage.removeItem('token');
    firebase_app.auth().signOut()
    history(`${process.env.PUBLIC_URL}/login`)
  }

  const Logout_From_Auth0 = () => {
    localStorage.removeItem("auth0_profile")
    localStorage.setItem("authenticated", false)
    history(`${process.env.PUBLIC_URL}/login`)
    logout()
  }
  const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();
  const RedirectToChats = () => {
    history(`${process.env.PUBLIC_URL}/app/users/userProfile/${layout}`)
  }
  const RedirectToChat = () => {
    history(`${process.env.PUBLIC_URL}/app/chat-app/${layout}`)
  }

  const UserMenuRedirect = (redirect) => {
    history(redirect)
  }

  //full screen function
  function goFull() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  const SeacrhResposive = (searchresponsive) => {
    if (searchresponsive) {
      setSearchresponsive(!searchresponsive)
      document.querySelector(".search-full").classList.add("open");
      document.querySelector(".more_lang").classList.remove("active");
    } else {
      setSearchresponsive(!searchresponsive)
      document.querySelector(".search-full").classList.remove("open");
    }
  }

  const LanguageSelection = (language) => {
    if (language) {
      setLangdropdown(!language)
    } else {
      setLangdropdown(!language)
    }
  }

  const MoonlightToggle = (light) => {
    if (light) {
      setMoonlight(!light)
      document.body.classList.add("light");
      document.body.classList.remove("dark-only");
      // document.body.className = "light"
      localStorage.setItem('layout_version', 'light');
    } else {
      setMoonlight(!light)
      document.body.classList.remove("light");
      document.body.classList.add("dark-only");
      // document.body.className = "dark-only"
      localStorage.setItem('layout_version', 'dark-only');
    }
  }

  return (
    <Fragment>
      <div className="nav-right col-8 pull-right right-header p-0">
        <ul className="nav-menus">
          <li className="language-nav">
            <div className={`translate_wrapper ${langdropdown ? 'active' : ''}`}>
              <div className="current_lang">
                <div className="lang" onClick={() => LanguageSelection(langdropdown)}>
                  <i className={`flag-icon flag-icon-${selected === "en" ? "us" : selected === "du" ? "de" : selected}`}></i>
                  <span className="lang-txt">{selected}</span>
                </div>
              </div>
              <div className={`more_lang ${langdropdown ? 'active' : ''}`}>
                <div className="lang" onClick={() => changeLanguage('en')}><i className="flag-icon flag-icon-us"></i><span className="lang-txt">{English}<span> {"(US)"}</span></span></div>
                <div className="lang" onClick={() => changeLanguage('du')}><i className="flag-icon flag-icon-de"></i><span className="lang-txt">{Deutsch}</span></div>
                <div className="lang" onClick={() => changeLanguage('es')}><i className="flag-icon flag-icon-es"></i><span className="lang-txt">{Español}</span></div>
                <div className="lang" onClick={() => changeLanguage('fr')}><i className="flag-icon flag-icon-fr"></i><span className="lang-txt">{Français}</span></div>
                <div className="lang" onClick={() => changeLanguage('pt')}><i className="flag-icon flag-icon-pt"></i><span className="lang-txt">{Português}<span> {"(BR)"}</span></span></div>
                <div className="lang" onClick={() => changeLanguage('cn')}><i className="flag-icon flag-icon-cn"></i><span className="lang-txt">{简体中文}</span></div>
                <div className="lang" onClick={() => changeLanguage('ae')}><i className="flag-icon flag-icon-ae"></i><span className="lang-txt">{"لعربية"}<span> {"(ae)"}</span></span></div>
              </div>
            </div>
          </li>
          <li><span className="header-search"><Search onClick={() => SeacrhResposive(searchresponsive)} /></span></li>
          <li className="onhover-dropdown">
            <div className="notification-box" onClick={() => setNotificationDropDown(!notificationDropDown)}><Bell /><span className="badge rounded-pill badge-secondary">2</span></div>
            <div className={`notification-dropdown onhover-show-div ${notificationDropDown ? "active" : ""}`}>
              <h6 className="f-18 mb-0 dropdown-title">{Notification}</h6>
              <ul>
                <li className="b-l-primary border-4">
                  <p>{DeliveryProcessing} <span className="font-danger">{"10 min."}</span></p>
                </li>
                <li className="b-l-success border-4">
                  <p>{OrderComplete}<span className="font-success">{"1 hr"}</span></p>
                </li>
                <li className="b-l-info border-4">
                  <p>{TicketsGenerated}<span className="font-info">{"3 hr"}</span></p>
                </li>
                <li className="b-l-warning border-4">
                  <p>{DeliveryComplete}<span className="font-warning">{"6 hr"}</span></p>
                </li>
                <li><Link className="font-primary f-w-700" to={`${process.env.PUBLIC_URL}/app/ecommerce/orderhistory/${layout}`}>{CheckAllNotification}</Link>
                </li>
              </ul>
            </div>
          </li>
          <Bookmark />
          <li>
            <div className="mode" onClick={() => MoonlightToggle(moonlight)} >
              {moonlight ? <i className="fa fa-lightbulb-o"></i> : <i className="fa fa-moon-o"></i>}
            </div>
            {/* <div className="mode" onClick={() => MoonlightToggle(moonlight)}><i className={`fa ${moonlight ? 'fa-lightbulb-o' : 'fa-moon-o'}`}></i></div> */}
          </li>
          <li className="cart-nav onhover-dropdown">
            <div className="cart-box" onClick={() => setCartDropDown(!cartDropdown)}><ShoppingCart /><span className="badge rounded-pill bg-primary">{"2"}</span></div>
            <ul className={`cart-dropdown onhover-show-div ${cartDropdown ? "active" : ""}`}>
              <h6 className="mb-0 f-18 dropdown-title">{ShopingBag}</h6>
              <li>
                <div className="media"><img className="img-fluid rounded-circle me-3 img-60" src={require("../../assets//images/ecommerce/01.jpg")} alt="" />
                  <div className="media-body"><Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product/${layout}`}><span>{"V-Neck Collar Woman's T-Shirt"}</span></Link>
                    <div className="qty-box">
                      <InputGroup>
                        <InputGroupText >
                          <button className="btn quantity-left-minus" type="button" data-type="minus" data-field=""><Minus /></button>
                        </InputGroupText>
                        <input className="form-control input-number" type="text" name="quantity" defaultValue="1" />
                        <InputGroupText >
                          <button className="btn quantity-right-plus" type="button" data-type="plus" data-field=""><Plus /></button>
                        </InputGroupText>
                      </InputGroup>
                    </div>
                    <h6 className="font-primary">{"$299.00"}</h6>
                  </div>
                  <div className="close-circle"><a href="#javascript" className="bg-danger"><X /></a></div>
                </div>
              </li>
              <li>
                <div className="media"><img className="img-fluid rounded-circle me-3 img-60" src={require("../../assets//images/ecommerce/03.jpg")} alt="" />
                  <div className="media-body"><Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product/${layout}`}><span>{"V-Neck Collar Woman's T-Shirt"}</span></Link>
                    <div className="qty-box">
                      <InputGroup>
                        <InputGroupText >
                          <button className="btn quantity-left-minus" type="button" data-type="minus" data-field=""><Minus /></button>
                        </InputGroupText>
                        <input className="form-control input-number" type="text" name="quantity" defaultValue="1" />
                        <InputGroupText >
                          <button className="btn quantity-right-plus" type="button" data-type="plus" data-field=""><Plus /></button>
                        </InputGroupText>
                      </InputGroup>
                    </div>
                    <h6 className="font-primary">{"$299.00"}</h6>
                  </div>
                  <div className="close-circle"><a href="#javascript" className="bg-danger"><X /></a></div>
                </div>
              </li>
              <li className="total">
                <h6 className="mb-0 mt-0">{OrderTotal} : <span className="f-right f-14">{"$598.00"}</span></h6>
              </li>
              <li className="text-center">
                <Link className="d-block mb-3 view-cart f-w-700" to={`${process.env.PUBLIC_URL}/app/ecommerce/product/${layout}`}>{GoToyourcart}</Link>
                <Link className="btn btn-primary view-checkout" to={`${process.env.PUBLIC_URL}/app/ecommerce/checkout/${layout}`}>{CheckOut}</Link>
              </li>
            </ul>
          </li>
          <li className="onhover-dropdown" onClick={() => setChatDropDown(!chatDropDown)}><MessageSquare />
            <ul className={`chat-dropdown onhover-show-div ${chatDropDown ? "active" : ""}`}>
              <h6 className="f-18 mb-0 dropdown-title">{MessageBox}</h6>
              <li onClick={RedirectToChats}>
                <div className="media"><img className="img-fluid rounded-circle me-3" src={require("../../assets/images/user/1.jpg")} alt="" />
                  <div className="media-body"><span>{EricaHughes}</span>
                    <p>{"Lorem Ipsum is simply dummy..."}</p>
                    <p className="mb-0 font-primary">58 mins ago</p>
                  </div>
                  <span className="badge rounded-circle bg-primary">2</span>
                </div>
              </li>
              <li onClick={RedirectToChats}>
                <div className="media"><img className="img-fluid rounded-circle me-3" src={require("../../assets/images/user/2.jpg")} alt="" />
                  <div className="media-body"><span>{KoriThomas}</span>
                    <p>{"Lorem Ipsum is simply dummy..."}</p>
                    <p className="mb-0 font-primary">1 hr ago</p>
                  </div>
                  <span className="badge rounded-circle bg-primary">2</span>
                </div>
              </li>
              <li onClick={RedirectToChats}>
                <div className="media"><img className="img-fluid rounded-circle me-3" src={require("../../assets/images/user/4.jpg")} alt="" />
                  <div className="media-body"><span>{AinChavez}</span>
                    <p>{"Lorem Ipsum is simply dummy..."}</p>
                    <p className="mb-0 font-primary">32 mins ago</p>
                  </div>
                  <span className="badge rounded-circle bg-primary">2</span>
                </div>
              </li>
              <li className="text-center"> <a href="#javascript" className="font-primary" onClick={RedirectToChat}>{ViewAll}</a></li>
            </ul>
          </li>
          <li className="maximize"><a className="text-dark" href="#javascript" onClick={goFull}><Maximize /></a></li>
          <li className="profile-nav onhover-dropdown p-0">
            <div className="media profile-media">
              <img className="b-r-10" src={authenticated ? auth0_profile.picture : profile} alt="" />
              <div className="media-body"><span>{authenticated ? auth0_profile.name : name}</span>
                <p className="mb-0 font-roboto">{Admin} <i className="middle fa fa-angle-down"></i></p>
              </div>
            </div>
            <ul className="profile-dropdown onhover-show-div">
              <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/users/userProfile/${layout}`)}><User /><span>{Account} </span></li>
              <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/email-app/${layout}`)}><Mail /><span>{Inbox}</span></li>
              <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/todo-app/todo/${layout}`)}><FileText /><span>{Taskboard}</span></li>
              <li onClick={authenticated ? Logout_From_Auth0 : Logout_From_Firebase}><LogIn /><span>{LogOut}</span></li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>

  );
}
// export default translate(Rightbar);
export default Rightbar;