import CategoryTab from "../components/Tab/CategoryTab";
import Carousel from "../components/common/Carousel";
import Home from "../layouts/Home";
import Detail from "../layouts/Detail";
import Category from "../layouts/Category";
import LatestNews from "../components/common/LatestNews";
import Box_1 from "../components/common/items/Box_1";
import Box_2 from "../components/common/items/Box_2";
import Box_3 from "../components/common/items/Box_3";
import Box_4 from "../components/common/items/Box_4";
import Box_5 from "../components/common/items/Box_5";
import Box_6 from "../components/common/items/Box_6";
import Box_7 from "../components/common/items/Box_7";
import Box_Videos from "../components/common/items/Box_Videos";

// route để điều hướng load SSR
const SSRRoutes = [
    {
        path: "/",
        name: "Carousel",
        component: Carousel,
        exact: true
    },
    {
        path: "/",
        name: "Category Tab",
        component: CategoryTab,
        exact: true
    },
    {
        path: "/",
        name: "Latest News",
        component: LatestNews,
        exact: true
    },
    {
        path: "/",
        name: "Box 1",
        component: Box_1,
        exact: true
    },
    {
        path: "/",
        name: "Box 2",
        component: Box_2,
        exact: true
    },
    {
        path: "/",
        name: "Box 3",
        component: Box_3,
        exact: true
    },
    {
        path: "/",
        name: "Box 4",
        component: Box_4,
        exact: true
    },
    {
        path: "/",
        name: "Box 5",
        component: Box_5,
        exact: true
    },
    {
        path: "/",
        name: "Box 6",
        component: Box_6,
        exact: true
    },
    {
        path: "/",
        name: "Box 7",
        component: Box_7,
        exact: true
    },
    {
        path: "/",
        name: "Box Videos",
        component: Box_Videos,
        exact: true
    }
];

// route diều hướng Client

const indexRoutes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        exact: true
    },
    {
        path: "/tin-tuc/:metaKey",
        name: "Detail",
        component: Detail,
        exact: true
    },
    {
        path: "/loai-tin-tuc/:keyCategory",
        name: "Category",
        component: Category,
        exact: true
    }
]

export {SSRRoutes, indexRoutes};