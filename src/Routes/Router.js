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

const getLanguage = () => i18next.language;

const cacheRtl = createCache({
	key: 'muirtl',
	stylisPlugins: [rtlPlugin],
});

const defaultTheme = {
	palette: {
		primary: {
			main: '#221e38',
		},
		background: {
			default: '#f5f5f5',
		},
	},
	typography: {
		h3: {
			lineHeight: 1.1,
		},
		fontSize: 16,
	},
};

const enTheme = {
	direction: 'ltr',
	...defaultTheme,
	typography: {
		...defaultTheme.typography,
		fontFamily: 'Advent Pro',
	},
	overrides: {
		MuiFormLabel: {
			root: {
				right: 30,
				left: 'unset',
				'&$focused': {
					right: 20,
					left: 'unset',
				},
				'&$filled': {
					right: 20,
					left: 'unset',
				},
			},
		},
	},
};

const arTheme = {
	...defaultTheme,
	direction: 'rtl',
	typography: {
		...defaultTheme.typography,
		fontFamily: 'Tajawal',
	},
	overrides: {
		MuiFormLabel: {
			root: {
				right: 'unset',
				left: 0,
				'&$focused': {
					right: 'unset',
					left: 0,
				},
				'&$filled': {
					right: 'unset',
					left: 0,
				},
			},
		},
	},
};

const LanguageContainer = ({ children }) => {
	if (getLanguage() === 'ar') {
		return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
	} else {
		return children;
	}
};
const Router = () => {
	if (window.location.pathname.split('/')[1] === 'en') {
		i18next.changeLanguage('en');
	} else {
		i18next.changeLanguage('ar');
	}

	const theme = React.useMemo(() => createTheme(window.location.pathname.split('/')[1] === 'en' ? enTheme : arTheme), []);

	return (
		<BrowserRouter basename={getLanguage() === 'en' ? 'en' : 'ar'} forceRefresh={true}>
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
