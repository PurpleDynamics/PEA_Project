const { default: RootLayout } = require("../../layouts/layout");
const { default: ChatPage } = require("../../pages/chat/chat-page");
const { default: MainPage } = require("../../pages/main/main-page");
const { default: MyPage } = require("../../pages/my-page/my-page");
const {
	default: DetailProductPage,
} = require("../../pages/products/detail-product/ditail-product-page");
const {
	default: PostProductPage,
} = require("../../pages/products/post-product/post-product-page");
const {
	default: UsedProductPage,
} = require("../../pages/products/used-product/used-product-page");
const { default: SignInPage } = require("../../pages/sign/signin-page");
const { default: SignUpPage } = require("../../pages/sign/signup-page");

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
