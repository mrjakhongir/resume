import { useState } from 'react';
import AddBtn from '../AddBtn';
import NewEducation from './newEducation/NewEducation';
import { Education } from '../../lib/definitions';

type EducationBodyProps = {
	openBody: boolean;
};

function EducationBody({ openBody }: EducationBodyProps) {
	const [savedEducation, setSavedEducation] = useState<Education[]>([]);

	function addEducation() {
		const newEducation = {
			id: savedEducation.length,
			institution: '',
			location: '',
			degreeType: '',
			field: '',
			startYear: '',
			gradYear: '',
		};

		setSavedEducation([...savedEducation, newEducation]);
	}
	return (
		<div
			className={`h-0 overflow-hidden transition-all duration-200 ${
				openBody && 'pt-2 pb-3 px-4 h-auto'
			}`}>
			<ul className='flex flex-col gap-5'>
				{savedEducation.map((edu) => (
					<NewEducation
						key={edu.id}
						edu={edu}
						setSavedEducation={setSavedEducation}
					/>
				))}
			</ul>
			<AddBtn content='Education' addItem={addEducation} />
		</div>
	);
}

export default EducationBody;
