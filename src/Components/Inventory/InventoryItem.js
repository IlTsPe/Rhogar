const InventoryItem = ({ children, remove, data, className }) => {
	return (
		<li className={className} >
			{children}
			<button>
				<img src='img/garbage.png' alt="Удалить" onClick={() => remove(data)} />
			</button>
		</li>
	);
}

export default InventoryItem;