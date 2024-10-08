import { ChangeEvent, useEffect, useState } from 'react';
import Input from '../../input/Input';
import { Education } from '../../../lib/definitions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setEducation } from '../../../redux/educationSlice';

const inputFileds = [
	{
		label: 'Institution',
		name: 'institution',
		placeholder: 'XYZ University',
		type: 'text',
	},
	{
		label: 'Location',
		name: 'location',
		placeholder: 'Bukhara, Uzbekistan',
		type: 'text',
	},
	{
		label: 'Degree Type',
		name: 'degreeType',
		placeholder: 'Bachelors/Masters',
		type: 'text',
	},
	{
		label: 'Field of Study',
		name: 'field',
		placeholder: 'Computer Science',
		type: 'text',
	},
	{
		label: 'Start Month / Year',
		name: 'startYear',
		placeholder: 'September 2019',
		type: 'text',
	},
	{
		label: 'Grad Month / Year',
		name: 'gradYear',
		placeholder: 'July 2023',
		type: 'text',
	},
];

type NewEducationProps = {
	edu: Education;
};

function NewEducation({ edu }: NewEducationProps) {
	const [openBody, setOpenBody] = useState(false);
	const education = useSelector((state: RootState) => state.education);
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			setOpenBody(true);
		}, 2);
	}, []);

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		const updated = education.map((item) =>
			item.id === edu.id ? { ...item, [name]: value } : item
		);
		dispatch(setEducation(updated));
	}

	return (
		<li>
			<div
				className='flex items-center justify-between cursor-pointer px-4'
				onClick={() => setOpenBody((prevState) => !prevState)}>
				<h3 className='text-md text-slate-700 select-none'>
					{edu.institution || 'Institute Name'}
				</h3>
				<div className='flex items-center gap-5'>
					<img
						className='cursor-pointer transition-all active:scale-90'
						onClick={() => {
							const updated = education.filter((item) => item.id !== edu.id);
							dispatch(setEducation(updated));
						}}
						src='/trash.svg'
						alt='trash can'
						width={13}
						height={13}
					/>
					<img
						className={`cursor-pointer transition-all -rotate-180 ${
							openBody && 'rotate-0'
						}`}
						src='/angle.svg'
						alt='angle'
						width={15}
						height={15}
					/>
				</div>
			</div>
			<ul
				className={`grid grid-cols-2 gap-x-4 gap-y-5 mb-5 px-4 h-0 overflow-hidden transition-all duration-200 ${
					openBody && 'h-auto pt-7'
				}`}>
				{inputFileds.map((field) => (
					<Input key={field.name} field={field} handleChange={handleChange} />
				))}
			</ul>
		</li>
	);
}

export default NewEducation;
