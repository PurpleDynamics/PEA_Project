import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { OverlayProvider } from "./contexts";
import { worker } from "./libs/msw/browser";
import { router } from "./libs/react-router-dom";
import GlobalStyles from "./libs/styled-components";

if (process.env.NODE_ENV === "development") {
	worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<OverlayProvider>
			<RouterProvider router={router} />
		</OverlayProvider>
	</React.StrictMode>
);
