import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.less';

interface QuestionnaireListProps {}

const ScrollEvent: React.FC<QuestionnaireListProps> = () => {
	const loadingMoreRef = useRef<HTMLDivElement>(null);
	const exampleList = new Array(1000).fill({ name: 'lalalal' });

	const [page, setPage] = useState(0);
	const [demoList, setDemoList] = useState<{ name: string }[]>([]);

	const addData = () => {
		const elem = loadingMoreRef.current;

		if (!elem) return;

		const domRect = elem.getBoundingClientRect();

		if (!domRect) return;

		const { top, bottom } = domRect;

		if (top < window.innerHeight && bottom > 0) {
			setTimeout(() => {
				setPage((prevPage) => prevPage + 1);
			}, 1000);
		}
	};

	useEffect(() => {
		const handleScroll = () => addData();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [page]);

	useEffect(() => {
		setDemoList((prevDemoList) => prevDemoList.concat(exampleList.slice(page * 6, (page + 1) * 6)));
	}, [page]);

	return (
		<div>
			{demoList.map((e, index) => (
				<div className={styles.examWarp} key={index}>{`${e?.name} ${index}`}</div>
			))}
			<div ref={loadingMoreRef} className={styles.loadingMore} id="lookMore">
				加载更多
			</div>
		</div>
	);
};

export default ScrollEvent;
