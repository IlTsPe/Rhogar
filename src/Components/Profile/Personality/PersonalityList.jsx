import style from './personalityList.module.scss';

const PersonalityList = ({ data }) => {
	return (
		<ul className={style.character}>
			{data.map(item => (
				<li key={Math.random()}>
					<h2 className={style['character__nature']}>{item.header}</h2>
					<p className={style['character__descr']}>{item.descr}</p>
				</li>
			))}
		</ul>
	);
};

export default PersonalityList;