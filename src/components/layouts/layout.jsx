import { Outlet } from "react-router-dom";

import { Spacer } from "../commons";
import { Footer, Header } from ".";

const RootLayout = () => {
	return (
		<>
			<Header />
			<Spacer size={110} axis="vertical" />
			<Outlet />
			<Footer />
		</>
	);
};
export default RootLayout;
