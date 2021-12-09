import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from '@firebase/storage';
import { LoadingButton } from '@mui/lab';
import { Card, CardContent, Grid, Input, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

export default function EditFirstSection({ isLoading, defaultValue, onSubmit }) {
	const { t } = useTranslation();
	const [loading, setLoading] = useState();
	const [images, setImages] = useState({
		en: '',
		ar: '',
	});

	const [section, setSection] = useState(defaultValue);

	const onChangeText = (lang, property, value) => {
		setSection({
			...section,
			[lang]: {
				...section[lang],
				[property]: value,
			},
		});
	};

	const content = [
		{
			key: 'en',
			title: t('English Title:'),
			titleLabel: t('English Title:'),
			description: t('English Description:'),
			descriptionLabel: t('English Description:'),
			imageTitle: t('Upload Image'),
		},
		{
			key: 'ar',
			title: t('Arabic Title:'),
			titleLabel: t('Arabic Title:'),
			description: t('Arabic Description:'),
			descriptionLabel: t('Arabic Description:'),
			imageTitle: t('Upload Image'),
		},
	];

	const onSave = async () => {
		setLoading(true);
		let englishImage = section.en.image;
		let arabicImage = section.ar.image;
		if (images.en) {
			englishImage = await uploadFile(images.en);
			section.en.image && (await deleteFile(section.en.image));
			setImages({ ...images, en: '' });
		}
		if (images.ar) {
			arabicImage = await uploadFile(images.ar);
			section.ar.image && (await deleteFile(section.ar.image));
			setImages({ ...images, ar: '' });
		}
		setSection({ en: { ...section.en, image: englishImage }, ar: { ...section.ar, image: arabicImage } });
		// send payload
		onSubmit({ header: { en: { ...section.en, image: englishImage }, ar: { ...section.ar, image: arabicImage } } });
		setLoading(false);
	};

	const deleteFile = async (link) => {
		return new Promise(async (resolve, reject) => {
			const storage = getStorage();

			// Create a reference to the file to delete
			const desertRef = ref(storage, link);

			// Delete the file
			await deleteObject(desertRef);
			resolve();
		});
	};

	const uploadFile = async (file) => {
		return new Promise((resolve, reject) => {
			const storage = getStorage();

			// Upload file and metadata to the object 'images/mountains.jpg'
			const extension = file.name.substring(file.name.lastIndexOf('.') + 1);
			const storageRef = ref(storage, `images/${uuidv4()}.${extension}`);
			const uploadTask = uploadBytesResumable(storageRef, file, {});

			// Listen for state changes, errors, and completion of the upload.
			return uploadTask.on(
				'state_changed',
				(snapshot) => {
					// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done');
				},
				(error) => {
					console.log('upload file error', error);
					reject(error);
				},
				async () => {
					// Upload completed successfully, now we can get the download URL
					const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
					resolve(downloadURL);
				}
			);
		});
	};

	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">{t('Editing First Section')}</Typography>
						</Grid>
						{section &&
							section.en &&
							content.map((item) => (
								<Grid key={item.key} item xs={12} md={6}>
									<Stack direction="column" spacing={2}>
										<Typography>{item.title}</Typography>
										<TextField
											required
											label={item.titleLabel}
											value={section[item.key].title}
											onChange={({ target: { value } }) => onChangeText(item.key, 'title', value)}
											variant="outlined"
											fullWidth
										/>

										<Typography>{item.description}</Typography>
										<TextField
											required
											label={item.descriptionLabel}
											value={section[item.key].description}
											onChange={({ target: { value } }) => onChangeText(item.key, 'description', value)}
											variant="outlined"
											fullWidth
										/>
										<Typography variant="h6">{item.imageTitle}</Typography>
										<img src={section[item.key].image} alt={section[item.key].title} />
										<Input
											accept="image/*"
											multiple
											type="file"
											{...(images[item.key] ? {} : { value: '' })}
											onChange={({ target: { files } }) => setImages({ ...images, [item.key]: files[0] })}
										/>
									</Stack>
								</Grid>
							))}
						<Grid item xs={12}>
							<LoadingButton loading={isLoading || loading} variant="outlined" onClick={onSave}>
								{t('Submit')}
							</LoadingButton>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
}
