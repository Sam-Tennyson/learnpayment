import { ROUTE_CONSTANTS } from "../Shared/Routes";
import About from "../Views/PublicView/About";
import Dashboard from "../Views/PublicView/Dashboard";
import Home from "../Views/PublicView/Home";
import Team from "../Views/PublicView/Team";

export const PublicRoute = [
    {
        path: ROUTE_CONSTANTS.DASHBOARD,
        element: <Dashboard />,
        title: "Dashboard",
    },
    {
        path: ROUTE_CONSTANTS.TEAM,
        element: <Team />,
        title: "Team",
    },
    {
        path: ROUTE_CONSTANTS.ABOUT,
        element: <About />,
        title: "Team",
    },
    {
        path: ROUTE_CONSTANTS.HOME,
        element: <Home />,
        title: "Team",
    },
]

