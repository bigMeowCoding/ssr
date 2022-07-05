const express = require("express");
const { renderToString } = require("react-dom/server");
import Home from "./containers/home";
import React from "react";
const app = express();

const content = renderToString(<Home />);
app.get("/", (req, res) => {
  res.send(`<html>
			<head>
				<title>hello</title>
			</head>
			<body>
			${content}
			</body>
  	</html>`);
});
app.listen(3000);
