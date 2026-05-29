import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {

    const newMsg = req.body;

    fs.readFile('messages.json', 'utf-8', (err, data) => {

        let messages = [];

        if (!err && data) {
            messages = JSON.parse(data);
        }

        messages.push(newMsg);

        fs.writeFile(
            'messages.json',
            JSON.stringify(messages, null, 2),
            (err) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Error saving message'
                    });
                }

                res.json({
                    message: 'Message saved successfully'
                })
            }
        );
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});