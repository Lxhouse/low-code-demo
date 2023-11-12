import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/components/Home';
import TestPage from '@/components/TestPage';
import NotFound from '@/components/NotFound';
import QuestionLayout from '@/layouts/QuestionLayout';
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
			{
				path: '*', //404页面兜底
				element: <NotFound />,
			},
		],
	},
	{
		path: 'question/:id',
		element: <QuestionLayout />,
	},
]);

export default router;
