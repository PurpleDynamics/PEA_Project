import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { OverlayProvider } from "./contexts/overlay";
import { router } from "./libs/react-router-dom";
import GlobalStyles from "./libs/styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<OverlayProvider>
			<RouterProvider router={router} />
		</OverlayProvider>
	</React.StrictMode>
);
