import { Button, Card, CardContent, Grid, Input, Stack, Tab, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
export default function CreatePost() {
	const [title, SetTitle] = useState('');
	const handleTitle = (event) => {
		SetTitle(event.target.value);
	};

	const [Discription, SetDiscription] = useState('');
	const handleDiscription = (event) => {
		SetDiscription(event.target.value);
	};
	return (
		<Card variant="none">
			<CardContent>
				<Grid container spacing={2} mt={2}>
					<Grid item xs={12}>
						<Stack direction="column" spacing={2}>
							<Typography variant="h6">Title</Typography>
							<TextField required label="Enter Member name" value={title} onChange={handleTitle} variant="outlined" fullWidth />

							<Typography variant="h6">Discription:</Typography>
							<TextareaAutosize
								aria-label="minimum height"
								minRows={5}
								placeholder="Discription"
								value={Discription}
								onChange={handleDiscription}
							/>

							<Typography variant="h6">Upload</Typography>
							<label htmlFor="contained-button-file">
								<Input accept="image/*" id="contained-button-file" multiple type="file" />
							</label>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" component="span">
							Create
						</Button>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
