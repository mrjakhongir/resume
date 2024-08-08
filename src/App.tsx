import Sidebar from './layouts/sidebar/Sidebar';
import ViewCV from './layouts/viewCV/ViewCV';

function App() {
	return (
		<div className='flex border h-[100vh] container mx-auto'>
			<Sidebar />
			<ViewCV />
		</div>
	);
}

export default App;
