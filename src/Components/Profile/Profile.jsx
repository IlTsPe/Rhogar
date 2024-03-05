import { useState, useEffect } from 'react';
import Characters from './Characters';
import Personality from './Personality/Personality';
import Inspiration from './Inspiration/Inspiration';
import style from './profile.module.scss';
import Section from '../UI/Section';

const Profile = () => {
	const [showPersonality, setShowPersonality] = useState(false);

	const openModal = () => setShowPersonality(prev => !prev);
	const closeModal = () => setShowPersonality(prev => !prev);

	useEffect(() => {
		document.body.classList.toggle('modal-open');
	}, [showPersonality]);

	return (
		<Section className={style.profile}>
			<div className={style['profile-wrapper']}>
				<img className={style.avatar} src='img/avatar.jpg' alt='Аватарка' />
				<Characters onClick={openModal} />
				<Personality state={showPersonality} closeModal={closeModal} />
			</div>
			<Inspiration />
		</Section>
	);
};

export default Profile;