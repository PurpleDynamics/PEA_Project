import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

/**
 * @component
 * @return {JSX.Element}
 * @description
 * - access_token의 유무에 따라 페이지이동이 일어나는 컴포넌트 입니다.
 * - access_token이 없으면 signin-page로 이동합니다.
 */

const AdminRoute = () => {
	const auth = localStorage.getItem("access_token");
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth) navigate("/signin");
	}, [auth, navigate]);

	return <Outlet />;
};
export default AdminRoute;
