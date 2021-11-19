import React from 'react';
import { Grid, Paper } from '@mui/material';
import i18n from '../Locales/i18n';
import faker from 'faker';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

faker.locale = i18n.language;

const rows: GridRowsProp = [
	{
		id: 1,
		Title: faker.lorem.words(),
		Discription: faker.lorem.paragraph(),
	},
	{
		id: 2,
		Title: faker.lorem.words(),
		Discription: faker.lorem.paragraph(),
	},
	{
		id: 3,
		Title: faker.lorem.words(),
		Discription: faker.lorem.paragraph(),
	},
	{
		id: 4,
		Title: faker.lorem.words(),
		Discription: faker.lorem.paragraph(),
	},
];
const columns: GridColDef[] = [
	{ field: 'Title', headerName: 'Title', width: 200 },
	{ field: 'Discription', headerName: 'Discription', width: 500 },
];
export default function ViewPosts() {
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
