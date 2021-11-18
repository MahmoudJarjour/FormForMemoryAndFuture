import React from 'react';
import { Grid, Paper } from '@mui/material';
import i18n from '../Locales/i18n';
import faker from 'faker';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

faker.locale = i18n.language;

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
		id: 3,
		Name: faker.fake('{{name.firstName}} {{name.lastName}}'),
		Email: faker.internet.email(),
		date: faker.date.past(),
		News: faker.commerce.productName(),
	},
];

const columns: GridColDef[] = [
	{ field: 'Name', headerName: 'Name', width: 200 },
	{ field: 'Email', headerName: 'Email', width: 200 },
	{ field: 'date', headerName: 'Date', width: 300 },
	{ field: 'News', headerName: 'News', width: 200 },
];
export default function Subscribers() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Paper>
					<div style={{ height: 300, width: '100%' }}>
						<DataGrid rows={rows} columns={columns} />
					</div>
				</Paper>
			</Grid>
		</Grid>
	);
}
