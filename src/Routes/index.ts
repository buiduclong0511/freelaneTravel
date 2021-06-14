import { 
    Login, 
    Home, 
    Term, 
    ForgotPassword,
    SearchResult,
    DetailTour,
    ChoseDate,
    CheckAvailability,
    Cart,
    Booking
} from "@pages";
import { IRoute } from "@interfaces";

export const PATH_HOME = "/";

export const PATH_LOGIN = "/login";
export const PATH_TERM = "/term";
export const PATH_FORGOT_PASSWORD = "/forgot-password";
export const PATH_SEARCH_RESULT = "/search-result";
export const PATH_DETAIL_TOUR = "/detail-tour";
export const PATH_CHOSE_DATE = "/chose-date";
export const PATH_CHECK_AVAILABILITY = "/check-availability";
export const PATH_CART = "/cart";
export const PATH_BOOKING = "/booking";

export const route: Array<IRoute> = [
    { path: PATH_HOME, component: Home, exact: true },
    { path: PATH_SEARCH_RESULT, component: SearchResult, exact: true },
    { path: PATH_DETAIL_TOUR, component: DetailTour, exact: true },
    { path: PATH_CHOSE_DATE, component: ChoseDate, exact: true },
    { path: PATH_CHECK_AVAILABILITY, component: CheckAvailability, exact: true },
    { path: PATH_CART, component: Cart, exact: true },
    { path: PATH_BOOKING, component: Booking, exact: true },
];

export const auth_route: Array<IRoute> = [
    { path: PATH_LOGIN, component: Login, exact: true },
    { path: PATH_TERM, component: Term, exact: true },
    { path: PATH_FORGOT_PASSWORD, component: ForgotPassword, exact: true },
];

