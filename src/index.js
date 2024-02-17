import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

import { OverlayProvider } from "./contexts";
import { worker } from "./libs/msw/browser";
import { router } from "./libs/react-router-dom";
import GlobalStyles from "./libs/styled-components";

if (process.env.NODE_ENV === "development") {
	worker.start();
}

const queryClient = new QueryClient({
	defaultOptions: {
		staleTime: 1000 * 60 * 60 * 6, // 유통시간: 6시간
		cacheTime: 1000 * 60 * 60 * 12, // 페기시간: 12시간
		refetchOnMount: false, // 페이지 이동 후 복귀 시, refetching 여부
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<GlobalStyles />
			<OverlayProvider>
				<RouterProvider router={router} />
			</OverlayProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
