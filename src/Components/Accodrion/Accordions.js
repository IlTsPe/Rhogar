import InfoList from './InfoList/InfoList.js';
import Section from '../UI/Section.js';
import style from './accordion.module.scss';

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
		parameter: 'Мудрость (+ пассивная)',
		value: 10,
		modifier: '0'
	},
	{
		parameter: 'Харизма',
		value: 4,
		modifier: '+2'
	},
	{
		parameter: 'Бонус умения',
		value: 3,
	},
]
const savingThrow = [
	{
		parameter: 'Сила',
		value: '7',
		modifier: '❄'
	},
	{
		parameter: 'Ловкость',
		value: '1'
	},
	{
		parameter: 'Выносливость',
		value: '6',
		modifier: '❄'
	},
	{
		parameter: 'Интеллект',
		value: '-1'
	},
	{
		parameter: 'Мудрость',
		value: '0'
	},
	{
		parameter: 'Харизма',
		value: '1'
	},

]
const abilities = [
	{
		parameter: 'Акробатика (лов)',
		value: '1',
	},
	{
		parameter: 'Атлетика (сил)',
		value: '6',
		modifier: '❄'
	},
	{
		parameter: 'Внимание (мдр)',
		value: '0',
	},
	{
		parameter: 'Выживание (мдр)',
		value: '0',
	},
	{
		parameter: 'Дрессировка (мдр)',
		value: '0',
	},
	{
		parameter: 'Запугивание (хар)',
		value: '5',
	},
	{
		parameter: 'Исполнение (хар)',
		value: '2',
	},
	{
		parameter: 'История (инт)',
		value: '-1',
	},
	{
		parameter: 'Ловкость рук (лвк)',
		value: '4',
		modifier: '❄'
	},
	{
		parameter: 'Магия (инт)',
		value: '-1',
	},
	{
		parameter: 'Медицина (мдр)',
		value: '3',
		modifier: '❄'
	},
	{
		parameter: 'Обман (хар)',
		value: '2',
	},
	{
		parameter: 'Природа (инт)',
		value: '-1',
	},
	{
		parameter: 'Проницательность (мдр)',
		value: '0',
	},
	{
		parameter: 'Расследование (инт)',
		value: '-1',
	},
	{
		parameter: 'Религия (инт)',
		value: '2',
		modifier: '❄'
	},
	{
		parameter: 'Скрытность (лвк)',
		value: '1',
	},
	{
		parameter: 'Убеждение (хар)',
		value: '2',
	},
]


const Accordions = () => {
	return (
		<Section className={style['list-wrapper']}>
			<InfoList data={characterData} btnName={'Характеристики'} />
			<InfoList data={savingThrow} btnName={'Спаcбросок'} />
			<InfoList data={abilities} btnName={'Навыки'} />
		</Section >

	);
}

export default Accordions;