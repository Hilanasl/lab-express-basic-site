const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/works', (req, res) => {
    const painting = [
        {
            id: 1,
            name: "Woman with a Parasol",
            image: "/images/parasol.jpg"
        },
        {
            id: 2,
            name: "Water lilies",
            image: "/images/water-lilies.jpg"
        },
        {
            id: 3,
            name: "Haystacks",
            image: "/images/Haystacks2.jpg"
        },
        {
            id: 4,
            name: "London Parliament",
            image: "/images/parlement.jpg"
        },
        {
            id: 5,
            name: "Cathedral of Rouen",
            image: "/images/cathedral.jpg"
        },
        {
            id: 6,
            name: "Saint Lazare",
            image: "/images/saint-lazare.jpg"
        }

    ]
    res.render('works', {
        painting,
        css: ['works.css']
    })
});

app.get('/gallery', (req, res) => {
    res.render('gallery')
});

app.listen(5000);