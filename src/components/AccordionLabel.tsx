import { Dispatch, SetStateAction } from 'react';

type AccordionLabelProps = {
	img: string;
	label: string;
	openBody: boolean;
	setOpenBody: Dispatch<SetStateAction<boolean>>;
};

function AccordionLabel({
	img,
	label,
	openBody,
	setOpenBody,
}: AccordionLabelProps) {
	return (
		<div
			className='flex items-center justify-between cursor-pointer p-4 hover:bg-slate-50'
			onClick={() => setOpenBody((prevState) => !prevState)}>
			<div className='flex items-center gap-4'>
				<img src={img} alt={label} width={20} height={20} />
				<span className='text-[16px] text-slate-800 select-none'>{label}</span>
			</div>
			<img
				className={`transition-all ${openBody && '-rotate-180'}`}
				src='/angle.svg'
				alt='angle down'
				width={15}
				height={15}
			/>
		</div>
	);
}

export default AccordionLabel;
