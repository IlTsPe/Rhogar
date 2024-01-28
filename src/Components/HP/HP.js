import { useRef, useState } from 'react';
import Button from '../UI/Button';
import style from './hp.module.scss';
import Section from '../UI/Section';

const HP = () => {
	const maxHP = 74;
	const damageOrHeal = useRef();
	const [currentHP, setСurrentHP] = useState(JSON.parse(localStorage.getItem('HealPoints')) ?? maxHP);
	const [value, setValue] = useState('minus');

	const calculation = (e) => {
		setValue(e.target.value)
	};

	const percentage = Math.round((currentHP * 100) / maxHP);

	const classes = () => {
		if (percentage >= 80) return 'green'
		if (percentage >= 65 && percentage < 80) return 'light-green'
		if (percentage >= 40 && percentage < 65) return 'yellow'
		if (percentage >= 25 && percentage < 40) return 'orange'
		if (percentage > 0 && percentage < 25) return 'red'
	}

	const submit = () => {
		let newHP;
		if (value === 'plus') {
			newHP = currentHP + +damageOrHeal.current.value;
			setСurrentHP(newHP)
		}
		if (value === 'minus') {
			newHP = currentHP - +damageOrHeal.current.value;
			setСurrentHP(newHP)
		}
		if (newHP > maxHP) {
			alert('Нельзя хилиться больше максимального HP')
			setСurrentHP(currentHP)
			newHP = currentHP;
		}
		if (newHP <= 0) {
			alert('Приляг и отдохни')
			newHP = 0;
			setСurrentHP(newHP)
		}
		classes();
		damageOrHeal.current.value = '';
		localStorage.setItem('HealPoints', JSON.stringify(newHP));
	};

	return (
		<Section>
			<div className={style['heal-point']}>
				<div className={style['progress-wrapper']}>
					<span className={`${style.progress} ${style[classes()]}`} style={{ width: `${percentage}%` }} />
				</div>
				<h2>Здоровье: <u>{currentHP}</u> <span>(макс. {maxHP})</span></h2>
				<div>
					<select className={style['ice-background']} name="range" id="range" value={value} onChange={calculation}>
						<option value="plus">+</option>
						<option value="minus">-</option>
					</select>
				</div>
				<div className={style.math}>
					<input className={style['ice-background']} type="number" ref={damageOrHeal} placeholder='Сколько' />
				</div>
				<Button className={style['ice-background']} onClick={submit}>Рассчитать</Button>
				{
					currentHP === 0 ?
						<div className={style['death-challenge']}>
							<div className={style.challenge}>
								<span>успехи</span>
								<input type="checkbox" />
								<input type="checkbox" />
								<input type="checkbox" />
							</div>
							<div className={style.challenge}>
								<span>провалы</span>
								<input type="checkbox" />
								<input type="checkbox" />
								<input type="checkbox" />
							</div>
						</div> :
						null
				}

			</div>
		</Section>
	);
}

export default HP;