import { InputFiled } from '../../lib/definitions';
import InputLabel from './InputLabel';

type InputProps = {
	field: InputFiled;
};

function Input({ field }: InputProps) {
	return (
		<li className='flex flex-col gap-2'>
			<InputLabel content={field} />
			<input
				className='border border-slate-400 rounded-lg p-3'
				type={field.type}
				placeholder={field.placeholder}
				name={field.name}
			/>
		</li>
	);
}

export default Input;
