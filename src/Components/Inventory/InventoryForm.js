import Section from '../UI/Section';
import Button from '../UI/Button';
import InventoryList from './InventoryList';
import { useRef } from 'react';
import style from './form.module.scss';

const Inventory = ({ onSubmit, data, deleteUser }) => {
	const inputData = useRef();

	const sendForm = (e) => {
		e.preventDefault();
		onSubmit(inputData.current.value);
	}

	return (
		<Section className={style['form-wrapper']}>
			<h2>Инвентарь</h2>
			<form onSubmit={sendForm} className={style.form}>
				<input type="text" placeholder='Вещь' ref={inputData} />
				<Button type='submit' onClick={sendForm}>Добавить</Button>
			</form>
			<InventoryList data={data} deleteUser={deleteUser} />
		</Section>
	);
}

export default Inventory;