import { Card, CardContent, CardMedia, Container, Grid, Link, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useTheme } from '@emotion/react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import i18next from 'i18next';
import { chunk } from 'lodash';

const Members = ({ data, members }) => {
	const [divider, setDivider] = useState(1);

	useEffect(() => {
		Aos.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
		});
	}, []);

	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		setDivider(isMobileView ? 1 : 3);
	}, [isMobileView]);

	return (
		<Box name="Members" sx={{ backgroundColor: '#ECEAE8' }} pt={15} pb={15}>
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item data-aos="slide-up" xs={12}>
						<Typography variant="h3" color="#524fa1" fontWeight="600">
							{data[i18next.language].title}
						</Typography>
					</Grid>

					<Grid item data-aos="fade-in" xs={12}>
						<Carousel>
							{chunk(members, divider).map((slide, index) => (
								<Grid container spacing={5} key={'page' + index}>
									{slide.map((item) => (
										<Grid item data-aos="flip-down" md={4} xs={12} key={item.id}>
											<Card variant="none" sx={{ backgroundColor: '#ECEAE8' }}>
												<Link href={item.website} target="_blank">
													<CardMedia style={{ paddingTop: '100%', borderRadius: '100%' }} image={item.image} />
												</Link>
												<CardContent>
													<Typography align="center">{item.name}</Typography>
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
	);
};

export default Members;
