import style from './fightList.module.scss';
import FightItem from '../FightItem/FightItem';

const FightList = ({ attackData, berserk, isBerserk }) => {
	return (
		<>
			{
				isBerserk ?
					<ul className={`${style['fight-descr']} ${style['fight-descr--berserk']}`}>
						{
							berserk.map(item => (
								<FightItem
									key={Math.random().toFixed(3)}
									name={item.name}
									bonus={item.bonus}
									type={item.type}
									className={style.descr}
									descr={item.descr} />
							))
						}
					</ul> :
					<ul className={style['fight-descr']}>
						{
							attackData.map(item => (
								<FightItem
									key={Math.random().toFixed(3)}
									name={item.name}
									bonus={item.bonus}
									type={item.type}
									className={style.descr}
									descr={item.descr} />
							))
						}
					</ul>
			}
		</>
	);
};

export default FightList;