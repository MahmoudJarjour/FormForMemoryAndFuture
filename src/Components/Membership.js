import { Button, FormControl, Stack, Grid, InputLabel, MenuItem, Select, TextField, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Aos from 'aos';
import 'aos/dist/aos.css';
import i18next from 'i18next';

const Membership = ({ data }) => {
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
		<Box name="MemberShip" py={15} sx={{ backgroundColor: '#F7F4F2' }}>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item data-aos="slide-up" xs={12}>
						<Typography variant="h3" color="#524fa1" fontWeight="600">
							{data[i18next.language].title}
						</Typography>
					</Grid>

					<Grid item data-aos="fade-in" xs={12}>
						<Typography>{data[i18next.language].description}</Typography>
					</Grid>

					<Grid item data-aos="fade-in" xs={12}>
						<Stack direction="column" spacing={1}>
							<TextField required label={data[i18next.language].name} value={username} onChange={handleUserName} variant="outlined" fullWidth />
							<TextField
								required
								label={data[i18next.language].email}
								value={userEmail}
								onChange={handleUserEmail}
								variant="outlined"
								fullWidth
							/>
							<FormControl fullWidth required>
								<InputLabel>{t('News')}</InputLabel>
								<Select value={news} label={data[i18next.language].type} onChange={handleChange}>
									<MenuItem value="">
										<em>{t('--- Please Choose ----')}</em>
									</MenuItem>
									{data[i18next.language].types.map((item) => (
										<MenuItem key={item} value={item}>
											{item}
										</MenuItem>
									))}
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
