import { Button, Card, CardContent, CardHeader, FormControl, Grid, Input, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContentInfo() {
	const [Title, setTitle] = useState('');

	const handleTitle = (event) => {
		setTitle(event.target.value);
	};

	const [Discription, setDescription] = useState('');
	const handleDiscription = (event) => {
		setDescription(event.target.value);
	};

	const [BlockName, SetBlockName] = useState('');
	const handleBlockName = (event) => {
		SetBlockName(event.target.value);
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
							{/*  image */}
							<Typography variant="h6">Choose an Image:</Typography>
							<label htmlFor="contained-button-file">
								<Input accept="image/*" id="contained-button-file" multiple type="file" />
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
							{/*  image */}
							<Typography variant="h6">Choose an Image:</Typography>
							<label htmlFor="contained-button-file">
								<Input accept="image/*" id="contained-button-file" multiple type="file" />
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
						</Stack>
					</CardContent>
				</Card>
			</Grid>

			{/* {About Us } */}

			<Grid item xs={6}>
				<Card>
					<CardHeader title="About US" />
					<CardContent>
						<Stack direction="column" spacing={2}>
							{/* title */}
							<Typography variant="h6">Enter The Title:</Typography>
							<TextField
								required
								id="standard-Title"
								label="Title of this Section"
								value={Title}
								onChange={handleTitle}
								variant="outlined"
								fullWidth
							/>
							<Typography variant="h6">Enter The Discription:</Typography>
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
													<Typography variant="h6">Enter The Title:</Typography>
													<TextField
														required
														id="standard-Title"
														label="Title of this Section"
														value={Title}
														onChange={handleTitle}
														variant="outlined"
														fullWidth
													/>
													<Typography variant="h6">Enter The Discription:</Typography>
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
										<Grid item xs={12}>
											<Typography variant="h6">Choose a Block to Modified:</Typography>
											<FormControl fullWidth required>
												<InputLabel id="demo-simple-select-required-label">Blocks</InputLabel>
												<Select
													labelId="demo-simple-select-required-label"
													id="demo-simple-select-required"
													value={BlockName}
													label="Block Name *"
													onChange={handleBlockName}
												>
													<MenuItem value="">
														<em>{t('--- Please Choose ----')}</em>
													</MenuItem>
													<MenuItem value={10}>Economic</MenuItem>
													<MenuItem value={20}>Political</MenuItem>
													<MenuItem value={30}>Weather news</MenuItem>
													<MenuItem value={40}>Fashion</MenuItem>
													<MenuItem value={50}>Art</MenuItem>
												</Select>
											</FormControl>
										</Grid>
										{/* {Delete Block} */}
										<Grid item xs={12}>
											<Typography variant="h6">Choose a Block to Delete:</Typography>
											<FormControl fullWidth required>
												<InputLabel id="demo-simple-select-required-label">Blocks</InputLabel>
												<Select
													labelId="demo-simple-select-required-label"
													id="demo-simple-select-required"
													value={BlockName}
													label="Block Name *"
													onChange={handleBlockName}
												>
													<MenuItem value="">
														<em>{t('--- Please Choose ----')}</em>
													</MenuItem>
													<MenuItem value={10}>Economic</MenuItem>
													<MenuItem value={20}>Political</MenuItem>
													<MenuItem value={30}>Weather news</MenuItem>
													<MenuItem value={40}>Fashion</MenuItem>
													<MenuItem value={50}>Art</MenuItem>
												</Select>
											</FormControl>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Stack>
					</CardContent>
				</Card>
			</Grid>

			<Grid item xs={6}>
				<Card>
					<CardHeader title="About US" />
					<CardContent>
						<Stack direction="column" spacing={2}>
							{/* title */}
							<Typography variant="h6">Enter The Title:</Typography>
							<TextField
								required
								id="standard-Title"
								label="Title of this Section"
								value={Title}
								onChange={handleTitle}
								variant="outlined"
								fullWidth
							/>
							<Typography variant="h6">Enter The Discription:</Typography>
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
													<Typography variant="h6">Enter The Title:</Typography>
													<TextField
														required
														id="standard-Title"
														label="Title of this Section"
														value={Title}
														onChange={handleTitle}
														variant="outlined"
														fullWidth
													/>
													<Typography variant="h6">Enter The Discription:</Typography>
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
										<Grid item xs={12}>
											<Typography variant="h6">Choose a Block to Modified:</Typography>
											<FormControl fullWidth required>
												<InputLabel id="demo-simple-select-required-label">Blocks</InputLabel>
												<Select
													labelId="demo-simple-select-required-label"
													id="demo-simple-select-required"
													value={BlockName}
													label="Block Name *"
													onChange={handleBlockName}
												>
													<MenuItem value="">
														<em>{t('--- Please Choose ----')}</em>
													</MenuItem>
													<MenuItem value={10}>Economic</MenuItem>
													<MenuItem value={20}>Political</MenuItem>
													<MenuItem value={30}>Weather news</MenuItem>
													<MenuItem value={40}>Fashion</MenuItem>
													<MenuItem value={50}>Art</MenuItem>
												</Select>
											</FormControl>
										</Grid>
										{/* {Delete Block} */}
										<Grid item xs={12}>
											<Typography variant="h6">Choose a Block to Delete:</Typography>
											<FormControl fullWidth required>
												<InputLabel id="demo-simple-select-required-label">Blocks</InputLabel>
												<Select
													labelId="demo-simple-select-required-label"
													id="demo-simple-select-required"
													value={BlockName}
													label="Block Name *"
													onChange={handleBlockName}
												>
													<MenuItem value="">
														<em>{t('--- Please Choose ----')}</em>
													</MenuItem>
													<MenuItem value={10}>Economic</MenuItem>
													<MenuItem value={20}>Political</MenuItem>
													<MenuItem value={30}>Weather news</MenuItem>
													<MenuItem value={40}>Fashion</MenuItem>
													<MenuItem value={50}>Art</MenuItem>
												</Select>
											</FormControl>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Stack>
					</CardContent>
				</Card>
			</Grid>

			{/* {Posts} */}

			{/* {Member Ship} */}

			{/* {contact us} */}

			{/* {social Icons} */}

			{/*  */}
		</Grid>
	);
}
