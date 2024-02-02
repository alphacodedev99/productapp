import React from 'react';

// matirial
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// icons
import { FaHome } from 'react-icons/fa';
import { BsFillPostcardFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

// images
import profile from '../assets/react.svg';

function Navbar() {
	const navItems = [
		{
			icon: <FaHome />,
			label: 'Home',
			route: '/',
		},
		{
			icon: <BsFillPostcardFill />,
			label: 'Posts',
			route: '/posts',
		},
	];

	return (
		<div className='h-[100px] bg-gray-500 w-full'>
			<div className='container mx-auto flex justify-between h-full items-center'>
				<h1 className='text-4xl '>ProductAPP</h1>

				<ul className='flex gap-5'>
					{navItems.map((el, index) => {
						return (
							<li
								key={index}
								className='flex items-center gap-2 text-2xl'>
								{el.icon}
								<NavLink to={el.route} className='text-2xl'>
									{el.label}
								</NavLink>
							</li>
						);
					})}
				</ul>

				{/* profile */}
				<Stack direction='row' spacing={2}>
					<Avatar
						alt='Remy Sharp'
						src={profile}
						className='border-2 border-blue-400'
					/>
				</Stack>
			</div>
		</div>
	);
}

export default Navbar;
