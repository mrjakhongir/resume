import { ChangeEvent } from 'react';
import { InputFiled } from '../../lib/definitions';
import InputLabel from './InputLabel';

type InputProps = {
	field: InputFiled;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Input({ field, handleChange }: InputProps) {
	return (
		<li className='flex flex-col gap-2'>
			<InputLabel content={field} />
			<input
				className='border border-slate-400 rounded-lg p-3'
				type={field.type}
				placeholder={field.placeholder}
				name={field.name}
				onChange={handleChange}
			/>
		</li>
	);
}

export default Input;
