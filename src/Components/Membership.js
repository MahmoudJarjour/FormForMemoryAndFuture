import { Button, FormControl, Stack, Grid, InputLabel, MenuItem, Select, TextField, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Membership = () => {
	const [news, setNews] = useState('');
	const handleChange = (event) => {
		setNews(event.target.value);
	};

	const { t } = useTranslation();

	return (
		<Box py={10} sx={{ backgroundColor: '#F7F4F2' }}>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h3" color="#524fa1" fontWeight="600">
							{t('Membership')}
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<Typography>{t('If you agree with the principles')}</Typography>
					</Grid>

					<Grid item xs={12}>
						<Stack direction="column" spacing={1}>
							<TextField required id="standard-Name" label={t('Enter your name')} variant="outlined" fullWidth />
							<TextField required id="Standerd-Email" label={t('Enter your Email')} variant="outlined" fullWidth />
							<FormControl fullWidth required>
								<InputLabel id="demo-simple-select-required-label">{t('News')}</InputLabel>
								<Select
									labelId="demo-simple-select-required-label"
									id="demo-simple-select-required"
									value={news}
									label="News *"
									onChange={handleChange}
								>
									<MenuItem value="">
										<em>{t('--- Please Choose ----')}</em>
									</MenuItem>
									<MenuItem value={10}>Economic</MenuItem>
									<MenuItem value={20}>Political</MenuItem>
									<MenuItem value={30}>Weather news</MenuItem>
									<MenuItem value={40}>Fashion</MenuItem>
									<MenuItem value={50}>Art</MenuItem>
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
