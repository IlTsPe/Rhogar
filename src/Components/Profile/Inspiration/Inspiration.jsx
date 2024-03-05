import { useState } from 'react';
import Button from '../../UI/Button';
import style from './inspiration.module.scss';

const Inspiration = () => {
	const [inspiration, setInspiration] = useState(JSON.parse(localStorage.getItem('Inspiration')) || false);

	const inspirationHandle = () => {
		setInspiration(prev => !prev);
	};

	localStorage.setItem('Inspiration', JSON.stringify(inspiration));

	return (
		<div className={style['inspiration']}>
			<Button className={inspiration ? style['is-active'] : ''}
				onClick={inspirationHandle}>Вдохновение</Button>
		</div>
	);
};

export default Inspiration;