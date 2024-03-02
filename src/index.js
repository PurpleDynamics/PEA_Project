import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

import { MessageProvider } from "./components/overlay/chatting/message-context";
import { OverlayProvider } from "./contexts";
// import { worker } from "./libs/msw/browser";
import { router } from "./libs/react-router-dom";
import GlobalStyles from "./libs/styled-components";

// if (process.env.NODE_ENV === "development") {
// 	worker.start();
// }

/**
 * react-query 로 관리할 모든 요청, 응답과 상호작용하는 객체
 * 데이터 캐싱 및 접근 등과 관려된 유용한 메서드 제공
 */
const queryClient = new QueryClient({
	defaultOptions: {
		// 옵션 기본값 지정
		staleTime: 1000 * 60 * 60 * 6, // 유통시간: 6시간
		cacheTime: 1000 * 60 * 60 * 12, // 페기시간: 12시간
		refetchOnMount: false, // 페이지 이동 후 복귀 시, refetching 여부
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<MessageProvider>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<OverlayProvider>
					<RouterProvider router={router} />
				</OverlayProvider>
			</QueryClientProvider>
		</MessageProvider>
	</React.StrictMode>
);
