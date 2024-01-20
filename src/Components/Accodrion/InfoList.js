import { useState } from 'react';
import style from './list.module.scss';
import Section from '../UI/Section';
import Button from '../UI/Button'

const characterData = [
	{
		parameter: 'Сила',
		value: 18,
		modifier: '+4'
	},
	{
		parameter: 'Ловкость',
		value: 13,
		modifier: '+1'
	},
	{
		parameter: 'Выносливость',
		value: 16,
		modifier: '+3'
	},
	{
		parameter: 'Интеллект',
		value: 8,
		modifier: '-1'
	},
	{
		parameter: 'Мудрость',
		value: 10,
		modifier: '0'
	},
	{
		parameter: 'Харизма',
		value: 4,
		modifier: '+2'
	}
]

const InfoList = () => {
	const [isShown, setIsShown] = useState(false);

	const openAccordion = () => {
		setIsShown(prev => prev = !prev)
	};

	return (
		<Section className={style['list-wrapper']}>
			<Button onClick={openAccordion} className={`${style['character-btn']} ${!isShown ? '' : style['character-btn--active']}`}>Характеристики</Button>
			<ul className={`${style.list} ${isShown ? '' : style['list-hide']}`}>
				{
					characterData.map(item => (
						<li className={style['main-character']}>
							<div>
								<h4>{item.parameter}</h4>
								<p>{item.value}</p>
								<span data-counter={item.modifier}></span>
							</div>
						</li>
					))
				}
			</ul>
		</Section >
	);
}

export default InfoList;