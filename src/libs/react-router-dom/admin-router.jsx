import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RootLayout } from "../../components/layouts";
import { getLocalToken, getSessionToken } from "../../utils";

/**
 * @component
 * @return {JSX.Element}
 * @description
 * - token의 유무에 따라 페이지이동이 일어나는 컴포넌트 입니다.
 * - token이 없으면 signin-page로 이동합니다.
 */

const AdminRoute = () => {
	const localToken = getLocalToken();
	const sessionToken = getSessionToken();
	const navigate = useNavigate();
	useEffect(() => {
		if (!localToken && !sessionToken) {
			navigate("/signin");
		}
	}, [localToken, sessionToken, navigate]);

	return <RootLayout />;
};
export default AdminRoute;
