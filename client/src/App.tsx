import Home from './components/Home'
import './styles/app.scss'
export default function App(props) {
	const handleClick = () => {
		alert('clicked')
	}
	return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>My app</title>
			</head>
			<body>
				<div>Hello React</div>
				<Home />
				<div className="btn" onClick={handleClick}>
					Click Me
				</div>
			</body>
		</html>
	)
}
