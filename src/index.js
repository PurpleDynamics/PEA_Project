import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { worker } from "./libs/msw";
import router from "./libs/react-router-dom/router";
import GlobalStyles from "./libs/styled-components";

if (process.env.NODE_ENV === "development") {
	worker.start();
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<RouterProvider router={router} />
	</React.StrictMode>
);
