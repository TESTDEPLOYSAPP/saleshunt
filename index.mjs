import * as express from 'express';
import * as test from './firebasewrite.mjs';
const app = express();
app.get('/', async (req, res) => {
    const response = await test();
    res.send(response);
});
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("listening on ${PORT}")
})