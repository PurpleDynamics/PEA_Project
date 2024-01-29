import { useNavigate } from "react-router-dom";

import { RootLayout } from "../../components/layouts";

/**
 * @component
 * @return {JSX.Element}
 * @description
 * - token의 유무에 따라 페이지이동이 일어나는 컴포넌트 입니다.
 * - token이 없으면 signin-page로 이동합니다.
 */

const AdminRoute = () => {
	const auth = localStorage.getItem("token");
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth) navigate("/signin");
	}, [auth, navigate]);

	return (
		<>
			<RootLayout />
		</>
	);
};
export default AdminRoute;
