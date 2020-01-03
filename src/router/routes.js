
import { routes as auth } from "../modules/auth";
import { routes as home } from "../pages/home";
import {routes as watchlist } from "../pages/watchlist";
import { routes as showSerie } from "../pages/show-serie";

export default [
    ...home
    ,...auth
    ,...watchlist
    ,...showSerie
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