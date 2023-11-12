import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface propsType {}
const Home: FC<propsType> = () => {
	const nav = useNavigate();
	const goQuestion = () => {
		nav('/question/12');
		// nav('test');
	};
	return (
		<div>
			home页面
			<button onClick={goQuestion}>去问答页面</button>
			<br />
			<Link to={'/question/13?keyword=123321'}>带keyWord去问答页面</Link>
			<br />
			<Link to={'/test'}>去测试页面</Link>
		</div>
	);
};

export default Home;
