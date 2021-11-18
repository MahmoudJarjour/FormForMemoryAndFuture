import { Button, Card, CardContent, CardHeader, FormControl, Grid, Input, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function ContentInfo() {
	const [FirstSectionEnglishTitle, SetFirstSectionEnglishTitle] = useState('');
	const handleFirstSectionEnglishTitle = (event) => {
		FirstSectionEnglishTitle(event.target.value);
	};

	const [FirstSectionArabicTitle, SetFirstSectionArabicTitle] = useState('');
	const handleFirstSectionArabicTitle = (event) => {
		FirstSectionArabicTitle(event.target.value);
	};

	const [FirstSectionEnglishDescription, SetFirstSectionEnglishDescription] = useState('');
	const handleFirstSectionEnglishDescription = (event) => {
		FirstSectionEnglishDescription(event.target.value);
	};

	const [FirstSectionArabicDescription, SetFirstSectionArabicDescription] = useState('');
	const handleFirstSectionArabicDescription = (event) => {
		FirstSectionArabicDescription(event.target.value);
	};

	const [Title, SetTitle] = useState('');

	const handleChangeTitle = (event) => {
		SetTitle(event.target.value);
	};

	const handleTitle = (event) => {
		SetTitle(event.target.value);
	};

	const [Discription, setDescription] = useState('');
	const handleDiscription = (event) => {
		setDescription(event.target.value);
	};

	const [BlockName, SetBlockName] = useState('');
	const handleBlockName = (event) => {
		SetBlockName(event.target.value);
	};

	const [Englishposttitle, SetEnglishpostTitle] = useState('');
	const handleEnglishPostTitle = (event) => {
		SetEnglishpostTitle(event.target.value);
	};

	const { t } = useTranslation();
	return (
		<Grid container spacing={2}>
			{/* {First Section} */}
			<Grid item xs={6}>
				<Card>
					<CardHeader title="First Section in English " />
					<CardContent>
						<Stack direction="column" spacing={2}>
							{/* title discription */}
							<Typography variant="h6">Enter The English Title:</Typography>
							<TextField
								required
								id="standard-Title"
								label="Title of this Section"
								value={FirstSectionEnglishTitle}
								onChange={handleFirstSectionEnglishTitle}
								variant="outlined"
								fullWidth
							/>
							<Typography variant="h6">Enter The English Discription:</Typography>
							<TextField
								required
								label="Enter Discription"
								value={FirstSectionEnglishDescription}
								onChange={handleFirstSectionEnglishDescription}
								variant="outlined"
								fullWidth
							/>
							{/*  image */}
							<Typography variant="h6">Choose an Image:</Typography>
							<label htmlFor="contained-button-file">
								<Input accept="image/*" multiple type="file" />
							</label>
						</Stack>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={6}>
				<Card>
					<CardHeader title="First Section in Arabic " />
					<CardContent>
						<Stack direction="column" spacing={2}>
							{/* title discription */}
							<Typography variant="h6">Enter The Arabic Title:</Typography>
							<TextField
								required
								id="standard-Title"
								label="Title of this Section"
								value={FirstSectionArabicTitle}
								onChange={handleFirstSectionArabicTitle}
								variant="outlined"
								fullWidth
							/>
							<Typography variant="h6">Enter The Arabic Discription:</Typography>
							<TextField
								required
								label="Enter Discription"
								value={FirstSectionArabicDescription}
								onChange={FirstSectionArabicDescription}
								variant="outlined"
								fullWidth
							/>
							{/*  image */}
							<Typography variant="h6">Choose an Image:</Typography>
							<label htmlFor="contained-button-file">
								<Input accept="image/*" multiple type="file" />
							</label>
						</Stack>
					</CardContent>
				</Card>
			</Grid>

			{/* {Members} */}

			<Grid item xs={6}>
				<Card>
					<CardHeader title="Members in English" />
					<CardContent>
						<Stack direction="column" spacing={2}>
							{/* title */}
							<Typography variant="h6">Enter The English Name:</Typography>
							<TextField required label="Title of this Section" value={Title} onChange={handleTitle} variant="outlined" fullWidth />
						</Stack>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={6}>
				<Card>
					<CardHeader title="Members in Arabic" />
					<CardContent>
						<Stack direction="column" spacing={2}>
							{/* title */}
							<Typography variant="h6">Enter The Arabic Name:</Typography>
							<TextField required label="Title of this Section" value={Title} onChange={handleTitle} variant="outlined" fullWidth />
						</Stack>
					</CardContent>
				</Card>
			</Grid>

			{/* {About Us } */}

			<Grid item xs={6}>
				<Card>
					<CardHeader title="About US In English" />
					<CardContent>
						<Stack direction="column" spacing={2}>
							{/* title */}
							<Typography variant="h6">Enter The English Title:</Typography>
							<TextField
								required
								id="standard-Title"
								label="Title of this Section"
								value={Title}
								onChange={handleTitle}
								variant="outlined"
								fullWidth
							/>
							<Typography variant="h6">Enter The English Discription:</Typography>
							<TextField
								required
								id="Standerd-Discription"
								label="Enter Discription"
								value={Discription}
								onChange={handleDiscription}
								variant="outlined"
								fullWidth
							/>
						</Stack>

						<Stack direction="column" spacing={2}>
							<Grid container spacing={3} mt={3} justifyContent="center" alignItems="center">
								<Button variant="contained" component="span">
									Add Block
								</Button>

								<Button variant="contained" component="span">
									Edit Block
								</Button>
								<Button variant="contained" component="span">
									Delete Block
								</Button>

								<Grid item xs={12}>
									<Grid container spacing={2}>
										<Grid item xs={12}>
											<Typography variant="h6">Enter the Block data:</Typography>
										</Grid>
										{/* {Add Block} */}
										<Grid item xs={12} md={6}>
											<Grid container spacing={1}>
												<Grid item xs={12}>
													<Typography variant="h6">Enter The English Title:</Typography>
													<TextField
														required
														id="standard-Title"
														label="Title of this Section"
														value={Title}
														onChange={handleTitle}
														variant="outlined"
														fullWidth
													/>
													<Typography variant="h6">Enter The English Discription:</Typography>
													<TextField
														required
														id="Standerd-Discription"
														label="Enter Discription"
														value={Discription}
														onChange={handleDiscription}
														variant="outlined"
														fullWidth
													/>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12} md={6}>
											<Typography variant="h6">Choose an icon:</Typography>
											<label htmlFor="contained-button-file">
												<Input accept="image/*" id="contained-button-file" multiple type="file" />
											</label>
										</Grid>

										{/* {Edit Block} */}

										{/* {Delete Block} */}
									</Grid>
								</Grid>
							</Grid>
						</Stack>
					</CardContent>
				</Card>
			</Grid>

			<Grid item xs={6}>
				<Card>
					<CardHeader title="About US In Arabic" />
					<CardContent>
						<Stack direction="column" spacing={2}>
							{/* title */}
							<Typography variant="h6">Enter The Arabic Title:</Typography>
							<TextField
								required
								id="standard-Title"
								label="Title of this Section"
								value={Title}
								onChange={handleTitle}
								variant="outlined"
								fullWidth
							/>
							<Typography variant="h6">Enter The Arabic Discription:</Typography>
							<TextField
								required
								id="Standerd-Discription"
								label="Enter Discription"
								value={Discription}
								onChange={handleDiscription}
								variant="outlined"
								fullWidth
							/>
						</Stack>

						<Stack direction="column" spacing={2}>
							<Grid container spacing={3} mt={3} justifyContent="center" alignItems="center">
								<Button variant="contained" component="span">
									Add Block
								</Button>

								<Button variant="contained" component="span">
									Edit Block
								</Button>
								<Button variant="contained" component="span">
									Delete Block
								</Button>

								<Grid item xs={12}>
									<Grid container spacing={2}>
										<Grid item xs={12}>
											<Typography variant="h6">Enter the Block data:</Typography>
										</Grid>
										{/* {Add Block} */}
										<Grid item xs={12} md={6}>
											<Grid container spacing={1}>
												<Grid item xs={12}>
													<Typography variant="h6">Enter The Arabic Title:</Typography>
													<TextField
														required
														id="standard-Title"
														label="Title of this Section"
														value={Title}
														onChange={handleTitle}
														variant="outlined"
														fullWidth
													/>
													<Typography variant="h6">Enter The Arabic Discription:</Typography>
													<TextField
														required
														id="Standerd-Discription"
														label="Enter Discription"
														value={Discription}
														onChange={handleDiscription}
														variant="outlined"
														fullWidth
													/>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12} md={6}>
											<Typography variant="h6">Choose an icon:</Typography>
											<label htmlFor="contained-button-file">
												<Input accept="image/*" id="contained-button-file" multiple type="file" />
											</label>
										</Grid>

										{/* {Edit Block} */}

										{/* {Delete Block} */}
									</Grid>
								</Grid>
							</Grid>
						</Stack>
					</CardContent>
				</Card>
			</Grid>

			{/* {Posts} */}

			<Grid item xs={6}>
				<Card>
					<CardHeader title="Posts in English " />
					<CardContent>
						<Stack direction="column" spacing={2}>
							{/* title discription */}
							<Typography variant="h6">Enter The English Post Title:</Typography>
							<TextField required label="Title of this Section" value={Title} onChange={handleEnglishPostTitle} variant="outlined" fullWidth />
							<Typography variant="h6">Enter The English Post Discription:</Typography>
							<TextareaAutosize required minRows={6} value={Discription} onChange={handleDiscription} variant="outlined" fullWidth />
							{/*  image */}
							<Typography variant="h6">Choose An Image For This Post:</Typography>
							<label htmlFor="contained-button-file">
								<Input accept="image/*" id="contained-button-file" multiple type="file" />
							</label>
						</Stack>
					</CardContent>
				</Card>
			</Grid>

			{/* {Member Ship} */}

			{/* {contact us} */}

			{/* {social Icons} */}

			{/*  */}
		</Grid>
	);
}
