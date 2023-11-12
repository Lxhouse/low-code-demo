import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/components/Home';
import TestPage from '@/components/TestPage';
const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'test',
				element: <TestPage />,
			},
		],
	},
]);

export default router;
