import { createBrowserRouter } from "react-router-dom";

import {
	DetailProductPage,
	MyInfoPage,
	NotFoundPage,
	ProductListPage,
	RegisterProductPage,
	SigninPage,
	SignupPage,
	UsedProductPage,
} from "../../pages";
import { AdminRoute } from "./";

/**
 * @router
 * @returns {JSX.Element}
 *
 * @description
 * - token이 있는 사용자는 productlistpage로 이동
 * - token이 없는 사용자는 signin page로 이동하는
 * - router 입니다.
 */

const ADMIN_ROUTER = {
	element: <AdminRoute />,
	children: [
		{
			path: "",
			element: <ProductListPage />,
		},

		{
			path: "/detail-product",
			element: <DetailProductPage />,
		},
		{
			path: "/register-product",
			element: <RegisterProductPage />,
		},
		{
			path: "/used-product",
			element: <UsedProductPage />,
		},
		{
			path: "/my-info",
			element: <MyInfoPage />,
		},
		{
			path: "/*",
			element: <NotFoundPage />,
		},
	],
};

const PUBLIC_ROUTER = [
	{
		path: "/signin",
		element: <SigninPage />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
	{
		path: "/*",
		element: <NotFoundPage />,
	},
];

const router = createBrowserRouter([
	{
		children: [...PUBLIC_ROUTER, ADMIN_ROUTER],
	},
]);

export default router;
