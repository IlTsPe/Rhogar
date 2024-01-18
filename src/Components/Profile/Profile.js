import { useState } from 'react';
import Characters from './Characters';
import Personality from './Personality/Personality';
import style from './profile.module.scss';
import Section from '../UI/Section';

const Profile = () => {
	const [showPersonality, setShowPersonality] = useState(false);

	const openModal = () => setShowPersonality(true);
	const closeModal = () => setShowPersonality(false);

	return (
		<Section>
			<div className={style['profile-wrapper']}>
				<img className={style.avatar} src='img/avatar.jpg' alt='Аватарка' />
				<Characters onClick={openModal} />
				<Personality state={showPersonality} closeModal={closeModal} />
			</div>
		</Section>

	);
}

export default Profile;