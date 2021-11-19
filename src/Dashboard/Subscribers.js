import React from 'react';
import { Card, CardContent, Grid, Paper } from '@mui/material';
import i18n from '../Locales/i18n';
import faker, { fake } from 'faker';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'react-i18next';

faker.locale = i18n.language;

export default function Subscribers() {
	const { t } = useTranslation();
	const rows: GridRowsProp = [
		{
			id: 1,
			Name: faker.fake('{{name.firstName}} {{name.lastName}}'),
			Email: faker.internet.email(),
			date: faker.date.past(),
			News: faker.commerce.productName(),
		},
		{
			id: 2,
			Name: faker.fake('{{name.firstName}} {{name.lastName}}'),
			Email: faker.internet.email(),
			date: faker.date.past(),
			News: faker.commerce.productName(),
		},
		{
			id: 3,
			Name: faker.fake('{{name.firstName}} {{name.lastName}}'),
			Email: faker.internet.email(),
			date: faker.date.past(),
			News: faker.commerce.productName(),
		},
		{
			id: 4,
			Name: faker.fake('{{name.firstName}} {{name.lastName}}'),
			Email: faker.internet.email(),
			date: faker.date.past(),
			News: faker.commerce.productName(),
		},
	];
	const columns: GridColDef = [
		{ field: 'Name', headerName: t('Name'), width: 200 },
		{ field: 'Email', headerName: t('Email'), width: 200 },
		{ field: 'date', headerName: t('Date'), width: 300 },
		{ field: 'News', headerName: t('News'), width: 200 },
	];

	return (
		<Card variant="none">
			<CardContent>
				<Grid container spacing={2}>
					<Grid item xs={12} sx={{ height: 300, width: '100%' }}>
						<DataGrid rows={rows} columns={columns} />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
