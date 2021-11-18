import { Link, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export function Copyright(props) {
	const { t } = useTranslation();
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{t('Copyright')}
			{' © '}
			<Link color="inherit" href="#">
				{t('Forum for Memory and Future')}
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
