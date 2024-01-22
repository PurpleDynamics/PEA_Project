import RootLayout from "../../layouts/layout";
import ChatPage from "../../pages/chat/chat-page";
import MainPage from "../../pages/main/main-page";
import MyPage from "../../pages/my-page/my-page";
import DetailProductPage from "../../pages/products/detail-product/ditail-product-page";
import PostProductPage from "../../pages/products/post-product/post-product-page";
import UsedProductPage from "../../pages/products/used-product/used-product-page";
import SignInPage from "../../pages/sign/signin-page";
import SignUpPage from "../../pages/sign/signup-page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <MainPage />,
			},
			{
				path: "/SignInPage",
				element: <SignInPage />,
			},
			{
				path: "/SignUpPage",
				element: <SignUpPage />,
			},
			{
				path: "/DeialProductPage",
				element: <DetailProductPage />,
			},
			{
				path: "/PostProductPage",
				element: <PostProductPage />,
			},
			{
				path: "/UserdProductPage",
				element: <UsedProductPage />,
			},
			{
				path: "/MyPage",
				element: <MyPage />,
			},
			{
				path: "/ChatPage",
				element: <ChatPage />,
			},
		],
	},
]);
export default router;
