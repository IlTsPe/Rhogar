import './css/vendor/normalize.css'
import './css/app.css'
import Profile from './Components/Profile/Profile';
import HP from './Components/HP/HP';
import Fight from './Components/Fight/Fight';
import Accordions from './Components/Accodrion/Accordions';
import InventoryForm from './Components/Inventory/InventoryForm';
import InventoryList from './Components/Inventory/InventoryList';
import { useState } from 'react';

const goods = [
	{
		id: Math.random().toFixed(3),
		name: 'Контейнер для свитков'
	},
	{
		id: Math.random().toFixed(3),
		name: 'Теплое одеяло'
	},
	{
		id: Math.random().toFixed(3),
		name: 'Обычная одежда'
	},
	{
		id: Math.random().toFixed(3),
		name: 'Набор травника'
	},
	{
		id: Math.random().toFixed(3),
		name: '2 сумки с ежами'
	},
	{
		id: Math.random().toFixed(3),
		name: '1 малое зелье лечения'
	},
]

function App() {
	const [usersData, setUsersData] = useState(goods);

	const getUsersData = (name) => {
		const newUserObj = {
			id: Math.random().toFixed(2),
			name: name,
		};
		setUsersData([...usersData, newUserObj]);
	};

	const deleteUser = (users) => setUsersData(usersData.filter(user => user.id !== users.id));

	return (
		<div className="wrapper">
			<Profile />
			<HP />
			<Fight />
			<Accordions />
			<InventoryForm onSubmit={getUsersData} />
			<InventoryList data={usersData} deleteUser={deleteUser} />
		</div>
	);
}

export default App;
