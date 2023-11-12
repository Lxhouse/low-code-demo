import { FC } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
interface propsType {}
const QuestionLayout: FC<propsType> = () => {
	const { id } = useParams();
	const [searchParams] = useSearchParams();
	console.log('searchParams.keyword', searchParams.get('keyword'));
	return (
		<div>
			这是问答页面页面 这是id-》{id}
			<div>这是keyword=》{searchParams.get('keyword') || ''}</div>
		</div>
	);
};

export default QuestionLayout;
