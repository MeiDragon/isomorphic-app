import React from 'react'
import path from 'path'
import express from 'express'

const app = express()
const port = 3001
import { render } from './render'

// 静态资源中间件
app.use(express.static(path.resolve(__dirname, '../build')))
app.use(express.static(path.resolve(__dirname, '../assets')))

app.get('/', (req, res) => {
	render(res)
})

app.listen(port, () => {
	console.log(`app listening on port ${port}`)
})
