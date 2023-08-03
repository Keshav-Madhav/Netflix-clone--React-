import React from 'react'
import Index from '../components/Index';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
    return (
        <>
            <Index/>
            <Row rowID="1" title='Popular' fetchURL={requests.requestPopular} />
            <Row rowID="2" title='Up Coming' fetchURL={requests.requestUpcoming} />
            <Row rowID="3" title='Trending' fetchURL={requests.requestTrending} />
            <Row rowID="4" title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowID="5" title='Horror' fetchURL={requests.requestHorror} />
            <Row rowID="6" title='Comedy' fetchURL={requests.requestComedy} />
            <Row rowID="7" title='Action' fetchURL={requests.requestAction} />
            <Row rowID="8" title='Serious' fetchURL={requests.requestSerious} />
            <Row rowID="9" title='Romance' fetchURL={requests.requestRomance} />
            <Row rowID="10" title='Marvel' fetchURL={requests.requestMarvel} />
            <Row rowID="11" title='DC' fetchURL={requests.requestDC} />
        </>
    )
}

export default Home;