import { useDispatch, useSelector } from 'react-redux';
import { Link } from '../../../lib/definitions';
import { setLinks } from '../../../redux/linksSlice';
import { RootState } from '../../../redux/store';

type NewLinkProps = {
	link: Link;
};

function NewLink({ link }: NewLinkProps) {
	const dispatch = useDispatch();
	const links = useSelector((state: RootState) => state.links);
	return (
		<div className='flex items-center gap-4 mb-5'>
			<div className='grid grid-cols-2 gap-4'>
				<input
					className='flex-[5] border border-slate-400 rounded-lg p-3'
					type='{type}'
					placeholder='Your link here'
					name='link'
					value={link.link}
					onChange={(e) => {
						const updated = links.map((item) =>
							item.id === link.id ? { ...item, link: e.target.value } : item
						);
						dispatch(setLinks(updated));
					}}
				/>
				<select
					className='flex-[5] px-3 bg-transparent border border-slate-400 rounded-lg self-stretch'
					name='site'
					value={link.site || 'Select...'}
					onChange={(e) => {
						const updated = links.map((item) =>
							item.id === link.id ? { ...item, site: e.target.value } : item
						);
						dispatch(setLinks(updated));
					}}>
					<option disabled hidden>
						Select...
					</option>
					<option value='GitHub '>GitHub </option>
					<option value='LinkedIn '>LinkedIn</option>
					<option value='Hacker Rank '>Hacker Rank</option>
					<option value='Portfolio '>Portfolio</option>
				</select>
			</div>
			<img
				className='cursor-pointer transition-all active:scale-90'
				onClick={() => {
					const updated = links.filter((item) => item.id !== link.id);
					dispatch(setLinks(updated));
				}}
				src='/trash.svg'
				alt='trash can'
				width={13}
				height={13}
			/>
		</div>
	);
}

export default NewLink;
