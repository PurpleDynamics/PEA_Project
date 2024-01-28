import { Outlet } from "react-router-dom";

import { Footer, Header } from ".";
const RootLayout = () => {
	const auth = localStorage.getItem("access_token");

	return (
		<>
			{auth ? (
				<>
					<Header />
					<Outlet />
					<Footer />
				</>
			) : (
				<Outlet />
			)}
		</>
	);
};
export default RootLayout;
