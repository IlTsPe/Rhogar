import style from './characters.module.scss';
import Button from '../UI/Button';

const characters = {
	name: 'Рхогар',
	level: 8,
	cooldown: 13,
	speed: 40,
}

const Characters = ({ onClick }) => {
	return (
		<div className={style.characters}>
			<h1>{characters.name}</h1>
			<p>Уровень: <span>{characters.level}</span></p>
			<p>КД: <span>{characters.cooldown}</span></p>
			<p>Шаг: <span>{characters.speed}</span></p>
			<Button>
				<svg viewBox="0 0 24 24" fill='none' onClick={onClick}>
					<path d="M12 11V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<circle cx="12" cy="7.5" r="1" fill="#000000" />
				</svg>
			</Button>
		</div>
	);
}

export default Characters;