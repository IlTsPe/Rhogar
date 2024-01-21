import style from './fight.module.scss';


const FightList = ({ attackData, berserk, isBerserk }) => {
	return (
		<>
			{
				isBerserk ?
					<ul className={`${style['fight-descr']} ${style['fight-descr--berserk']}`}>
						{
							berserk.map(item => (
								<li key={Math.random()}>
									<p>{item.name}</p>
									<p>{item.bonus}</p>
									<p>{item.type}</p>
									<span className={style.descr}>
										{item.descr}
									</span>
								</li>
							))
						}
					</ul>
					:
					<ul className={style['fight-descr']}>
						{
							attackData.map(item => (
								<li key={Math.random()}>
									<p>{item.name}</p>
									<p>{item.bonus}</p>
									<p>{item.type}</p>
									<span className={style.descr}>
										{item.descr}
									</span>
								</li>
							))
						}
					</ul>
			}
		</>

	);
}

export default FightList;