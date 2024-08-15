const express = require("express")
const app = express();
const mongoose = require('mongoose');
const session = require("express-session")
const User = require("./module/user")
const MongoStore=require("connect-mongo")
const cors= require("cors");
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true // Allow credentials (cookies, headers)
}));
mongoose.connect('mongodb://127.0.0.1:27017/yelp1db')
    .then(data => {
        console.log('CONNECTION OPEN')
    })
    .catch(err => {
        console.log(err)
    })
app.use(express.urlencoded({ extended: true }));
const passport = require("passport")
const localStrategy = require("passport-local")
const store = MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/yelp1db',
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret: 'thisshouldbeabettersecret!'
    }
});
const sesseionConfig = {
    store,
    secret: "thisisasecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 60 * 60 * 1000 * 24 * 7,
        maxAge: 60 * 60 * 1000 * 24 * 7
    }
}

// app.use("/",userRoutes)

app.use(session(sesseionConfig))
// app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})


app.post("/login",  passport.authenticate('local', { failureFlash: true, failureRedirect: "/login" }), (req, res) => {
    res.send("Login successful");
})
app.post('/registered', async (req, res) => {
    console.log('Received request body:', req.body);  // Log the incoming request body
    const { email, username, password } = req.body;
    try {
        if (!email || !username || !password) {
            return res.status(400).send('All fields are required');
        }
        const user = new User({ email, username });
        await User.register(user, password);
        res.status(201).send('Registered');
    } catch (error) {
        console.error('Registration error:', error);  // Log the error
        res.status(500).send('Registration failed');
    }
});

app.post('/dashboard', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const user = await User.findOne({ email: email }).exec();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send back user data with preferences and activities
        res.json({
            email: user.email,
            preferences: user.preferences || [],
            activities: user.activities || []
        });
    } catch (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});







app.all("*",(req,res,next) =>{
    next(new expressError("something went wrong",404))
})


app.listen(8080, () => {
    console.log('Serving on port 3000')
})