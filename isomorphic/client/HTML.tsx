import React from 'react'
export default function HTML(props) {
	const { children } = props
	return (
		<html>
			<head>
				<link rel="stylesheet" href="styles/index.css"></link>
			</head>
			<body>
				<div id="root">{children}</div>
			</body>
		</html>
	)
}
