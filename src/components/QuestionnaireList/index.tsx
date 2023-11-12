import React from 'react';
interface QuestionnaireListProps {}
const QuestionnaireList: React.FC<QuestionnaireListProps> = () => {
	// 假设 questionnaires 是包含问卷内容的数组
	const questionnaires = [
		{ id: 1, title: 'Questionnaire 1' },
		{ id: 2, title: 'Questionnaire 2' },
		// 添加更多问卷对象
	];

	return (
		<div>
			<h2>Questionnaire List</h2>
			<ul>
				{questionnaires.map((questionnaire) => (
					<li key={questionnaire.id}>{questionnaire.title}</li>
				))}
			</ul>
		</div>
	);
};

export default QuestionnaireList;
