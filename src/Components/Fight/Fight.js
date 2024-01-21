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
		descr: 'кд - 1 кор. отд., спас бросок телосложения: 14'
	},
]

const Fight = () => {
	return (
		<div className={style.fight}>
			<h2>Урон</h2>
			<FightList attackData={attackData} />
		</div>
	);
}

export default Fight;