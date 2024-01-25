import './css/vendor/normalize.css'
import './css/app.css'
import Profile from './Components/Profile/Profile';
import HP from './Components/HP/HP';
import Fight from './Components/Fight/Fight';
import Accordions from './Components/Accodrion/Accordions';
import InventoryForm from './Components/Inventory/InventoryForm';
import { useState, useEffect } from 'react';

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
	const [goodsData, setGoodsData] = useState(JSON.parse(localStorage.getItem('Inventory')) || goods);

	const getUsersData = (name) => {
		const newGoodsObj = {
			id: Math.random().toFixed(2),
			name: name,
		};
		setGoodsData(prev => [...prev, newGoodsObj]);
	};

	const deleteUser = (goods) => {
		setGoodsData(goodsData.filter(good => good.id !== goods.id));
	}

	useEffect(() => {
		const JSONData = JSON.stringify(goodsData);
		localStorage.setItem('Inventory', JSONData);
	}, [goodsData]);


	return (
		<div className="wrapper">
			<Profile />
			<HP />
			<Fight />
			<Accordions />
			<InventoryForm onSubmit={getUsersData} data={goodsData} deleteUser={deleteUser} />
		</div>
	);
}

export default App;
