import { useRef, useState } from 'react';
import Button from '../UI/Button';
import style from './hp.module.scss';
import Section from '../UI/Section';
import DeathChallenge from '../DeathChallenge/DeathChallenge';

const MAXHP = 74;

const HP = () => {
	const damageOrHealRef = useRef();
	const [currentHP, setСurrentHP] = useState(JSON.parse(localStorage.getItem('HealPoints')) ?? MAXHP);
	const [value, setValue] = useState('minus');

	const percentage = Math.round((currentHP * 100) / MAXHP);

	const calculation = (e) => {
		setValue(e.target.value);
	};

	const classesForHealthLine = () => {
		if (percentage >= 80) return 'green';
		if (percentage >= 65 && percentage < 80) return 'light-green';
		if (percentage >= 40 && percentage < 65) return 'yellow';
		if (percentage >= 25 && percentage < 40) return 'orange';
		if (percentage > 0 && percentage < 25) return 'red';
	};

	const submit = () => {
		let newHP;

		if (value === 'plus') {
			newHP = currentHP + +damageOrHealRef.current.value;
			setСurrentHP(newHP);
		}
		if (value === 'minus') {
			newHP = currentHP - +damageOrHealRef.current.value;
			setСurrentHP(newHP);
		}
		if (newHP > MAXHP) {
			setСurrentHP(MAXHP);
			newHP = MAXHP;
		}
		if (newHP <= 0) {
			alert('Приляг и отдохни');
			newHP = 0;
			setСurrentHP(newHP);
		}
		classesForHealthLine();
		damageOrHealRef.current.value = '';
		localStorage.setItem('HealPoints', JSON.stringify(newHP));
	};

	return (
		<Section>
			<div className={style['heal-point']}>
				<div className={style['progress-wrapper']}>
					<span className={`${style.progress} ${style[classesForHealthLine()]}`} style={{ width: `${percentage}%` }} />
				</div>
				<h2>Здоровье: <u>{currentHP}</u> <span>(макс. {MAXHP})</span></h2>
				<div>
					<select className={style['ice-background']} name="range" id="range" value={value} onChange={calculation}>
						<option value="plus">+</option>
						<option value="minus">-</option>
					</select>
				</div>
				<div className={style.math}>
					<input className={style['ice-background']} type="number" ref={damageOrHealRef} placeholder='Урон' />
				</div>
				<Button className={style['ice-background']} onClick={submit}>Рассчитать</Button>
				{
					currentHP === 0 ? <DeathChallenge /> : null
				}
			</div>
		</Section>
	);
};

export default HP;