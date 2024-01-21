import style from './fight.module.scss';


const FightList = ({ attackData }) => {
	return (
		<ul className={style['fight-descr']}>
			{
				attackData.map(item => (
					<>
						<li>
							<p>{item.name}</p>
							<p>{item.bonus}</p>
							<p>{item.type}</p>
							<span className={style.descr}>
								{item.descr}
							</span>
						</li>
					</>
				))
			}
		</ul>
	);
}

export default FightList;