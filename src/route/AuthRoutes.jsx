import Signin from '../auth/signin'
// Authentication
import Login from "../pages/authentication/login"
import LoginWithBgImage from "../pages/authentication/loginWithBgImage"
import LoginWithBgVideo from "../pages/authentication/loginWithBgVideo"
import LoginWithValidation from "../pages/authentication/loginwithValidation"
import Register from "../pages/authentication/register"
import RegisterWithBgImage from "../pages/authentication/registerWithBgImage"
import RegisterWithBgVideo from "../pages/authentication/registerWithBgVideo"
import UnlockUser from "../pages/authentication/unlockUser"
import Forgetpwd from "../pages/authentication/forgetpwd"
import Resetpwd from "../pages/authentication/resetpwd"

// Comming soo
import Comingsoon from "../pages/comingSoon/comingsoon"
import ComingsoonImg from "../pages/comingSoon/comingsoonImg"
import ComingsoonVideo from "../pages/comingSoon/comingsoonVideo"

// Maintenanc
import Maintenance from "../pages/maintenance"
import Error400 from '../pages/errors/error400'
import Error401 from '../pages/errors/error401'
import Error403 from '../pages/errors/error403'
import Error404 from '../pages/errors/error404'
import Error500 from '../pages/errors/error500'
import Error503 from '../pages/errors/error503'

export const authRoutes = [
  { path: `${process.env.PUBLIC_URL}/login`, Component: <Signin /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/login`, Component: <Login /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg1`, Component: <LoginWithBgImage /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg2`, Component: <LoginWithBgVideo /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithValidation`, Component: <LoginWithValidation /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/signup`, Component: <Register /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/signupWithImg1`, Component: <RegisterWithBgImage /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/signupWithImg2`, Component: <RegisterWithBgVideo /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/forgetPwd`, Component: <Forgetpwd /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/unlockUser`, Component: <UnlockUser /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/resetPwd`, Component: <Resetpwd /> },

  //Coming-soon
  { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoon`, Component: <Comingsoon /> },
  { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonImg`, Component: <ComingsoonImg /> },
  { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonVideo`, Component: <ComingsoonVideo /> },

  { path: `${process.env.PUBLIC_URL}/pages/maintenance`, Component: <Maintenance /> },

  //Error
  { path: `${process.env.PUBLIC_URL}/pages/errors/error400`, Component: <Error400 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error401`, Component: <Error401 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error403`, Component: <Error403 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error404`, Component: <Error404 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error500`, Component: <Error500 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error503`, Component: <Error503 /> },
];
