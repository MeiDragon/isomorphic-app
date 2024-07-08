import React, { Suspense, lazy } from 'react'
import HTML from './HTML'
import Head from './components/Head'
import Loading from './components/Loading'

const SideBar = lazy(
	() => import('./components/SideBar' /* webpackPrefetch: true */)
)
const Main = lazy(() => import('./components/Main' /* webpackPrefetch: true */))
const Extra = lazy(
	() => import('./components/Extra' /* webpackPrefetch: true */)
)

export default function App(props) {
	return (
		<HTML>
			<Head />
			<Suspense fallback={<Loading />}>
				<SideBar />
				<Suspense fallback={<Loading />}>
					<Main />
					<Suspense fallback={<Loading />}>
						<Extra />
					</Suspense>
				</Suspense>
			</Suspense>
		</HTML>
	)
}
