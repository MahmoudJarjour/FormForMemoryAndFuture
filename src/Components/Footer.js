import { Container, Grid, IconButton, Stack, Typography, Link } from '@mui/material';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';

const Footer = ({ data }) => {
	const { t } = useTranslation();
	return (
		<Container name="Footer" sx={{ maxWidth: '100%' }}>
			<Grid container spacing={2} alignItems="center" mt={5}>
				<Grid item xs={12} md={2}>
					<img src="logo.png" alt="Form For Memory And Future" style={{ width: '100%' }} />
				</Grid>
				<Grid item xs={12} md={8} align="center" alignItems="center">
					<Typography variant="body2" color="text.secondary" align="center">
						{t('Copyright')}
						{' © '}
						<Link color="inherit" href="#">
							{t('Forum for Memory and Future')}
						</Link>{' '}
					</Typography>
				</Grid>
				<Grid item xs={12} md={2}>
					<Stack direction="row" spacing={2} justifyContent="center">
						{data.facebook && (
							<IconButton>
								<Link href={data.facebook} target="_blank">
									<FacebookRoundedIcon sx={{ color: '#524fa1' }} variant="outlined" fontSize="medium" />
								</Link>
							</IconButton>
						)}
						{data.instagram && (
							<IconButton>
								<Link href={data.instagram} target="_blank">
									<InstagramIcon sx={{ color: '#524fa1' }} variant="outlined" fontSize="medium" />
								</Link>
							</IconButton>
						)}
						{data.twitter && (
							<IconButton>
								<Link href={data.twitter} target="_blank">
									<TwitterIcon sx={{ color: '#524fa1' }} variant="outlined" fontSize="medium" />
								</Link>
							</IconButton>
						)}
						{data.youtube && (
							<IconButton>
								<Link href={data.youtube} target="_blank">
									<YoutubeIcon sx={{ color: '#524fa1' }} variant="outlined" fontSize="medium" />
								</Link>
							</IconButton>
						)}
						{data.linkedin && (
							<IconButton>
								<Link href={data.linkedin} target="_blank">
									<LinkedInIcon sx={{ color: '#524fa1' }} variant="outlined" fontSize="medium" />
								</Link>
							</IconButton>
						)}
						{data.tiktok && (
							<IconButton>
								<Link href={data.tiktok} target="_blank">
									<LinkedInIcon sx={{ color: '#524fa1' }} variant="outlined" fontSize="medium" />
								</Link>
							</IconButton>
						)}
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
