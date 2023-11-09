import './App.css';
import ImmerDemoe from '@/component/ImmerDemo';
import useTitle from '@/hooks/useTitle';
function App() {
	useTitle('啦啦啦');
	return (
		<>
			<ImmerDemoe />
		</>
	);
}

export default App;
