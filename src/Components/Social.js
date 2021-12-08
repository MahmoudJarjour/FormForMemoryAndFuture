import { IconButton, Link, Stack } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';

export default function Social({ data }) {
	return (
		<div>
			<Stack direction="row" spacing={2}>
				{data.facebook && (
					<IconButton>
						<Link href={data.facebook} target="_blank">
							<FacebookRoundedIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
						</Link>
					</IconButton>
				)}
				{data.instagram && (
					<IconButton>
						<Link href={data.instagram} target="_blank">
							<InstagramIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
						</Link>
					</IconButton>
				)}
				{data.twitter && (
					<IconButton>
						<Link href={data.twitter} target="_blank">
							<TwitterIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
						</Link>
					</IconButton>
				)}
				{data.youtube && (
					<IconButton>
						<Link href={data.youtube} target="_blank">
							<YoutubeIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
						</Link>
					</IconButton>
				)}
				{data.linkedin && (
					<IconButton>
						<Link href={data.linkedin} target="_blank">
							<LinkedInIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
						</Link>
					</IconButton>
				)}
				{data.tiktok && (
					<IconButton>
						<Link href={data.tiktok} target="_blank">
							<LinkedInIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
						</Link>
					</IconButton>
				)}
			</Stack>
		</div>
	);
}
