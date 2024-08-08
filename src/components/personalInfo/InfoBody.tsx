import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BodyTitle from '../BodyTitle';
import Input from '../input/Input';
import Links from './links/Links';
import { setUserInfo } from '../../redux/userInfoSlice';
import { RootState } from '../../redux/store';

type InfoBodyProps = {
	openBody: boolean;
};

const inputFields = [
	{
		label: 'First Name',
		name: 'fName',
		placeholder: 'John',
		type: 'text',
	},
	{
		label: 'Last Name',
		name: 'lName',
		placeholder: 'Doe',
		type: 'text',
	},
	{
		label: 'Email',
		name: 'email',
		placeholder: 'my@gmail.com',
		type: 'email',
	},
	{
		label: 'Phone',
		name: 'phone',
		placeholder: '+1 206 555 0100',
		type: 'text',
	},
	{
		label: 'Address',
		name: 'address',
		placeholder: '123 Main Street, New York',
		type: 'text',
	},
	{
		label: 'Job Title',
		name: 'jobTitle',
		placeholder: 'Full-Stack Web Developer',
		type: 'text',
	},
];

function InfoBody({ openBody }: InfoBodyProps) {
	const userInfo = useSelector((state: RootState) => state.userInfo);
	const dispatch = useDispatch();

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		dispatch(setUserInfo({ ...userInfo, [name]: value }));
	}
	return (
		<div
			className={`h-0 overflow-hidden transition-all px-4 duration-200 ${
				openBody && 'pt-2 pb-3 h-auto'
			}`}>
			<BodyTitle content='Personal Info' />
			<ul className='grid grid-cols-2 gap-x-4 gap-y-5 mb-5'>
				{inputFields.map((field) => (
					<Input key={field.name} field={field} handleChange={handleChange} />
				))}
			</ul>
			<Links />
		</div>
	);
}

export default InfoBody;
