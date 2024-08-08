import Education from '../../components/Education';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';
import Certifications from '../../components/Certifications';
import PersonalInfo from '../../components/personalInfo/PersonalInfo';

function Sidebar() {
	return (
		<aside className='flex-[3] h-full overflow-y-scroll py-3'>
			<h1 className='text-center text-xl text-slate-800 pb-4 border-b border-[#408080]'>
				Resume details
			</h1>
			<ul>
				<PersonalInfo />
				<Education />
				<Experience />
				<Skills />
				<Certifications />
			</ul>
		</aside>
	);
}

export default Sidebar;
