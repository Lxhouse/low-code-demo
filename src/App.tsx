import './App.css';
import { RouterProvider } from 'react-router-dom';
import useTitle from '@/hooks/useTitle';
import routerConfig from '@/router';
function App() {
	useTitle('啦啦啦');
	return <RouterProvider router={routerConfig} />;
}

export default App;
