import { Button, FormControl, Stack, Grid, InputLabel, MenuItem, Select, TextField, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Membership = () => {
	const [news, setNews] = useState('');
	const handleChange = (event) => {
		setNews(event.target.value);
	};

	const [username, SetUsername] = useState('');

	const handleUserName = (event) => {
		SetUsername(event.target.value);
	};
	const [userEmail, SetUserEmail] = useState('');
	const handleUserEmail = (event) => {
		SetUserEmail(event.target.value);
	};

	const { t } = useTranslation();

	useEffect(() => {
		Aos.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
		});
	}, []);

	return (
		<Box name="MemberShip" py={10} sx={{ backgroundColor: '#F7F4F2' }}>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item data-aos="slide-up" xs={12}>
						<Typography variant="h3" color="#524fa1" fontWeight="600">
							{t('Membership')}
						</Typography>
					</Grid>

					<Grid item data-aos="fade-in" xs={12}>
						<Typography>{t('If you agree with the principles')}</Typography>
					</Grid>

					<Grid item data-aos="fade-in" xs={12}>
						<Stack direction="column" spacing={1}>
							<TextField required label={t('Enter your name')} value={username} onChange={handleUserName} variant="outlined" fullWidth />
							<TextField required label={t('Enter your Email')} value={userEmail} onChange={handleUserEmail} variant="outlined" fullWidth />
							<FormControl fullWidth required>
								<InputLabel>{t('News')}</InputLabel>
								<Select value={news} label="News *" onChange={handleChange}>
									<MenuItem value="">
										<em>{t('--- Please Choose ----')}</em>
									</MenuItem>
									<MenuItem value={10}>{t('Economic')}</MenuItem>
									<MenuItem value={20}>{t('Political')}</MenuItem>
									<MenuItem value={30}>{t('Weather news')}</MenuItem>
									<MenuItem value={40}>{t('Fashion')}</MenuItem>
									<MenuItem value={50}>{t('Art')}</MenuItem>
								</Select>
							</FormControl>
						</Stack>
					</Grid>
					<Grid item>
						<Button variant="contained" sx={{ backgroundColor: '#524fa1' }}>
							{t('Submit')}
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Membership;
