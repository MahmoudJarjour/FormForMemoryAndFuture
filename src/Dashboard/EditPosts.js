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
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
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

export default function EditPosts() {
	// const [value, setValue] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);
	const [isAddMode, setIsAddMode] = useState(false);
	const [posts, setPosts] = useState([]);
	const [selectedPost, setSelectedPost] = useState({
		title: '',
		text: '',
	});
	const [selectedFile, setSelectedFile] = useState();

	const { t } = useTranslation();

	// const handleChange = (event, newValue) => {
	// 	setValue(newValue);
	// };

	const deletePost = async (post) => {
		console.log('deletePost', post);

		const storage = getStorage();

		// Create a reference to the file to delete
		const desertRef = ref(storage, post.image);

		// Delete the file
		await deleteObject(desertRef);
		await deleteDoc(doc(db, 'posts', post.id));

		setPosts(posts.filter((m) => m.id !== post.id));
	};

	const managePost = async () => {
		setIsLoading(true);
		let image = selectedPost.image;
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
			await setDoc(doc(db, 'posts', selectedPost.id), { ...selectedPost, image });
			setPosts(posts.map((post) => (post.id === selectedPost.id ? { ...selectedPost, image, updatedAt: new Date() } : post)));
		}

		if (isAddMode) {
			const payload = { ...selectedPost, image, createdAt: new Date(), updatedAt: new Date() };
			const newDocRef = await addDoc(collection(db, 'posts'), { ...selectedPost, image, createdAt: new Date(), updatedAt: new Date() });
			posts.push({ ...payload, id: newDocRef.id });
		}

		handleClose();
	};

	const handleClose = () => {
		setIsLoading(false);
		setSelectedFile(undefined);
		setSelectedPost({
			title: '',
			text: '',
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
		getDocs(collection(db, 'posts')).then((snap) => {
			setPosts(snap.docs.map((d) => ({ ...d.data(), id: d.id })));
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
										<Typography variant="h6">Image</Typography>
									</TableCell>
									<TableCell>
										<Typography variant="h6">Title</Typography>
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
								{posts.map((post) => (
									<TableRow key={post.id}>
										<TableCell>
											<Avatar src={post.image} alt={post.title} />
										</TableCell>
										<TableCell>
											<Typography>{post.title}</Typography>
										</TableCell>
										<TableCell>
											<IconButton
												onClick={() => {
													setIsEditMode(true);
													setSelectedPost(post);
												}}
											>
												<Edit />
											</IconButton>
										</TableCell>
										<TableCell>
											<IconButton
												color="error"
												onClick={() => {
													deletePost(post);
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
				<DialogTitle>{isEditMode ? 'Edit Post' : 'Add Post'}</DialogTitle>
				<Divider />
				<DialogContent>
					<Stack spacing={2}>
						<TextField
							fullWidth
							label="Title"
							onChange={({ target: { value } }) => setSelectedPost({ ...selectedPost, title: value })}
							value={selectedPost.title}
						/>
						<TextField
							fullWidth
							label="Text"
							multiline
							minRows={4}
							onChange={({ target: { value } }) => setSelectedPost({ ...selectedPost, text: value })}
							value={selectedPost.text}
						/>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Card variant="outlined">
								<CardContent>
									<img src={selectedPost.image} alt={selectedPost.name} style={{ width: '100%' }} />
								</CardContent>
							</Card>
							<input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
						</Stack>
					</Stack>
				</DialogContent>
				<DialogActions>
					<LoadingButton loading={isLoading} onClick={managePost}>
						Save
					</LoadingButton>
				</DialogActions>
			</Dialog>
		</Grid>
	);
}
