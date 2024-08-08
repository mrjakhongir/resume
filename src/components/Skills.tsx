import { useState } from 'react';
import AccordionLabel from './AccordionLabel';

function Skills() {
	const [openBody, setOpenBody] = useState(false);
	return (
		<li className='border-b'>
			<AccordionLabel
				img='/file-code.svg'
				label='Skills'
				openBody={openBody}
				setOpenBody={setOpenBody}
			/>
		</li>
	);
}

export default Skills;
