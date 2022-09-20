import React, { useState, useEffect } from 'react';
import man from '../assets/images/dashboard/profile.jpg';
import { Container, Row, Col, Form, Input, Label, Button, NavItem, NavLink, Nav, TabContent, TabPane } from 'reactstrap'
import { firebase_app, googleProvider, facebookProvider, githubProvider, Jwt_token } from '../data/config'
import { handleResponse } from '../services/fack.backend'
import { useAuth0 } from '@auth0/auth0-react'
import { toast } from 'react-toastify';
import { Facebook, GitHub } from 'react-feather'
import firebaseImg from '../assets/images/firebase.svg'
import jwtImg from '../assets/images/jwt.svg'
import authImg from '../assets/images/auth0.svg'
import { Password, SignIn, EmailAddress, RememberPassword, ForgotPassword, CreateAccount, FIREBASE, AUTH0, JWT, LoginWithJWT } from '../constant';
import { useNavigate } from 'react-router';
import { classes } from '../data/layouts';

const Logins = (props) => {

  const { loginWithRedirect } = useAuth0()
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState("firebase");
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();
  const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();

  const [value, setValue] = useState(
    localStorage.getItem('profileURL' || man)
  );
  const [name, setName] = useState(
    localStorage.getItem('Name')
  );

  useEffect(() => {

    localStorage.setItem('profileURL', value);
    localStorage.setItem('Name', name);
  }, [value, name]);

  const loginAuth = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      await firebase_app.auth().signInWithEmailAndPassword(email, password).then(function () {
        setValue(man);
        setName("Emay Walter");
        localStorage.setItem('token', Jwt_token);
        setTimeout(() => {
          history(`${process.env.PUBLIC_URL}/dashboard/default/${layout}`);
        }, 200);
      })
    } catch (error) {
      setTimeout(() => {
        toast.error("Oppss.. The password is invalid or the user does not have a password.");
      }, 200);
    }
  }

  const googleAuth = async () => {

    try {
      firebase_app.auth().signInWithPopup(googleProvider).then(function (result) {
        setName(result.user.displayName);
        setValue(result.user.photoURL)
        localStorage.setItem('token', Jwt_token);
        setTimeout(() => {
          history(`${process.env.PUBLIC_URL}/dashboard/default/${layout}`);
        }, 200);

      });
    } catch (error) {
      setTimeout(() => {
        toast.error("Oppss.. The password is invalid or the user does not have a password.");
      }, 200);
    }
  };

  const facebookAuth = async () => {

    try {
      firebase_app.auth().signInWithPopup(facebookProvider).then(function (result) {
        setValue(result.user.photoURL);
        setName(result.user.displayName)
        localStorage.setItem('token', Jwt_token);
        setTimeout(() => {
          history(`${process.env.PUBLIC_URL}/dashboard/default/${layout}`);
        }, 200);
      });
    } catch (error) {
      setTimeout(() => {
        toast.error("Oppss.. The password is invalid or the user does not have a password.");
      }, 200);
    }
  }

  const githubAuth = async () => {

    try {
      firebase_app.auth().signInWithPopup(githubProvider).then(function (result) {
        setValue(result.user.photoURL);
        setName(result.additionalUserInfo.username)
        localStorage.setItem('token', Jwt_token);
        setTimeout(() => {
          history(`${process.env.PUBLIC_URL}/dashboard/default/${layout}`);
        }, 200);
      });
    } catch (error) {
      setTimeout(() => {
        toast.error("Oppss.. The password is invalid or the user does not have a password.");
      }, 200);
    }
  }

  const loginWithJwt = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ({ email, password })
    };

    return fetch('/users/authenticate', requestOptions)
      .then(handleResponse)
      .then(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        setValue(man);
        setName('Emay Walter');
        localStorage.setItem('token', Jwt_token);
        window.location.href = `${process.env.PUBLIC_URL}/dashboard/default/${layout}`;
        return user;
      });
  };

  // const loginWithJwt = (email, password) => {

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: ({ email, password })
  //   };
  //   console.log("requestOptions", requestOptions);
  //   return fetch('/users/authenticate', requestOptions)
  //     .then(handleResponse)
  //     .then(user => {
  //       console.log("user", user);
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes
  //       setValue(man);
  //       setName("Emay Walter");
  //       localStorage.setItem('token', 'data:image/png;base64,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');
  //       setTimeout(() => {
  //         history(`${process.env.PUBLIC_URL}/dashboard/default/${layout}`);
  //       }, 200);
  //       // window.location.href = `${process.env.PUBLIC_URL}/dashboard/default/${layout}`
  //       return user;
  //     });
  // }

  return (
    <Container fluid={true} className="p-0">
      <Row>
        <Col xs="12">
          <div className="login-card">
            <div>
              <div>
                <a className="logo" href="index.html">
                  <img className="img-fluid for-light" src={require("../assets/images/logo/login.png")} alt="" />
                  <img className="img-fluid for-dark" src={require("../assets/images/logo/logo_dark.png")} alt="" />
                </a>
              </div>
              <div className="login-main login-tab">
                <Nav className="border-tab flex-column" tabs>
                  <NavItem>
                    <NavLink className={selected === 'firebase' ? 'active' : ''} onClick={() => setSelected('firebase')}>
                      <img src={firebaseImg} alt="" />
                      <span>{FIREBASE}</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={selected === 'jwt' ? 'active' : ''} onClick={() => setSelected('jwt')}>
                      <img src={jwtImg} alt="" />
                      <span>{JWT}</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={selected === 'auth0' ? 'active' : ''} onClick={() => setSelected('auth0')}>
                      <img src={authImg} alt="" />
                      <span>{AUTH0}</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={selected} className="content-login">
                  <TabPane className="fade show" tabId={selected === "firebase" ? "firebase" : "jwt"}>
                    <Form className="theme-form">
                      <h4>{selected === "firebase" ? "Sign In With Firebase" : "Sign In With Jwt"}</h4>
                      <p>{"Enter your email & password to login"}</p>
                      <div className="mb-3">
                        <Label className="col-form-label">{EmailAddress}</Label>
                        <Input className="form-control" type="email" required="" onChange={e => setEmail(e.target.value)} defaultValue={email} />
                      </div>
                      <div className="mb-3 position-relative">
                        <Label className="col-form-label">{Password}</Label>
                        <Input className="form-control" type={togglePassword ? "text" : "password"} onChange={e => setPassword(e.target.value)} defaultValue={password} required="" />
                        <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                      </div>
                      <div className="login-btn mb-0">
                        <div className="checkbox ms-3">
                          <Input id="checkbox1" type="checkbox" />
                          <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                        </div><a className="link" href="#javascript">{ForgotPassword}</a>
                        {selected === "firebase" ?
                          <Button color="primary" disabled={loading ? loading : loading} onClick={(e) => loginAuth(e)}>{loading ? "LOADING..." : SignIn}</Button>
                          :
                          <Button color="primary" onClick={() => loginWithJwt(email, password)}>{LoginWithJWT}</Button>
                        }
                      </div>
                      <h6 className="text-muted mt-4 or">{"Or Sign in with"}</h6>
                      <div className="social mt-4">
                        <div className="btn-showcase">
                          <Button color="light" onClick={facebookAuth} >
                            <Facebook className="txt-fb" />
                          </Button>
                          <Button color="light" onClick={googleAuth} >
                            <i className="fa fa-google txt-googleplus"></i>
                          </Button>
                          <Button color="light" onClick={githubAuth} >
                            <GitHub />
                          </Button>
                        </div>
                      </div>
                      <p className="mt-4 mb-0">{"Don't have account?"}<a className="ms-2" href="#javascript">{CreateAccount}</a></p>
                    </Form>
                  </TabPane>
                  <TabPane className="fade show" tabId="auth0">
                    <div className="auth-content">
                      <img src={require("../assets/images/auth-img.svg")} alt="" />
                      <h4>{"Welcome to login with Auth0"}</h4>
                      <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"}</p>
                      <Button color="info" onClick={loginWithRedirect}>{AUTH0}</Button>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

// export default withRouter(Logins);
export default Logins;