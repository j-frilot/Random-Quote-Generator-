let btn = document.querySelector('#btn')






btn.addEventListener('click', function(){
    let quotes = [{
        Person: "Peter Pan",
        Quote: "To live will be an awfully big adventure."
        }, {
        Person: "Maya Angelou",
        Quote: "Try to be a rainbow in someone’s cloud."   
        }, {
        Person: "John Green",
        Quote: "It hurt because it mattered."   
        }, {
        Person: "Boonaa Mohammed",
        Quote: "If the world was blind how many people would you impress?"   
        }, { 
        Person: "Unknown",
        Quote: "I will remember and recover, not forgive and forget."   
        }, {
        Person: "Ken Hudgins",
        Quote: "The meaning of life is to give life meaning. "   
        }, {
        Person: "Oprah Winfrey",
        Quote: "Turn your wounds into wisdom."   
        }, {
        Person: "Aristotle",
        Quote: "Happiness depends upon ourselves."   
        }, {
        Person: "R. Brault",
        Quote: "Life becomes easier when you learn to accept the apology you never got."   
        }, {
        Person: "Habeeb Akande",
        Quote: "White is not always light and black is not always dark."   
        }, {
        Person: "Atticus",
        Quote: "A happy soul is the best shield for a cruel world."   
        }, {
        Person: "Nelson Mandela",
        Quote: "May your choices reflect your hopes, not your fears."   
        }, {
        Person: "Rumi",
        Quote: "Let the beauty of what you love be what you do. "   
        }, {
        Person: "Martin Luther King Jr.",
        Quote: "The time is always right to do what is right."   
        }, {
        Person: "Maya Angelou",
        Quote: "And still, I rise."   
        }, {
        Person: " Kurt Cobain",
        Quote: "Wanting to be someone else is a waste of who you are."   
        }, {
        Person: "Unknown",
        Quote: "What consumes your mind controls your life."   
        }, {
        Person: "Lebron James",
        Quote: "Strive for greatness."   
        }, {
        Person: "Thomas Edison",
        Quote: "There is no substitute for hard work."   
        }]

    let ranQuote = quotes[Math.floor(Math.random() * Math.floor(quotes.length))];

    let quote = ranQuote.Quote
    let person = ranQuote.Person
 
    let text = document.querySelector('#text')
    let author = document.querySelector('#author')

    text.textContent = quote
    author.textContent = person
})