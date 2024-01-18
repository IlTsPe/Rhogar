import { useRef, useState } from 'react';
import Button from '../UI/Button';
import style from './hp.module.scss';
import Section from '../UI/Section';

const HP = () => {
	const maxHP = 74;
	const damageOrHeal = useRef();
	const [currentHP, setСurrentHP] = useState(74);
	const [value, setValue] = useState('minus');

	const percentage = Math.round((currentHP * 100) / maxHP);

	const classes = () => {
		if (percentage >= 80) return 'green'
		if (percentage >= 65 && percentage < 80) return 'light-green'
		if (percentage >= 40 && percentage < 65) return 'yellow'
		if (percentage >= 25 && percentage < 40) return 'orange'
		if (percentage > 0 && percentage < 25) return 'red'
	}

	const calculation = (e) => {
		setValue(e.target.value)
	};

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
			alert('Нельзя больше максимального ХП хилиться')
			setСurrentHP(currentHP)
		}
		if (newHP <= 0) {
			alert('Приляг и отдохни')
			setСurrentHP(0)
		}
		classes();
		damageOrHeal.current.value = '';
	};

	return (
		<Section>
			<div className={style['heal-point']}>
				<span className={`${style.progress} ${style[classes()]}`} style={{ width: `${percentage}%` }} />
				<h2>Здоровье: <u>{currentHP}</u> <span>(макс. {maxHP})</span></h2>
				<div>
					<select className={style['ice-background']} name="range" id="range" value={value} onChange={calculation}>
						<option value="plus">+</option>
						<option value="minus">-</option>
					</select>
				</div>
				<div>
					<input className={style['ice-background']} type="number" ref={damageOrHeal} placeholder='Сколько' />
				</div>
				<Button className={style['ice-background']} onClick={submit}>Рассчитать</Button>
			</div>
		</Section>
	);
}

export default HP;