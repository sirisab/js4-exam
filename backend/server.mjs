// Importera alla beroenden:
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import artworks from './routes/artworks-routes.mjs';

// Starta upp tillgång till .env-filens konfig:
dotenv.config();

//Globala variabler:
const PORT = process.env.PORT || 5020;

// Få tag i express-applikationen:
const app = express();

//Aktivera middleware:
app.use(express.json());
app.use(cors());

app.use('/api/artworks', artworks);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
