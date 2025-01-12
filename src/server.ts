import express from 'express';
import userRoutes from './routes/userRoutes'; // Import user routes
import nightRoutes from './routes/nightRoutes'; // Import night routes
import inviteRoutes from './routes/inviteRoutes'; // Import invite routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Route handlers
app.use('/users', userRoutes); // Routes for users
app.use('/nights', nightRoutes); // Routes for nights
app.use('/invites', inviteRoutes); // Routes for invites

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
