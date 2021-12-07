import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography, Container, Box, Grid, TextField, CssBaseline, Avatar, Link, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { Copyright } from './CopyRight';
import { signInWithEmailAndPassword, getAuth } from '@firebase/auth';

export default function LogIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const onSubmit = () => {
		const auth = getAuth();
		console.log({ email, password });
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				history.push('/admin');
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const { t } = useTranslation();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: '#514FA1' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					{t('Sign in')}
				</Typography>
				<Stack spacing={1} sx={{ mt: 1, width: '100%' }}>
					<TextField value={email} onChange={({ target: { value } }) => setEmail(value)} fullWidth label={t('Email Address')} autoFocus />
					<TextField value={password} onChange={({ target: { value } }) => setPassword(value)} fullWidth label={t('Password')} type="password" />
					<LoadingButton fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={onSubmit}>
						{t('Sign in')}
					</LoadingButton>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								{t('Forgot password?')}
							</Link>
						</Grid>
						<Grid item>
							<Link component={RouterLink} to="/SignUp" variant="body2">
								{t("Don't have an account? Sign Up")}
							</Link>
						</Grid>
					</Grid>
				</Stack>
			</Box>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	);
}
