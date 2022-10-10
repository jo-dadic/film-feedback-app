import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FormContextProvider } from "./store/formContext";

import "./index.css";
import "antd/dist/antd.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<BrowserRouter>
		<FormContextProvider>
			<App />
		</FormContextProvider>
	</BrowserRouter>
);
