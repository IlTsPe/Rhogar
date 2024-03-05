import Section from '../../UI/Section';
import Button from '../../UI/Button';
import InventoryList from '../InventoryList/InventoryList';
import { useRef } from 'react';
import style from './form.module.scss';

const InventoryForm = ({ onSubmit, data, deleteUser }) => {
	const inputDataRef = useRef();

	const sendForm = (e) => {
		e.preventDefault();
		const currentInput = inputDataRef.current;
		if (currentInput.value.trim().length === 0) return;
		onSubmit(currentInput.value);
		currentInput.value = '';
		currentInput.focus();
	};

	return (
		<Section className={style['form-wrapper']}>
			<h2>Инвентарь</h2>
			<form onSubmit={sendForm} className={style.form}>
				<input type="text" placeholder='Вещь' ref={inputDataRef} />
				<Button type='submit'
					onClick={sendForm}
				>Добавить</Button>
			</form>
			<InventoryList data={data} deleteUser={deleteUser} />
		</Section>
	);
};

export default InventoryForm;