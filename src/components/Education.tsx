import { useState } from 'react';
import AccordionLabel from './AccordionLabel';

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
		</li>
	);
}

export default Education;
