import Button from '../../UI/Button';

const InventoryItem = ({ children, remove, data, className }) => {
	return (
		<li className={className} >
			{children}
			<Button>
				<img src='img/garbage.png' alt="Удалить" onClick={() => remove(data)} />
			</Button>
		</li>
	);
};

export default InventoryItem;