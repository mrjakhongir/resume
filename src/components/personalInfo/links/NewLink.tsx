import { Link } from '../../../lib/definitions';

type NewLinkProps = {
	setSavedLinks: React.Dispatch<React.SetStateAction<Link[]>>;
	link: Link;
};

function NewLink({ setSavedLinks, link }: NewLinkProps) {
	return (
		<div className='grid grid-cols-2 gap-5 mb-5'>
			<input
				className='border border-slate-400 rounded-lg p-3'
				type='{type}'
				placeholder='Your link here'
				name='link'
				value={link.link}
				onChange={(e) =>
					setSavedLinks((prevLinks) =>
						prevLinks.map((item) =>
							item.id === link.id ? { ...item, link: e.target.value } : item
						)
					)
				}
			/>
			<select
				className='w-full px-3 bg-transparent border border-slate-400 rounded-lg'
				name='site'
				value={link.site || 'Select...'}
				onChange={(e) =>
					setSavedLinks((prevLinks) =>
						prevLinks.map((item) =>
							item.id === link.id ? { ...item, site: e.target.value } : item
						)
					)
				}>
				<option disabled hidden>
					Select...
				</option>
				<option value='GitHub'>GitHub</option>
				<option value='LinkedIn'>LinkedIn</option>
				<option value='Hacker Rank'>Hacker Rank</option>
				<option value='Portfolio'>Portfolio</option>
			</select>
		</div>
	);
}

export default NewLink;
