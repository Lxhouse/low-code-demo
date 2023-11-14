import request, { ResDataType } from './request';

export async function getTestDate(): Promise<ResDataType> {
	const url = `/api/test`;
	const data = await request.get(url);
	return data as ResDataType;
}
