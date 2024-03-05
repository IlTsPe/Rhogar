const FightItem = ({ name, bonus, type, className, descr }) => {
	return (
		<>
			<li>
				<p>{name}</p>
				<p>{bonus}</p>
				<p>{type}</p>
				<span className={className}>
					{descr}
				</span>
			</li>
		</>
	);
};

export default FightItem;