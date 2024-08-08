import { useState } from 'react';
import AccordionLabel from '../AccordionLabel';
import EducationBody from './EducationBody';

function Education() {
	const [openBody, setOpenBody] = useState(false);
	return (
		<li className='border-b'>
			<AccordionLabel
				img='/book.svg'
				label='Education'
				openBody={openBody}
				setOpenBody={setOpenBody}
			/>
			<EducationBody openBody={openBody} />
		</li>
	);
}

export default Education;
