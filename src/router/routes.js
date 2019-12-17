
import { routes as auth } from "../modules/auth";
import { routes as home } from "../pages/home";

export default [
    ...home
    ,...auth
  ]

  // routes : [
  //   {
  //     name : '/',
  //     path: '/', 
  //     component : () => import("../pages/home/Home") 
  //   },
  //   {
  //     name : 'home',
  //     path: '/home', 
  //     component : () => import("../pages/home/Home") 
  //   },
  //   login
  // ]