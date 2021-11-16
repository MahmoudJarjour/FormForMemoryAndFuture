import { Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
	const { t } = useTranslation();
	return (
		<Box py={10} sx={{ backgroundColor: '#262153' }}>
			<Container minWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12} md={4}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography variant="h3" color="white" fontWeight="600">
									{t('Contact us')}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography color="white">{t('address')}</Typography>
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
									{t('OPENING HOURS')}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Divider />
							</Grid>
							<Grid item xs={12} color="white">
								{t('Monday - Thursday')}
							</Grid>
							<Grid item xs={12} color="white">
								12pm - 10pm
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
									{t('CONTACT INFO')}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Divider />
							</Grid>
							<Grid item xs={12} color="white">
								+961 1 123 456
							</Grid>
							<Grid item xs={12} color="white">
								memoryfuturelb@gmail.com
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ContactUs;
