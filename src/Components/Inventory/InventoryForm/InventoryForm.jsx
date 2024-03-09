import Section from '../../UI/Section';
import Button from '../../UI/Button';
import InventoryList from '../InventoryList/InventoryList';
import { useState } from 'react';
import style from './form.module.scss';

const InventoryForm = ({ onSubmit, data, deleteUser }) => {
	const [inputData, setInputData] = useState('');

	const validInputData = inputData.trim() !== '';
	let isFormValid = false;

	if (validInputData) {
		isFormValid = true;
	}

	const inputChangeHandler = (e) => {
		setInputData(e.target.value);
	};

	const sendForm = (e) => {
		e.preventDefault();
		onSubmit(inputData);
		setInputData('');
	};

	return (
		<Section className={style['form-wrapper']}>
			<h2>Инвентарь</h2>
			<form onSubmit={sendForm} className={style.form}>
				<input type="text"
					placeholder='Вещь'
					onChange={inputChangeHandler}
					value={inputData}
				/>
				<Button type='submit' onClick={sendForm} disabled={!isFormValid}>
					Добавить
				</Button> :
			</form>
			<InventoryList data={data} deleteUser={deleteUser} />
		</Section>
	);
};

export default InventoryForm;