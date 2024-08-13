const express = require('express');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//!Middlewares

app.use(express.json());

app.use((req, res, next) => {
  console.log(
    'Hello from the  middleware 👋 ',
  );
  next();
});

app.use((req, res, next) => {
  req.requestTime =
    new Date().toISOString();
  next();
});

//!(3) ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//! START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(
    `App running on port ${port}...`,
  );
});

//handlers can also be called controllers
