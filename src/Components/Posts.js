import { Card, CardActionArea, CardMedia, Container, Dialog, DialogContent, DialogTitle, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import faker from 'faker';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Posts = () => {
	const { t, i18n } = useTranslation();
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [selectedPost, setSelectedPost] = useState({});

	faker.locale = i18n.language;

	useEffect(() => {
		Aos.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
		});
	}, []);
	const posts = [
		{
			key: 'titlekey1',
			title: faker.fake('{{name.firstName}} {{name.lastName}}'),
			image: 'post1.png',
			body: 'Qui irure amet do anim dolor ad. Lorem quis fugiat eu ea aliquip ex anim consequat cillum do ipsum. Anim aliquip duis excepteur laborum irure minim velit elit dolore. Velit dolor exercitation laborum sunt quis aliquip deserunt occaecat. Sint commodo voluptate commodo occaecat est.',
		},
		{
			key: 'titlekey2',
			title: faker.fake('{{name.firstName}} {{name.lastName}}'),
			image: 'post2.png',
			body: 'Qui irure amet do anim dolor ad. Lorem quis fugiat eu ea aliquip ex anim consequat cillum do ipsum. Anim aliquip duis excepteur laborum irure minim velit elit dolore. Velit dolor exercitation laborum sunt quis aliquip deserunt occaecat. Sint commodo voluptate commodo occaecat est.',
		},
		{
			key: 'titlekey3',
			title: faker.fake('{{name.firstName}} {{name.lastName}}'),
			image: 'post3.png',
			body: 'Qui irure amet do anim dolor ad. Lorem quis fugiat eu ea aliquip ex anim consequat cillum do ipsum. Anim aliquip duis excepteur laborum irure minim velit elit dolore. Velit dolor exercitation laborum sunt quis aliquip deserunt occaecat. Sint commodo voluptate commodo occaecat est.',
		},
	];

	const openPost = (post) => {
		setSelectedPost(post);
		setIsDialogOpen(true);
	};

	return (
		<>
			<Box name="Posts" sx={{ backgroundColor: '#ECEAE8' }} py={10}>
				<Container maxWidth="lg">
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h3" color="#524fa1" fontWeight="600">
								{t('POSTS')}
							</Typography>
						</Grid>

						{posts.map((post) => (
							<Grid item data-aos="flip-down" md={4} xs={12} key={post.key}>
								<Card>
									<CardActionArea onClick={() => openPost(post)}>
										<CardMedia style={{ paddingTop: '100%' }} image={post.image} />
									</CardActionArea>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			<Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
				<DialogTitle>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="h5">{selectedPost.title}</Typography>
						<IconButton onClick={() => setIsDialogOpen(false)}>
							<CloseIcon />
						</IconButton>
					</Stack>
				</DialogTitle>
				<DialogContent>
					<Stack direction="column" spacing={3}>
						<img src={selectedPost.image} alt={selectedPost.body} style={{ width: '100%' }} />
						<Typography>{selectedPost.body}</Typography>
					</Stack>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default Posts;
