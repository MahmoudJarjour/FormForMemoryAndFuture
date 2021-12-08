import { Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system';
import i18next from 'i18next';

const ContactUs = ({ data }) => {
	return (
		<Box name="ContactUs" py={15} sx={{ backgroundColor: '#262153' }}>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12} md={4}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography variant="h3" color="white" fontWeight="600">
									{data[i18next.language].title}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography color="white">{data[i18next.language].address}</Typography>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} md={4}>
						<Grid container spacing={2}>
							<Grid item xs={1}>
								<AccessTimeIcon variant="outlined" sx={{ color: 'white' }} />
							</Grid>
							<Grid item xs={12} md={11}>
								<Typography variant="h5" color="white">
									{data[i18next.language].openingHoursTitle}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Divider />
							</Grid>
							<Grid item xs={12} color="white">
								{data[i18next.language].openingDays}
							</Grid>
							<Grid item xs={12} color="white">
								{data[i18next.language].openingHours}
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} md={4}>
						<Grid container spacing={2}>
							<Grid item xs={1}>
								<MailIcon variant="outlined" sx={{ color: 'white' }} />
							</Grid>
							<Grid item xs={11}>
								<Typography variant="h5" color="white">
									{data[i18next.language].contactInfoTitle}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Divider />
							</Grid>
							<Grid item xs={12} color="white">
								{data[i18next.language].phone}
							</Grid>
							<Grid item xs={12} color="white">
								{data[i18next.language].email}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ContactUs;
