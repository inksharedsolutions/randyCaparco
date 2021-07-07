import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Banner from '../components/banner';
import Author from '../components/author';
import MidBook from '../components/front-book';
import Rating from '../components/rating';
import FeaturedLogos from '../components/mid-main';
// import ParallaxBottom from '../components/parallax-bottom';



const IndexPage = (props) => (
	<Layout>
		<Helmet title="Home | Randy Caparco" />
		<Nav pathExt={props.path} />
		<Banner />
		<MidBook />
		<Rating/>
		<Author />
		{/* <ParallaxBottom /> */}
		<FeaturedLogos />
	</Layout>
);

export default IndexPage;
