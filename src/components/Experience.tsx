import { useState } from 'react';
import AccordionLabel from './AccordionLabel';

function Experience() {
	const [openBody, setOpenBody] = useState(false);
	return (
		<li className='border-b'>
			<AccordionLabel
				img='/case.svg'
				label='Experience'
				openBody={openBody}
				setOpenBody={setOpenBody}
			/>
		</li>
	);
}

export default Experience;
