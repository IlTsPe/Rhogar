import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../UI/Button';
import PersonalityList from './PersonalityList';
import Origin from './Origin';
import style from './personality.module.scss';

const personality = [
	{
		header: "Свойства личности",
		descr: "Я часто погружаюсь в свои мысли отвлекаясь от окружения"
	},
	{
		header: "Идеалы",
		descr: "Логика эмоции не должна затмевать наше видение того, что истинно и справедливо, а также наше логическое мышление"
	},
	{
		header: "Узы",
		descr: "Я уединился, чтобы спрятаться от тех, кто мог охотиться за мной. Когда-нибудь я сам брошу им вызов"
	},
	{
		header: "Изъяны",
		descr: "Я скрываю темные, кровожадные мысли, не ушедшие ни после изоляции, ни после медитации"
	}
]

const Personality = ({ state, closeModal }) => {

	const closeOnOverlay = (e) => {
		if (e.target.classList.contains('personality_overlay__gZCeC')) closeModal();
	}

	return (
		<Fragment>
			{createPortal(
				<div>
					{state && (
						<div className={style.overlay} onClick={closeOnOverlay}>
							<div className={style.modal}>
								<Button className={style['button-close']} onClick={closeModal}>
									<svg width="50px" height="50px" viewBox="0 0 24 24">
										<path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Button>
								<Origin />
								<PersonalityList data={personality} />
							</div>
						</div>
					)}
				</div>,
				document.getElementById('modal'))
			}



		</Fragment>
	);
}

export default Personality;