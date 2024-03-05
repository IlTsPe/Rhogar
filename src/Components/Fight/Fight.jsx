import { useState } from 'react';
import FightList from './FightList/FightList';
import Section from '../UI/Section';
import style from './fight.module.scss';

const ATTACK_DATA = [
	{
		name: 'Двуручный меч',
		bonus: 8,
		type: '2к6 + 5/руб.',
		descr: 'До 5 ф.'
	},
	{
		name: 'Топор',
		bonus: 4,
		type: '1к6 + 1/руб.',
		descr: '20 ф., до 60 ф. с помехой'
	},
	{
		name: 'Дыхание дракона (действ.)',
		bonus: 4,
		type: '3к6 (50% если сп. б.)',
		descr: 'КД - 1 кор. отд.. Спас бросок телосложения: 14. Конус 15 фт.'
	},
	{
		name: 'Меч \'Убийца Великанов\'',
		bonus: 8,
		type: '4к6 + 5/руб.',
		descr: 'При каждом попадании через врага проходит молния. Спасбросок силы: 15, чтобы не упасть.'
	}
];

const BERSERK_DATA = [
	{
		name: 'Двуручный меч',
		bonus: 8,
		type: '2к6 + 7/руб. (3 атаки)',
		descr: 'До 5 ф.'
	},
	{
		name: 'Топор',
		bonus: 4,
		type: '1к6 + 3/руб.',
		descr: '20 ф., до 60 ф. с помехой'
	},
	{
		name: 'Дыхание дракона (действ.)',
		bonus: 4,
		type: '3к6 (50% если сп. б.)',
		descr: 'КД - 1 кор. отд.. Спас бросок телосложения: 14. Конус 15 фт.'
	},
	{
		name: 'Меч \'Убийца Великанов\'',
		bonus: 8,
		type: '4к6 + 7/руб. (3 атаки)',
		descr: 'При каждом попадании через врага проходит молния. Спасбросок силы: 15, чтобы не упасть.'
	}
];

const Fight = () => {
	const [isBerserk, setIsBerserk] = useState(JSON.parse(localStorage.getItem('Berserk')) || false);

	const furyHandle = () => setIsBerserk(prev => !prev);

	localStorage.setItem('Berserk', JSON.stringify(isBerserk));

	return (
		<Section className={style.fight}>
			{
				isBerserk ?
					<label htmlFor='input' className={style['berserk-on']}>Выйти из ярости</label> :
					<label htmlFor='input' className={style['berserk-off']}>Войти в ярость</label>
			}
			<input id='input' type='checkbox' onChange={furyHandle} checked={isBerserk} />
			<FightList attackData={ATTACK_DATA} berserk={BERSERK_DATA} isBerserk={isBerserk} />
		</Section>
	);
};

export default Fight;