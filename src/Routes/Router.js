import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';
import { createTheme, ThemeProvider, CssBaseline, CircularProgress } from '@mui/material';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import i18n from '../Locales/i18n';
import LogIn from '../Dashboard/Login';
import SignUp from '../Dashboard/SignUp';
import AdminPanel from '../Dashboard/AdminPanel';
import PrivateRoute from './PrivateRoute';
import { AuthContextProvider } from '../firebase';

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

const cacheRtl = createCache({
	key: 'muirtl',
	stylisPlugins: [rtlPlugin],
});

const theme = createTheme({
	direction: getLanguage() === 'ar' ? 'rtl' : 'ltr',
	palette: {
		primary: {
			main: '#262153',
		},
		background: {
			default: '#f5f5f5',
		},
	},
	typography: {
		h3: {
			lineHeight: 1.1,
		},
		fontFamily: getLanguage() === 'en' ? 'Advent Pro' : 'Tajawal',
		fontSize: 16,
	},
	overrides: {
		MuiFormLabel: {
			root: {
				right: getLanguage() === 'ar' ? 30 : 'unset',
				left: getLanguage() === 'ar' ? 'unset' : 0,
				'&$focused': {
					right: getLanguage() === 'ar' ? 20 : 'unset',
					left: getLanguage() === 'ar' ? 'unset' : 0,
				},
				'&$filled': {
					right: getLanguage() === 'ar' ? 20 : 'unset',
					left: getLanguage() === 'ar' ? 'unset' : 0,
				},
			},
		},
	},
});
const LanguageContainer = ({ children }) => {
	if (getLanguage() === 'ar') {
		return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
	} else {
		return children;
	}
};
const Router = () => {
	const [isLoading, setIsLoading] = useState(true);
	if (window.location.pathname.split('/')[1] === 'ar') {
		i18next.changeLanguage('ar');
	} else {
		i18next.changeLanguage('en');
	}

	return (
		<BrowserRouter basename={getLanguage() === 'ar' ? 'ar' : 'en'} forceRefresh={true}>
			<LanguageContainer>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<AuthContextProvider>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/login" exact component={LogIn} />
							<PrivateRoute path="/admin" exact>
								<AdminPanel />
							</PrivateRoute>
							<Route component={NotFound} />
						</Switch>
					</AuthContextProvider>
				</ThemeProvider>
			</LanguageContainer>
		</BrowserRouter>
	);
};

export default Router;
