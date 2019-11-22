
const express = require('express');
require('dotenv').config();

const app = express();
const bb = require('express-busboy');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const awsRouter = require('./routes/aws.router');
const adminRouter = require('./routes/admin.router');
const compareRouter = require('./routes/compare.router');

// Body parser middleware
bb.extend(app, {
  upload: true,
  path: './server/uploads',
});

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/aws', awsRouter);
app.use('/api/admin', adminRouter);
app.use('/api/compare', compareRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
