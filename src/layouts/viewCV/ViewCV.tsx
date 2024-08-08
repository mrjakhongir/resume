import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function ViewCV() {
	const userInfo = useSelector((state: RootState) => state.userInfo);
	const links = useSelector((state: RootState) => state.links);
	return (
		<main className='flex-[5] h-full overflow-y-scroll bg-slate-100 pt-1 pb-10 px-20'>
			<div className='h-[841px] bg-white py-6 px-10 text-slate-600 font-normal'>
				<div className='mb-3'>
					<h1 className='text-[40pt] text-center font-thin'>
						{userInfo.fName} {userInfo.lName}
					</h1>
					<p className='text-center text-[8pt]'>{userInfo.jobTitle}</p>
					<p className='text-center text-[8pt]'>
						<span>{userInfo.email}</span>
						<span className='font-[Georgia] text-slate-600 font-thin text-[8pt]'>
							{' '}
							{userInfo.phone && `| ${userInfo.phone}`}
						</span>
						<span> {userInfo.address && `| ${userInfo.address}`}</span>
					</p>
					<div className='flex items-center justify-center text-[10pt] text-slate-900 font-semibold'>
						{links.map((link, index) =>
							index === 0 ? (
								<a key={link.link} href={link.link}>
									{link.site}
								</a>
							) : (
								<a key={link.link} href={link.link}>
									|{link.site}
								</a>
							)
						)}
					</div>
				</div>
				<div>
					<h2 className='uppercase text-[16pt] font-semibold'>Education</h2>
					<div className='mb-3'>
						<div className='flex items-center justify-between'>
							<span className='uppercase text-[10pt] text-slate-900 font-semibold'>
								BuxMti
							</span>
							<span>September 2016 - July 2020</span>
						</div>
						<div className='flex items-center justify-between'>
							<span className='uppercase text-[10pt] text-slate-900 font-semibold'>
								computer science bachelors
							</span>
							<span>Bukhara</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default ViewCV;
