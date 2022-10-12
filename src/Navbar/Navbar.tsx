import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import { NavbarWrapper } from './Navbar.styles';

export const Navbar = () => {
	return (
		<NavbarWrapper>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h4' className='logo'>
						We Sell Things! inc.
					</Typography>
					<div className='navlinks'>
						<Link href='/' className='link'>
							Home
						</Link>
						<Link href='/about' className='link'>
							About
						</Link>
						<Link href='/store' className='link'>
							Store
						</Link>
						<Link href='/faq' className='link'>
							FAQ
						</Link>
					</div>
				</Toolbar>
			</AppBar>
		</NavbarWrapper>
	);
};
