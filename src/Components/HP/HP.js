import { useRef, useState } from 'react';
import Button from '../UI/Button';
import style from './hp.module.scss';
import Section from '../UI/Section';

const HP = () => {
	const maxHP = 74;
	const damageOrHeal = useRef();
	const [currentHP, setСurrentHP] = useState(maxHP);
	const [value, setValue] = useState('minus');

	const calculation = (e) => {
		setValue(e.target.value)
	};

	let newHP = currentHP;
	let b = localStorage.getItem('HP');
	newHP = b;

	const percentage = Math.round((newHP * 100) / maxHP);

	const classes = () => {
		if (percentage >= 80) return 'green'
		if (percentage >= 65 && percentage < 80) return 'light-green'
		if (percentage >= 40 && percentage < 65) return 'yellow'
		if (percentage >= 25 && percentage < 40) return 'orange'
		if (percentage > 0 && percentage < 25) return 'red'
	}

	const submit = () => {
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
			newHP = currentHP
		}
		if (newHP <= 0) {
			alert('Приляг и отдохни')
			setСurrentHP(0)
			newHP = 0
		}
		localStorage.setItem('HP', newHP);
		classes();
		damageOrHeal.current.value = '';
	};

	return (
		<Section>
			<div className={style['heal-point']}>
				<div className={style['progress-wrapper']}>
					<span className={`${style.progress} ${style[classes()]}`} style={{ width: `${percentage}%` }} />
				</div>
				<h2>Здоровье: <u>{newHP}</u> <span>(макс. {maxHP})</span></h2>
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