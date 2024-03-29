import { useState } from 'react';
import Button from '../../UI/Button';
import CharacterLIst from '../CharacterList/CharacterList';
import style from './list.module.scss';

const InfoList = ({ data, btnName }) => {
	const [isShown, setIsShown] = useState(false);

	const openAccordion = () => {
		setIsShown(prev => prev = !prev);
	};

	return (
		<div>
			<Button onClick={openAccordion} data-ac={isShown}
				className={`${style['character-btn']} ${!isShown ? '' : style['character-btn--active']}`}>
				{btnName}
			</Button>
			<CharacterLIst characters={data} show={isShown} />
		</div>
	);
};

export default InfoList;