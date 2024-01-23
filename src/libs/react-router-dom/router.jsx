
import { ProductListPage, MyInfo, DetailProductPage, RegisterProductPage, UsedProductPage } from './pages';


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
				element: <SignInPage />,
			},
			{
				path: "/signup",
				element: <SignUpPage />,
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
				element: <MyInfo />,
			},
		],
	},
]);
export default router;
