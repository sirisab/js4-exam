// Importera alla beroenden:
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import artworksRoutes from './routes/artworks-routes.mjs';
import shoppingcartRoutes from './routes/shoppingcart-routes.mjs';

// Starta upp tillgång till .env-filens konfig:
dotenv.config();

//Globala variabler:
const PORT = process.env.PORT || 5020;

// Få tag i express-applikationen:
const app = express();

//Aktivera middleware:
app.use(express.json());
app.use(cors());

app.use('/api/artworks', artworksRoutes);
app.use('/api/shoppingcart', shoppingcartRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
