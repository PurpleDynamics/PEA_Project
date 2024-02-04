import { Outlet } from "react-router-dom";

import { RecentProductList, Spacer } from "../commons";
import { Footer, Header } from ".";

const RootLayout = () => {
	return (
		<>
			<Header />
			<Spacer height={11} />
			<Outlet />
			<RecentProductList />
			<Footer />
		</>
	);
};
export default RootLayout;
