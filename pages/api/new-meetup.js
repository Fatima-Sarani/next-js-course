import { MongoClient } from 'mongodb';
// /api/new-meetup 
//POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect('mongodb+srv://sarani:s%40rani@cluster0.bajznnk.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db("s");

        const meetupCollection =db.collection('meetup');

        const result = await meetupCollection.insertOne(data);
        console.log(result);    

        client.close();

        res.status(200).json({message:'Meetup inserted'});
    }

}
export default handler;