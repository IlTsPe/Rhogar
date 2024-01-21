import style from './character.module.scss';

const CharacterLIst = ({ characters, show }) => {
	return (
		<ul className={`${style.list} ${show ? '' : style['list-hide']}`}>
			{
				characters.map(item => (
					<li className={style['main-character']} key={Math.random()}>
						<div>
							<h4>{item.parameter}</h4>
							<p>{item.value}</p>
							{
								item.modifier ? <span data-counter={item.modifier}></span> : null
							}
						</div>
					</li>
				))
			}
		</ul>
	);
}

export default CharacterLIst;