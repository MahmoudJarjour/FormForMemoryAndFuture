import React from 'react';
import { CardContent, CardHeader, Grid, Card, CardMedia, IconButton } from '@mui/material';
import i18n from '../Locales/i18n';
import faker from 'faker';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

faker.locale = i18n.language;

const content = [
	{
		key: 1,
		PostTitle: faker.fake('{{name.lastName}}'),
		PostImage: faker.image.abstract(),
		postDiscription: faker.lorem.paragraph(),
	},
	{
		key: 2,
		PostTitle: faker.fake('{{name.lastName}}'),
		PostImage: faker.image.nature(),
		postDiscription: faker.lorem.paragraph(),
	},
	{
		key: 3,
		PostTitle: faker.fake('{{name.lastName}}'),
		PostImage: faker.image.nature(),
		postDiscription: faker.lorem.paragraph(),
	},
	{
		key: 4,
		PostTitle: faker.fake('{{name.lastName}}'),
		PostImage: faker.image.abstract(),
		postDiscription: faker.lorem.paragraph(),
	},
	{
		key: 5,
		PostTitle: faker.fake('{{name.lastName}}'),
		PostImage: faker.image.abstract(),
		postDiscription: faker.lorem.paragraph(),
	},
	{
		key: 6,
		PostTitle: faker.fake('{{name.lastName}}'),
		PostImage: faker.image.nature(),
		postDiscription: faker.lorem.paragraph(),
	},
];

export default function ViewPosts() {
	return (
		<Grid container spacing={2}>
			{content.map((item) => (
				<Grid item xs={12} md={6}>
					<Card sx={{ minHeight: '100%' }}>
						<CardHeader
							title={item.PostTitle}
							action={
								<IconButton aria-label="settings">
									<DeleteOutlinedIcon />
								</IconButton>
							}
						/>
						<CardMedia image={item.PostImage} sx={{ pt: '100%' }} />
						<CardContent> {item.postDiscription} </CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}
