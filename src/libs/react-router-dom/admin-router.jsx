import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { RootLayout } from "../../components/layouts";
import { getSessionToken, setSessionToken } from "../../libs/axios/auth";

/**
 * @component
 * @return {JSX.Element}
 * @description
 * - token의 유무에 따라 페이지이동이 일어나는 컴포넌트 입니다.
 * - token이 없으면 signin-page로 이동합니다.
 */

const AdminRoute = () => {
	// react-cookie 훅 사용
	const [cookies] = useCookies();
	const navigate = useNavigate();

	const sessionToken = getSessionToken();

	useEffect(() => {
		const fetchData = async () => {
			// 만약 쿠키에 refreshToken이 존재하면 세션 토큰 저장
			if (cookies.accessToken) {
				setSessionToken(cookies.accessToken);
			}

			// 업데이트된 세션 토큰 가져오기
			const updateSessionToken = getSessionToken();

			// signin 페이지로 이동하는 함수
			const redirectToSignin = async () => {
				// 세션 토큰이 없으면 signin 페이지로 이동
				if (!updateSessionToken) {
					navigate("/signin");
				}
				// 세션 토큰이 있고 refreshToken도 있는 경우, main 페이지로 이동
				if (updateSessionToken && cookies.refreshToken) {
					navigate("");
				}
			};
			// signin 페이지 이동 함수 호출
			redirectToSignin();
		};

		// fetchData 함수 호출
		fetchData();
	}, [cookies.refreshToken, sessionToken, navigate]);

	return <RootLayout />;
};
export default AdminRoute;
