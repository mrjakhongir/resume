import { useState } from 'react';
import AccordionLabel from '../AccordionLabel';
import InfoBody from './InfoBody';

function PersonalInfo() {
	const [openBody, setOpenBody] = useState(false);
	return (
		<li className='border-b'>
			<AccordionLabel
				img='/user.svg'
				label='Personal Info'
				openBody={openBody}
				setOpenBody={setOpenBody}
			/>
			<InfoBody openBody={openBody} />
		</li>
	);
}

export default PersonalInfo;
