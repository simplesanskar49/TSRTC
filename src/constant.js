import Home from './components/Home';
import PATHS_ROUTES from './routing';
import { 
    AdminHome,
    FetchBalance,
    CreateBank,
    CreateGroup,
    CreateUser,
    ViewBank,
    ViewGroup,
    ViewTransactions,
    SearchByDate,
    FetchHistory,
    SearchAuditByDate,
    Login,
    Checkbalance,
    Viewuser,
    Updateuser,
    Forgotpassword,
    RewardHistory,
    Nav,
    Logout,
  } from './components';

const ROUTE_PATHS = Object.freeze({
    routes: [
        {
            path: PATHS_ROUTES.HOME,
            component: <Home />,
        },
        {
            path: PATHS_ROUTES.ADMIN_HOME,
            component: <AdminHome />,
        },
        {
            path: PATHS_ROUTES.FETCH_BALANCE,
            component: <FetchBalance/>,
        },
        {
            path: PATHS_ROUTES.CREATE_BANK,
            component: <CreateBank/>,
        },
        {
            path: PATHS_ROUTES.CREATE_GROUP,
            component: <CreateGroup/>,
        },
        {
            path: PATHS_ROUTES.CREATE_USER,
            component: <CreateUser/>,
        },
        {
            path: PATHS_ROUTES.VIEW_BANK,
            component: <ViewBank/>,
        },
        {
            path: PATHS_ROUTES.VIEW_GROUP,
            component: <ViewGroup/>,
        },
        {
            path: PATHS_ROUTES.VIEW_TRANSACTION,
            component: <ViewTransactions/>,
        },
        {
            path: PATHS_ROUTES.SEARCH_AUDIT_BY_DATE,
            component: <SearchAuditByDate/>,
        },
        {
            path: PATHS_ROUTES.SEARCH_BY_DATE,
            component: <SearchByDate/>,
        },
        {
            path: PATHS_ROUTES.FETCH_HISTORY,
            component: <FetchHistory/>,
        },
        {
            path: PATHS_ROUTES.LOGIN,
            component: <Login/>,
        },
        {
            path: PATHS_ROUTES.CHECK_BALANCE,
            component: <Checkbalance />,
        },
        {
            path: PATHS_ROUTES.VIEW_USER,
            component: <Viewuser/>,
        },
        {
            path: PATHS_ROUTES.UPDATE_USER,
            component: <Updateuser/>,
        },
        {
            path: PATHS_ROUTES.FORGOT_PASSWORD,
            component: <Forgotpassword/>,
        },
        {
            path: PATHS_ROUTES.REWARD_HISTORY,
            component: <RewardHistory/>,
        },
        {
            path: PATHS_ROUTES.NAV,
            component: <Nav/>,
        },
        {
            path: PATHS_ROUTES.LOGOUT,
            component: <Logout/>,
        },
    ]
});

export default ROUTE_PATHS;