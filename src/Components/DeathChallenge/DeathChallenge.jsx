import style from './deathChallenge.module.scss';

const DeathChallenge = () => {
	return (
		<>
			<div className={style['death-challenge']}>
				<div className={style.challenge}>
					<span>успехи</span>
					<input type="checkbox" />
					<input type="checkbox" />
					<input type="checkbox" />
				</div>
				<div className={style.challenge}>
					<span>провалы</span>
					<input type="checkbox" />
					<input type="checkbox" />
					<input type="checkbox" />
				</div>
			</div>
		</>
	);
};

export default DeathChallenge;