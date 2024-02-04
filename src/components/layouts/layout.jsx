import { Outlet } from "react-router-dom";

import { RecentProductList, Spacer } from "../commons";
import { Footer, Header } from ".";

const RootLayout = () => {
	return (
		<>
			<Header />
			<Spacer size={110} axis="vertical" />
			<Outlet />
			<RecentProductList />
			<Footer />
		</>
	);
};
export default RootLayout;
