import { useState } from 'react';
import FightList from './FightList';
import style from './fight.module.scss';

const attackData = [
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
]
const berserkData = [
	{
		name: 'Убийца великанов',
		bonus: 8,
		type: '4к6 + 7/руб.',
		descr: 'При каждом попадании через врага проходит молния. Спасбросок силы: 15, чтобы не упасть.'
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
]

const Fight = () => {
	const [isBerserk, setIsBerserk] = useState();

	const fury = () => {
		localStorage.setItem('Berserk', isBerserk);
		setIsBerserk(prev => prev = !prev)
	};

	return (
		<div className={style.fight}>
			{
				isBerserk ?
					<label htmlFor='input' className={style['berserk-on']}>Выйти из ярости</label> :
					<label htmlFor='input' className={style['berserk-off']}>Войти в ярость</label>
			}
			<input id='input' type='checkbox' onChange={fury} checked={isBerserk} />
			<FightList attackData={attackData} berserk={berserkData} isBerserk={isBerserk} />
		</div>
	);
}

export default Fight;