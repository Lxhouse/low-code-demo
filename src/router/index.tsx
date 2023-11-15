import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/components/Home';
import TestPage from '@/components/TestPage';
import NotFound from '@/components/NotFound';
import QuestionLayout from '@/layouts/QuestionLayout';
import ScrollEvent from '@/components/ScrollEvent';
import CountReduxDemo from '@/components/CountReduxDemo';
import TodoDemo from '@/components/TodoDemo';
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
	{
		path: 'scrollEvent',
		element: <ScrollEvent />,
	},
	{
		path: 'countReduxDemo',
		element: <CountReduxDemo />,
	},
	{
		path: 'todoDemo',
		element: <TodoDemo />,
	},
]);

export default router;
