import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import i18n from '../Locales/i18n';

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

const cacheRtl = createCache({
	key: 'muirtl',
	stylisPlugins: [rtlPlugin],
});

const theme = createTheme({
	direction: getLanguage() === 'ar' ? 'rtl' : 'ltr',
	palette: {
		primary: {
			main: '#0c9fc1',
		},
		background: {
			default: '#f5f5f5',
		},
	},
	typography: {
		fontFamily: 'Advent Pro',
		fontSize: '16px',
		lineHeight: 1.2,
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
					<Switch>
						<Route path="/" exact component={Home} />
						<Route component={NotFound} />
					</Switch>
				</ThemeProvider>
			</LanguageContainer>
		</BrowserRouter>
	);
};

export default Router;
