import React from 'react'
import path from 'path'
import express from 'express'
import { renderToPipeableStream } from 'react-dom/server'
import App from './src/App'
const app = express()
const port = 3000

// 静态资源中间件
app.use(express.static(path.join(__dirname, './dist')))

// 请求HTML
app.get('/', (req, res) => {
	const { pipe } = renderToPipeableStream(<App />, {
		bootstrapScripts: ['/dist/bundle.js'], // hydration，激活、水合
		onShellReady() {
			res.setHeader('content-type', 'text/html')
			pipe(res)
		}
	})
})
// 请求JS文件
app.get('/dist/bundle.js', (req, res) => {
	res.sendFile(path.join(__dirname, './bundle.js'))
})
app.get('/dist/main.css', (req, res) => {
	res.sendFile(path.join(__dirname, './main.css'))
})

app.listen(port, () => {
	console.log(`app listening on port ${port}`)
})
