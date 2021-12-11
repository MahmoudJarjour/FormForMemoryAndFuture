import { collection, doc, getDoc, getDocs } from '@firebase/firestore';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutUs from '../Components/AboutUs';
import ContactUs from '../Components/ContactUs';
import FirstSection from '../Components/FirstSection';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Members from '../Components/Members';
import Membership from '../Components/Membership';
import Posts from '../Components/Posts';
import Video from '../Components/Video';
import { db } from '../firebase';

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({});

	const init = useCallback(async () => {
		setIsLoading(true);
		const videoRequest = await getDoc(doc(db, 'info', 'video'));
		const membersRequest = await getDocs(collection(db, 'members'));
		const listOfPostsRequest = await getDocs(collection(db, 'posts'));
		const dataRequest = await getDoc(doc(db, 'info', 'website'));

		setData({
			video: videoRequest.data(),
			listOfMembers: membersRequest.docs.map((item) => ({ ...item.data(), id: item.id })),
			listOfPosts: listOfPostsRequest.docs.map((item) => ({ ...item.data(), id: item.id })),
			...dataRequest.data(),
		});

		setIsLoading(false);
	}, []);

	useEffect(() => {
		init();
	}, [init]);
	const { t } = useTranslation();
	return (
		<>
			{isLoading ? (
				<>
					<Grid container direction="column" sx={{ minHeight: '100vh' }} justifyContent="center" alignItems="center">
						<Grid item xs={12}>
							<CircularProgress />
						</Grid>
						<Grid item xs={12}>
							<Typography>{t('loading')}</Typography>
						</Grid>
					</Grid>
				</>
			) : (
				<>
					<Header data={data} />
					<FirstSection data={data.header} />
					<Video data={data.video} />
					<Members data={data.members} members={data.listOfMembers} />
					<AboutUs data={data.about} />
					<Posts data={data.posts} posts={data.listOfPosts} />
					<Membership data={data.membership} />
					<ContactUs data={data.contact} />
					<Footer data={data.footer} />
				</>
			)}
		</>
	);
};

export default Home;
