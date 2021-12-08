import { Card, CardActionArea, CardMedia, Container, Dialog, DialogContent, DialogTitle, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import faker from 'faker';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Posts = ({ data, posts }) => {
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

	const openPost = (post) => {
		setSelectedPost(post);
		setIsDialogOpen(true);
	};

	return (
		<>
			<Box name="Posts" sx={{ backgroundColor: '#ECEAE8' }} py={15}>
				<Container maxWidth="lg">
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h3" color="#524fa1" fontWeight="600">
								{t('POSTS')}
							</Typography>
						</Grid>

						{posts.map((post) => (
							<Grid item data-aos="flip-down" md={4} xs={12} key={post.id}>
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
					<Stack direction="column" spacing={3} alignItems="center" justifyContent="center">
						<img src={selectedPost.image} alt={selectedPost.text} style={{ width: '30%' }} />
						<Typography>{selectedPost.text}</Typography>
					</Stack>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default Posts;
