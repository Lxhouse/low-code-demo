import axios from 'axios';
import { message } from 'antd';
/** 配置等待时间 */
const instance = axios.create({
	timeout: 10 * 1000,
});

instance.interceptors.response.use((res) => {
	const resData = (res.data || {}) as ResType;
	const { errno, data = {}, msg } = resData;
	/** 约定 */
	if (errno !== 0) {
		msg && message.error(msg);
		throw new Error(msg);
	}
	return data as any;
});

export default instance;

export type ResType = {
	errno: number;
	data?: ResDataType;
	msg?: string;
};

export type ResDataType = {
	[key: string]: any;
};
