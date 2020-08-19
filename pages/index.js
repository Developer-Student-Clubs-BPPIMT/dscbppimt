import Head from 'next/head'
import { Container, Grid, Typography} from '@material-ui/core';
import Layout from '../components/layout';
import Header from '../components/header';
import { AboutCardView, ContactCardView } from '../components/cardView';


export default function Index() {
  return (
    <Layout>
      <Head>
        <title>DSC BPPIMT</title>
      </Head>
      <Header />
      <AboutCardView />
      <Container style={{height : "30em"}}><div></div></Container>
      <ContactCardView />
    </Layout>
  );
}
