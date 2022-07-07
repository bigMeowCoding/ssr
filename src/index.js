const express = require("express");
const { renderToString } = require("react-dom/server");
import Home from "./containers/home";
import React from "react";
import proxy from "express-http-proxy";
const app = express();
app.use(express.static("public"));
const content = renderToString(<Home />);
app.use(
  "/api3",
  proxy("http://localhost:8888", {
    proxyReqPathResolver: function (req) {
        console.log('req====url',req.url)
      return req.url
    },
  })
);
app.get("/", (req, res) => {
  res.send(`<html>
			<head>
				<title>hello</title>
			</head>
			<body>
			<div id="root">
			    ${content}
			</div>
			<script  src="/index.js"></script>
			</body>
  	</html>`);
});
app.listen(3000);
