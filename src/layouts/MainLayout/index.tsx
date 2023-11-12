import { FC } from 'react';
import { Outlet } from 'react-router-dom';
interface propsType {}
const MainLayout: FC<propsType> = () => {
	return (
		<div>
			这是主页面
			<div>下面这个是Outlet组件内容</div>
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;
