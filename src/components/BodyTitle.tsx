type BodyTitleProps = {
	content: string;
	counter?: string;
};

function BodyTitle({ content, counter }: BodyTitleProps) {
	return (
		<h3 className='font-semibold mb-4 text-[16px] text-slate-800'>
			{content}
			<span className='font-normal text-slate-600'>{counter}</span>
		</h3>
	);
}

export default BodyTitle;
