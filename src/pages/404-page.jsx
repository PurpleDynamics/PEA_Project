import { Button } from "../components/commons";

/**
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * - 지정된 경로가 아닌 모든 페이지에서 나오는 404 error page 입니다.
 */

const NotFoundPage = () => {
	return (
		<>
			<h1>현재 페이지를 표시할 수 없습니다</h1>

			<img src="https://url.kr/v2yi6l" />

			<h3>잠시 후 다시 시도해 주세요</h3>
			<Button palette="cyan">홈으로</Button>
		</>
	);
};
export default NotFoundPage;
