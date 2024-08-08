import BodyTitle from '../BodyTitle';
import Input from '../input/Input';
import Links from './links/Links';

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
	return (
		<div
			className={`h-0 overflow-hidden transition-all duration-200 ${
				openBody && 'py-2 px-4 h-auto'
			}`}>
			<BodyTitle content='Personal Info' />
			<ul className='grid grid-cols-2 gap-x-4 gap-y-5 mb-5'>
				{inputFields.map((field) => (
					<Input key={field.name} field={field} />
				))}
			</ul>
			<Links />
		</div>
	);
}

export default InfoBody;
