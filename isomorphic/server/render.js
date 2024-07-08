import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import App from '../client/App.tsx'

export const render = (res) => {
	const { pipe } = renderToPipeableStream(<App />, {
		bootstrapScripts: ['client.bundle.js'], // hydration，激活、水合
		onShellReady() {
			res.setHeader('content-type', 'text/html')
			pipe(res)
		}
	})
}
