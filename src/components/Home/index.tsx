import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { getTestDate } from '@/services/test';

interface propsType {}
const Home: FC<propsType> = () => {
	// const [name, setName] = useState('');
	const nav = useNavigate();
	const goQuestion = () => {
		nav('/question/12');
		// nav('test');
	};
	const { loading, data, run, refresh } = useRequest(getTestDate, { manual: true, debounceWait: 500, onSuccess: (res) => res });
	// useEffect(() => {
	// 	const getData = async () => {
	// 		const data = await getTestDate();
	// 		const { name = '' } = data || {};
	// 		setName(name);
	// 	};
	// 	getData();
	// }, []);
	return (
		<div>
			home页面
			<button onClick={goQuestion}>去问答页面</button>
			<div>请求回来的数据===》{loading ? 'loading...' : data?.name}</div>
			<br />
			<Link to={'/question/13?keyword=123321'}>带keyWord去问答页面</Link>
			<br />
			<Link to={'/test'}>去测试页面</Link>
			<button onClick={run}>手动请求</button>
			<button onClick={refresh}>重新请求</button>
		</div>
	);
};

export default Home;
