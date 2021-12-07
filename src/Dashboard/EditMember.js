import {
	Avatar,
	Card,
	CardContent,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	Grid,
	IconButton,
	Stack,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Tabs,
	TextField,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from '@firebase/firestore';
import { db } from '../firebase';
import { AddCircleOutline, Delete, Edit } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from '@firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function TabPanel(props) {
	const { children, value, index } = props;

	return (
		value === index && (
			<Grid item xs={12}>
				{children}
			</Grid>
		)
	);
}

export default function EditMember() {
	// const [value, setValue] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);
	const [isAddMode, setIsAddMode] = useState(false);
	const [members, setMembers] = useState([]);
	const [selectedMember, setSelectedMember] = useState({
		name: '',
		website: '',
	});
	const [selectedFile, setSelectedFile] = useState();

	const { t } = useTranslation();

	// const handleChange = (event, newValue) => {
	// 	setValue(newValue);
	// };

	const deleteMember = async (member) => {
		console.log('deleteMember', member);

		const storage = getStorage();

		// Create a reference to the file to delete
		const desertRef = ref(storage, member.image);

		// Delete the file
		await deleteObject(desertRef);
		await deleteDoc(doc(db, 'members', member.id));

		setMembers(members.filter((m) => m.id !== member.id));
	};

	const manageMember = async () => {
		setIsLoading(true);
		let image = selectedMember.image;
		if (selectedFile) {
			if (image) {
				const storage = getStorage();
				// Create a reference to the file to delete
				const imageToDeleteRef = ref(storage, image);
				// Delete the file
				await deleteObject(imageToDeleteRef);
			}

			image = await uploadFile(selectedFile);
		}

		if (isEditMode) {
			await setDoc(doc(db, 'members', selectedMember.id), { ...selectedMember, image });
			setMembers(members.map((member) => (member.id === selectedMember.id ? { ...selectedMember, image, updatedAt: new Date() } : member)));
		}

		if (isAddMode) {
			const payload = { ...selectedMember, image, createdAt: new Date(), updatedAt: new Date() };
			const newDocRef = await addDoc(collection(db, 'members'), { ...selectedMember, image, createdAt: new Date(), updatedAt: new Date() });
			members.push({ ...payload, id: newDocRef.id });
		}

		handleClose();
	};

	const handleClose = () => {
		setIsLoading(false);
		setSelectedFile(undefined);
		setSelectedMember({
			name: '',
			website: '',
		});

		setIsEditMode(false);
		setIsAddMode(false);
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

	useEffect(() => {
		getDocs(collection(db, 'members')).then((snap) => {
			setMembers(snap.docs.map((d) => ({ ...d.data(), id: d.id })));
			setIsLoading(false);
		});
	}, []);

	return (
		<Grid container spacing={2} justifyContent="flex-end">
			<Grid item>
				<IconButton onClick={() => setIsAddMode(true)}>
					<AddCircleOutline />
				</IconButton>
			</Grid>
			<Grid item xs={12}>
				<Card>
					<CardContent>
						<Table size="small">
							<TableHead>
								<TableRow>
									<TableCell>
										<Typography variant="h6">Picture</Typography>
									</TableCell>
									<TableCell>
										<Typography variant="h6">Name</Typography>
									</TableCell>
									<TableCell>
										<Typography variant="h6">Edit</Typography>
									</TableCell>
									<TableCell>
										<Typography variant="h6">Delete</Typography>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{members.map((member) => (
									<TableRow key={member.id}>
										<TableCell>
											<Avatar src={member.image} alt={member.name} />
										</TableCell>
										<TableCell>
											<Typography>{member.name}</Typography>
										</TableCell>
										<TableCell>
											<IconButton
												onClick={() => {
													setIsEditMode(true);
													setSelectedMember(member);
												}}
											>
												<Edit />
											</IconButton>
										</TableCell>
										<TableCell>
											<IconButton
												color="error"
												onClick={() => {
													deleteMember(member);
												}}
											>
												<Delete />
											</IconButton>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</Grid>
			<Dialog open={isEditMode || isAddMode} fullWidth onClose={handleClose}>
				<DialogTitle>{isEditMode ? 'Edit Member' : 'Add Member'}</DialogTitle>
				<Divider />
				<DialogContent>
					<Stack spacing={2}>
						<TextField
							fullWidth
							label="Name"
							onChange={({ target: { value } }) => setSelectedMember({ ...selectedMember, name: value })}
							value={selectedMember.name}
						/>
						<TextField
							fullWidth
							label="Link"
							onChange={({ target: { value } }) => setSelectedMember({ ...selectedMember, website: value })}
							value={selectedMember.website}
						/>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Avatar src={selectedMember.image} alt={selectedMember.name} />
							<input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
						</Stack>
					</Stack>
				</DialogContent>
				<DialogActions>
					<LoadingButton loading={isLoading} onClick={manageMember}>
						Save
					</LoadingButton>
				</DialogActions>
			</Dialog>
			{/* <Grid item xs={12} mt={2}>
				<Card>
					<Tabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange}>
						<Tab label={t('Add Member')} icon={<AddCircleOutlineOutlinedIcon />} value={0} />
						<Tab label={t('Update Member')} icon={<ModelTrainingOutlinedIcon />} value={1} />
						<Tab label={t('View Member')} icon={<GridViewOutlinedIcon />} value={2} />
					</Tabs>
				</Card>
			</Grid>

			<TabPanel value={value} index={0}>
				<AddMember />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<manageMember />
			</TabPanel>

			<TabPanel value={value} index={2}>
				<ViewMember />
			</TabPanel> */}
		</Grid>
	);
}
