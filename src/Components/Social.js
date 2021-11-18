import { IconButton, Link, Stack } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';

export default function Social() {
	return (
		<div>
			<Stack direction="row" spacing={2}>
				<IconButton>
					<Link href="https://www.facebook.com/pg/memoryfuturelb/posts/" target="_blank">
						<FacebookRoundedIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
					</Link>
				</IconButton>
				<IconButton>
					<Link href="https://www.instagram.com/" target="_blank">
						<InstagramIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
					</Link>
				</IconButton>
				<IconButton>
					<Link href="https://twitter.com/" target="_blank">
						<TwitterIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
					</Link>
				</IconButton>
			</Stack>
		</div>
	);
}
