import { CardContent, CardHeader, Grid, Card, CardMedia, IconButton } from '@mui/material';
import i18n from '../Locales/i18n';
import faker from 'faker';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

faker.locale = i18n.language;

const content = [
	{
		key: 1,
		MemberName: faker.fake('{{name.lastName}}'),
		MemberImage: faker.image.people(),
		MemberDiscription: faker.lorem.paragraph(),
	},
	{
		key: 2,
		MemberName: faker.fake('{{name.lastName}}'),
		MemberImage: faker.image.people(),
		MemberDiscription: faker.lorem.paragraph(),
	},
	{
		key: 3,
		MemberName: faker.fake('{{name.lastName}}'),
		MemberImage: faker.image.people(),
		MemberDiscription: faker.lorem.paragraph(),
	},
	{
		key: 4,
		MemberName: faker.fake('{{name.lastName}}'),
		MemberImage: faker.image.people(),
		MemberDiscription: faker.lorem.paragraph(),
	},
	{
		key: 5,
		MemberName: faker.fake('{{name.lastName}}'),
		MemberImage: faker.image.people(),
		MemberDiscription: faker.lorem.paragraph(),
	},
	{
		key: 6,
		MemberName: faker.fake('{{name.lastName}}'),
		MemberImage: faker.image.people(),
		MemberDiscription: faker.lorem.paragraph(),
	},
];

export default function ViewMember() {
	return (
		<Grid container spacing={2}>
			{content.map((item) => (
				<Grid item xs={12} md={6}>
					<Card sx={{ minHeight: '100%' }}>
						<CardHeader
							title={item.MemberName}
							action={
								<IconButton aria-label="settings">
									<DeleteOutlinedIcon />
								</IconButton>
							}
						/>
						<CardMedia image={item.MemberImage} sx={{ pt: '100%' }} />
						<CardContent> {item.MemberDiscription} </CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}
