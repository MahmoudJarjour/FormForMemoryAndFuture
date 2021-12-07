import { Card, CardContent, CardMedia, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import { useTranslation } from 'react-i18next';
import { doc, getDoc, setDoc } from '@firebase/firestore';
import { db } from '../firebase';
import { LoadingButton } from '@mui/lab';

export default function EditVideo() {
	const [enVideoUrl, setEnVideoUrl] = useState('');
	const [arVideoUrl, setArVideoUrl] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const handleEnVideoUrl = (event) => {
		setEnVideoUrl(event.target.value);
	};

	const handleArViewUrl = (event) => {
		setArVideoUrl(event.target.value);
	};

	const onSave = async () => {
		setIsLoading(true);
		await setDoc(doc(db, 'info', 'video'), {
			ar: arVideoUrl,
			en: enVideoUrl,
		});
		setIsLoading(false);
	};

	useEffect(() => {
		getDoc(doc(db, 'info', 'video')).then((snap) => {
			setArVideoUrl(snap.data().ar);
			setEnVideoUrl(snap.data().en);
			setIsLoading(false);
		});
	}, []);

	const { t } = useTranslation();

	return (
		<Grid container spacing={2} justifyContent="center" alignItems="center">
			<Grid item xs={12}>
				<Card>
					<CardContent>
						<Grid container spacing={2} justifyContent="flex-end">
							<Grid item md={6} xs={12}>
								<Stack spacing={2}>
									<Typography variant="h6">{t('English Video:')}</Typography>
									<TextField
										disabled={isLoading}
										label={t('Enter URL Of Video')}
										value={enVideoUrl}
										onChange={handleEnVideoUrl}
										variant="outlined"
										fullWidth
									/>
									<CardMedia
										style={{ minHeight: 300, position: 'relative', width: '100%' }}
										component="iframe"
										frameBorder={0}
										title="Form For Memory And Future"
										src={enVideoUrl}
									/>
								</Stack>
							</Grid>
							<Grid item xs={12} md={6}>
								<Stack spacing={2}>
									<Typography variant="h6">{t('Arabic Video:')}</Typography>
									<TextField
										disabled={isLoading}
										label={t('Enter URL Of Video')}
										value={arVideoUrl}
										onChange={handleArViewUrl}
										variant="outlined"
										fullWidth
									/>
									<CardMedia
										style={{ minHeight: 300, position: 'relative', width: '100%' }}
										component="iframe"
										frameBorder={0}
										title="Form For Memory And Future"
										src={arVideoUrl}
									/>
								</Stack>
							</Grid>
							<Grid item>
								<LoadingButton loading={isLoading} onClick={onSave} variant="outlined" startIcon={<UpdateOutlinedIcon />}>
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
