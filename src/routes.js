import HomePage from "./pages/HomePage/HomePage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
import ProductEditPage from "./pages/ProductEditPage/ProductEditPage";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/product",
    exact: true,
    main: () => <ProductListPage />,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <ProductActionPage history={history} />,
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ match, history }) => (
      <ProductEditPage match={match} history={history} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];
export default routes;
