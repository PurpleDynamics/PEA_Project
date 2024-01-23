import {
	DetailProductPage,
	MyInfoPage,
	ProductListPage,
	RegisterProductPage,
	SigninPage,
	SignupPage,
	UsedProductPage,
} from "../../pages/index";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <ProductListPage />,
			},
			{
				path: "/signin",
				element: <SigninPage />,
			},
			{
				path: "/signup",
				element: <SignupPage />,
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
		],
	},
]);
export default router;
