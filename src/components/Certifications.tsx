import { useState } from 'react';
import AccordionLabel from './AccordionLabel';

function Certifications() {
	const [openBody, setOpenBody] = useState(false);
	return (
		<li className='border-b'>
			<AccordionLabel
				img='/star.svg'
				label='Certifications'
				openBody={openBody}
				setOpenBody={setOpenBody}
			/>
		</li>
	);
}

export default Certifications;
