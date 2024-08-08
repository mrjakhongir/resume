import { InputFiled } from '../../lib/definitions';

type InputLabelProps = {
	content: InputFiled;
};

function InputLabel({ content }: InputLabelProps) {
	return (
		<label className='text-slate-700 text-sm select-none'>
			{content.label}
		</label>
	);
}

export default InputLabel;
