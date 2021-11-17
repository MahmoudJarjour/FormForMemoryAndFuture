import { Container } from '@mui/material';
import React from 'react';
import AboutUs from '../Components/AboutUs';
import ContactUs from '../Components/ContactUs';
import FirstSection from '../Components/FirstSection';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Members from '../Components/Members';
import Membership from '../Components/Membership';
import Posts from '../Components/Posts';
import Video from '../Components/Video';

const Home = () => {
	return (
		<>
			<Header />

			<FirstSection />
			<Video />
			<Members />
			<AboutUs />
			<Posts />
			<Membership />
			<ContactUs />
			<Footer />
		</>
	);
};

export default Home;
