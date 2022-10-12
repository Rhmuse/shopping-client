import styled from 'styled-components';

export const NavbarWrapper = styled.div`
	flex-direction: column;
	justify-content: flex-start;
	.navlinks {
		margin-left: 10px;
		display: flex;
	}

	.logo {
		flex-grow: 1;
		cursor: pointer;
	}

	.link {
		text-decoration: none;
		color: white;
		font-size: 20px;
		margin-left: 20px;
		hover: {
			color: yellow;
			border-bottom: 1px solid white;
		}
	}
`;
