import './css/vendor/normalize.css'
import './css/app.css'
import Profile from './Components/Profile/Profile';
import HP from './Components/HP/HP';
import Fight from './Components/Fight/Fight';
import Accordions from './Components/Accodrion/Accordions';

function App() {
	return (
		<div className="wrapper">
			<Profile />
			<HP />
			<Fight />
			<Accordions />
		</div>
	);
}

export default App;
