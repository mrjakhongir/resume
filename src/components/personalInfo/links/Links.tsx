import { useState } from 'react';
import AddBtn from '../../AddBtn';
import BodyTitle from '../../BodyTitle';
import NewLink from './NewLink';
import { Link } from '../../../lib/definitions';

function Links() {
	const [savedLinks, setSavedLinks] = useState<Link[]>([]);

	function addItem() {
		const emptyLink = { id: savedLinks.length, link: '', site: '' };
		if (savedLinks.length < 5) {
			setSavedLinks([...savedLinks, emptyLink]);
		}
	}

	return (
		<div>
			<BodyTitle content='Links' counter={`(${savedLinks.length}/5)`} />
			{savedLinks.map((link) => (
				<NewLink key={link.id} setSavedLinks={setSavedLinks} link={link} />
			))}
			<AddBtn content='Link' addItem={addItem} />
		</div>
	);
}

export default Links;
