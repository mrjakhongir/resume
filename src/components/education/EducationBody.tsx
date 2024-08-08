import AddBtn from '../AddBtn';
import NewEducation from './newEducation/NewEducation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setEducation } from '../../redux/educationSlice';

type EducationBodyProps = {
	openBody: boolean;
};

function EducationBody({ openBody }: EducationBodyProps) {
	const education = useSelector((state: RootState) => state.education);
	const dispatch = useDispatch();
	function addEducation() {
		const newEducation = {
			id: education.length,
			institution: '',
			location: '',
			degreeType: '',
			field: '',
			startYear: '',
			gradYear: '',
		};

		dispatch(setEducation([...education, newEducation]));
	}
	return (
		<div
			className={`h-0 overflow-hidden transition-all duration-200 ${
				openBody && 'pt-2 pb-3 px-4 h-auto'
			}`}>
			<ul className='flex flex-col gap-5'>
				{education.map((edu) => (
					<NewEducation key={edu.id} edu={edu} />
				))}
			</ul>
			<AddBtn content='Education' addItem={addEducation} />
		</div>
	);
}

export default EducationBody;
