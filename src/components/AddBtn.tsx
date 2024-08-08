type AddBtnProps = {
	content: string;
	addItem: () => void;
};
function AddBtn({ content, addItem }: AddBtnProps) {
	return (
		<button
			className='text-sm font-semibold border border-slate-500 rounded-lg w-full flex items-center justify-center gap-1 py-2 hover:bg-slate-50'
			onClick={addItem}>
			<span className='text-[24px] text-slate-600'>+</span>
			<span className='mt-[3px]'>Add {content}</span>
		</button>
	);
}

export default AddBtn;
