
import { routes as auth } from "../modules/auth";
import { routes as home } from "../pages/home";
import {routes as watchlist } from "../pages/watchlist";
import { routes as showSerie } from "../pages/show-serie";
import { routes as Series } from "../pages/series"

export default [
    ...home
    ,...auth
    ,...watchlist
    ,...showSerie
    ,...Series
  ]