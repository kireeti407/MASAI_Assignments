const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route files
const userRoutes = require('./routes/user.routes');
const boardRoutes = require('./routes/board.routes');
const taskRoutes = require('./routes/task.routes');
const activityRoutes = require('./routes/activity.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Set up server for socket.io
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', // Be more specific in production
        methods: ['GET', 'POST']
    }
});

// Make io accessible to our router
app.set('socketio', io);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('join-board', (boardId) => {
        socket.join(boardId);
        console.log(`User joined board room: ${boardId}`);
    });

    socket.on('leave-board', (boardId) => {
        socket.leave(boardId);
        console.log(`User left board room: ${boardId}`);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Mount routers
app.use('/api/users', userRoutes);
app.use('/api/boards', boardRoutes);
// Nest task and activity routes under boards
app.use('/api/boards/:boardId/tasks', taskRoutes);
app.use('/api/boards/:boardId/activities', activityRoutes);


// Basic Error Handling
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
