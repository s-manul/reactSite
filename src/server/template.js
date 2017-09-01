export default ({ markup, helmet }) => {
    return `<!doctype html>
<html>
<head>
    ${helmet.title.toString()}
	${helmet.meta.toString()}
	${helmet.link.toString()}
</head>
<body>
	<div id="app">
	    <div>${markup}</div>
    </div>
	<script src="/build/bundle.js" async></script>
</body>
</html>`;
};