import React from 'react';
import {
	Container,
	createTheme,
	makeStyles,
	MenuItem,
	Select,
	ThemeProvider,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AuthModal from './Authentication/AuthModal';
import UserSidebar from './Authentication/UserSidebar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	title: {
		// flexGrow: 1,
		flex: 1,
		color: 'steelblue',
		fontFamily: 'Merienda',
		fontWeight: 'bold',
		cursor: 'pointer',
	},
	wm: {
		// flexGrow: 1,
		flex: 1,
		color: 'white',
		fontFamily: 'Merienda',
		fontWeight: 'bold',
		fontSize: '4px',
		cursor: 'pointer',
	},
	menuButton: {
		marginRight: theme.spacing(0.1),
	},
}));

const Header = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	// const history = useHistory();
	const { currency, setCurrency, user } = CryptoState();

	console.log(currency);

	const darkTheme = createTheme({
		palette: {
			primary: {
				main: '#fff',
			},
			type: 'dark',
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<div className={classes.root}>
				<AppBar color='transparent' position='static'>
					<Container>
						<Toolbar>
							{/* <IconButton
								edge='start'
								className={classes.menuButton}
								color='inherit'
								aria-label='menu'
							>
								<MenuIcon />
							</IconButton> */}
							<Typography
								onClick={() => navigate('/')}
								// onClick={() => history.push(`/`)}
								variant='h6'
								className={classes.title}
							>
								Cryptracker
							</Typography>
							<Select
								variant='outlined'
								style={{
									width: 90,
									height: 40,
									marginRight: 15,
								}}
								value={currency}
								onChange={(e) => setCurrency(e.target.value)}
							>
								<MenuItem value={'USD'}>USD</MenuItem>
								<MenuItem value={'ZAR'}>ZAR</MenuItem>
							</Select>
							
							{user ? <UserSidebar /> : <AuthModal />}
						</Toolbar>
					</Container>
				</AppBar>
			</div>
		</ThemeProvider>
	);
};

export default Header;
