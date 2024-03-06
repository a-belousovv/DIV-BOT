import ReactDOM from 'react-dom/client'
import './assets/main.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage.tsx'
import SecurityPage from './pages/SecurityPage.tsx'
import Contract from './pages/Contract.tsx'
import Order from './pages/Order.tsx'
import OrderHelp from './pages/Order-Help.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/security',
		element: <SecurityPage />,
	},
	{
		path: '/public-contract',
		element: <Contract />,
	},
	{
		path: '/order',
		element: <Order />,
	},
	{
		path: '/order-help',
		element: <OrderHelp />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
