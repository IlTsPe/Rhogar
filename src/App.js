import './css/vendor/normalize.css'
import './css/app.css'
import Profile from './Components/Profile/Profile';
import HP from './Components/HP/HP';
import InfoList from './Components/Accodrion/InfoList';

function App() {
	return (
		<div className="wrapper">
			<Profile />
			<HP />
			<InfoList />
		</div>
	);
}

export default App;
