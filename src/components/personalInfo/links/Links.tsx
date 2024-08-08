import { useDispatch, useSelector } from 'react-redux';
import AddBtn from '../../AddBtn';
import BodyTitle from '../../BodyTitle';
import NewLink from './NewLink';
import { RootState } from '../../../redux/store';
import { setLinks } from '../../../redux/linksSlice';

function Links() {
	const links = useSelector((state: RootState) => state.links);
	const dispatch = useDispatch();

	function addItem() {
		const emptyLink = { id: links.length, link: '', site: '' };
		if (links.length < 5) {
			dispatch(setLinks([...links, emptyLink]));
		}
	}
	return (
		<div>
			<BodyTitle content='Links' counter={`(${links.length}/5)`} />
			{links.map((link) => (
				<NewLink key={link.id} link={link} />
			))}
			<AddBtn content='Link' addItem={addItem} />
		</div>
	);
}	

export default Links;
