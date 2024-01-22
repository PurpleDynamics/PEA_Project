import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyles from "./libs/styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>
);
