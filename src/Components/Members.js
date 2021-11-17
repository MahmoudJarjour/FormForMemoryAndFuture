import { Card, CardActionArea, CardContent, CardMedia, Container, Dialog, DialogContent, DialogTitle, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useTranslation } from 'react-i18next';
import faker from 'faker';

const Members = () => {
	const { t, i18n } = useTranslation();

	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [selectedPost, setSelectedPost] = useState({});

	faker.locale = i18n.language;
	const members = [
		{
			key: 'titlekey1',
			title: faker.fake('{{name.firstName}} {{name.lastName}}'),
			image: '1.png',
		},
		{
			key: 'titlekey2',
			title: faker.fake('{{name.firstName}} {{name.lastName}}'),
			image: '3.png',
		},
		{
			key: 'titlekey3',
			title: faker.fake('{{name.firstName}} {{name.lastName}}'),
			image: '2.png',
		},
		{
			key: 'titlekey4',
			title: faker.fake('{{name.firstName}} {{name.lastName}}'),
			image: '1.png',
		},
		{
			key: 'titlekey5',
			title: faker.fake('{{name.firstName}} {{name.lastName}}'),
			image: '3.png',
		},
		{
			key: 'titlekey6',
			title: faker.fake('{{name.firstName}} {{name.lastName}}'),
			image: '2.png',
		},
		{
			key: 'titlekey7',
			title: faker.fake('{{name.firstName}} {{name.lastName}}'),
			image: '1.png',
		},
	];

	const openMember = (member) => {
		setSelectedPost(member);
		setIsDialogOpen(true);
	};
	return (
		<>
			<Box name="Members" sx={{ backgroundColor: '#ECEAE8' }} pt={10} pb={10}>
				<Container maxWidth="lg">
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h3" color="#524fa1" fontWeight="600">
								{t('Members')}
							</Typography>
						</Grid>

						<Grid item xs={12}>
							<Carousel>
								{[...new Array(Math.ceil(members.length / 3))].map((_, index) => (
									<Grid container spacing={5} key={'page' + index}>
										{members.splice(0, 3).map((item) => (
											<Grid item md={4} xs={12} key={item.key}>
												<Card variant="none" sx={{ backgroundColor: '#ECEAE8' }}>
													<CardActionArea onClick={() => openMember(item)}>
														<CardMedia style={{ paddingTop: '100%', borderRadius: '100%' }} image={item.image} />
													</CardActionArea>
													<CardContent>
														{console.log(item.title)}
														<Typography align="center">{item.title}</Typography>
													</CardContent>
												</Card>
											</Grid>
										))}
									</Grid>
								))}
							</Carousel>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
				<DialogTitle>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="h5">{selectedPost.title}</Typography>
					</Stack>
				</DialogTitle>
				<DialogContent>
					<Stack direction="column" spacing={3}>
						<img src={selectedPost.image} style={{ width: '100%' }} />
						<Typography>{selectedPost.body}</Typography>
					</Stack>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default Members;
