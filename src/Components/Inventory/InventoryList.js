import InventoryItem from './InventoryItem';
import style from './item.module.scss';

const InventoryList = ({ data, deleteUser }) => {
	return (
		<ul className={style.list}>
			{data.map((item, index) => (
				<InventoryItem key={item.id} remove={deleteUser} data={item} className={style.item}>
					{/* <span>{index + 1}</span> */}
					<p>{item.name}</p>
				</InventoryItem>
			))}
		</ul >
	);
}

export default InventoryList;