import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: '../assets/images/stald.jpg',
        address: 'Some address 5,12345 Some City',
        description: 'this is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: '../assets/images/Foyeranbau.jpg',
        address: 'Some address 5,12345 Some City',
        description: 'this is a first meetup!'
    },
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
    //fetch data from an Api

    MongoClient.connect();
    return {
        props: {
            meetups:DUMMY_MEETUPS
        },
        revalidate:10
    };
}

export default HomePage;