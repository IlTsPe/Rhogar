const InventoryItem = ({ children, remove, data, className }) => {
	return (
		<li className={className} onClick={() => remove(data)}>
			{children}
		</li>
	);
}

export default InventoryItem;