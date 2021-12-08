import { LoadingButton } from '@mui/lab';
import { Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function EditSocialIcons({ isLoading, onSubmit, defaultValue }) {
	const { t } = useTranslation();

	const [section, setSection] = useState(defaultValue);

	return (
		<Grid container spacing={2} justifyContent="center" alignItems="center">
			<Grid item xs={12}>
				<Card>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography variant="h6">{t('Editing Icons Section')}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Stack direction="column" spacing={2}>
									<Typography>Facebook</Typography>
									<TextField
										value={section.facebook}
										onChange={({ target: { value } }) => setSection({ ...section, facebook: value })}
										variant="outlined"
										fullWidth
									/>
									<Typography>Instagram</Typography>
									<TextField
										value={section.instagram}
										onChange={({ target: { value } }) => setSection({ ...section, instagram: value })}
										variant="outlined"
										fullWidth
									/>
									<Typography>Twitter</Typography>
									<TextField
										value={section.twitter}
										onChange={({ target: { value } }) => setSection({ ...section, twitter: value })}
										variant="outlined"
										fullWidth
									/>
									<Typography>Youtube</Typography>
									<TextField
										value={section.youtube}
										onChange={({ target: { value } }) => setSection({ ...section, youtube: value })}
										variant="outlined"
										fullWidth
									/>
									<Typography>LinkedIn</Typography>
									<TextField
										value={section.linkedin}
										onChange={({ target: { value } }) => setSection({ ...section, linkedin: value })}
										variant="outlined"
										fullWidth
									/>
									<Typography>TikTok</Typography>
									<TextField
										value={section.tiktok}
										onChange={({ target: { value } }) => setSection({ ...section, tiktok: value })}
										variant="outlined"
										fullWidth
									/>
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<LoadingButton loading={isLoading} variant="outlined" onClick={() => onSubmit({ footer: section })}>
									{t('Update')}
								</LoadingButton>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
