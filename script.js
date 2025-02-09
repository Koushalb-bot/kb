// Questions and options
const questions = [
    { 
        question: "What’s your ideal romantic date?", 
        options: ["A candlelit dinner on the moon", "Netflix and chill with endless snacks", "A spontaneous road trip to somewhere random", "A scavenger hunt around the city with clues that lead to cake"]
    },
    {
        question: "How do you feel about public displays of affection?",
        options: ["The more PDA, the better!", "I like a little affection in private… and a lot in private!", "Keep it cute, but not in front of the whole world.", "I’d rather give my partner a high-five and call it a day."]
    },
    {
        question: "If I surprised you with a bouquet of flowers, how would you react?",
        options: ["Cry happy tears and start planning our wedding.", "Say 'Aww, thanks!' but secretly think, 'What did you do wrong?'", "Tell you they’re beautiful but wonder how long they’ll last.", "Run to Google to check if they’re allergic to flowers."]
    },
    {
        question: "When it comes to saving money, what’s your strategy?",
        options: ["I hoard it like a squirrel with acorns.", "I save a little, then spend it all on impulse buys.", "I put it in a jar and pretend it doesn’t exist until I need it.", "I use a secret savings account called 'The I Don’t Know What I’m Doing Fund.'"]
    },
    {
        question: "How would you react if someone asks you to split the bill?",
        options: ["I’ve got the calculator out, let’s get this split exactly right.", "Oh, I thought you were treating me! looks around nervously", "I’ll pretend I didn’t hear it and just smile awkwardly.", "Sure, but only if you want to get me a second drink afterward."]
    },
    {
        question: "How do you feel about budgeting?",
        options: ["My budget is called 'whatever I feel like doing today.'", "I’m working on it… one spontaneous purchase at a time.", "I’m trying to be responsible, but it’s hard to resist sale signs.", "Budgets? I thought they were optional."]
    },
    {
        question: "What’s your ideal shopping strategy?",
        options: ["One item at a time. Slowly, but surely.", "Rush in, grab everything, and then reconsider later.", "I’ll buy it, but only if it's 80% off.", "Let me have the entire store. Just let me look."]
    },
    {
        question: "Where’s your dream honeymoon destination?",
        options: ["Maldives – just us and a tiny hut over the water.", "Paris – I’ll eat croissants and wear a beret all day.", "Anywhere with Wi-Fi so we can still binge-watch shows.", "A castle in Scotland with a pet dragon."]
    },
    {
        question: "If we went on a honeymoon, what would be the first thing you’d do?",
        options: ["Build a sandcastle and pretend we’re royalty.", "Find the best local food and eat it until I’m full.", "Take a nap because I need vacation from life.", "Take an awkward selfie with a local wildlife creature."]
    },
    {
        question: "How would you describe your honeymoon vibe?",
        options: ["Adventure and exploring hidden gems.", "Chill and relax by the pool with endless drinks.", "Trying new things, like underwater basket weaving or cooking classes.", "A series of spontaneous dance-offs on the beach."]
    },
    {
        question: "What’s your go-to method for dealing with stress?",
        options: ["Deep breathing exercises while eating pizza.", "Call a friend to complain for an hour.", "Do a yoga pose I’m definitely not good at and hope for the best.", "Take a nap and hope everything magically resolves itself."]
    },
    {
        question: "How often do you clean your house?",
        options: ["Only when I’m expecting guests.", "Every week, but mostly just rearranging the mess.", "I clean... in my mind. Does that count?", "What’s cleaning? I prefer organized chaos."]
    },
    {
        question: "How do you usually spend a lazy day at home?",
        options: ["Netflix, snacks, and ignoring any responsibilities.", "Lying in bed, making “life plans” that never happen.", "Cleaning like a tornado hit the place.", "Just sitting around in pajamas until I have to be productive."]
    },
    {
        question: "How do you feel about online shopping?",
        options: ["Add to cart, buy, repeat. No regrets.", "I put 50 things in my cart, then abandon it all.", "One item, one month, slowly but surely.", "I check my order tracking like it's the stock market."]
    },
    {
        question: "What’s the first thing you check in a store?",
        options: ["The sale section, obviously.", "Shoes. Always shoes.", "The snack aisle. Because, priorities.", "The dressing room to see how much I really need to spend."]
    },
    {
        question: "How would you react if you saw someone wearing the same outfit as you?",
        options: ["We’re twins! Let’s take a selfie.", "I’d hide in a corner and pray no one notices.", "Challenge them to a fashion showdown.", "I’d congratulate them on their excellent taste."]
    },
    {
        question: "How do you describe your style?",
        options: ["Casual, comfy, and 100% unbothered.", "Always trendy—who’s got time for boring?", "I like a mix of 'I woke up like this' and 'I’m a fashionista.'", "Just ask my closet—it's a mysterious wonderland of 'what was I thinking?'"]
    },
    {
        question: "What’s your opinion on accessories?",
        options: ["They make or break an outfit. All about the statement necklace.", "I like them, but only if they don’t distract from my coffee.", "Accessories? I’m just here for the shoes.", "What are accessories? I’ve only heard of clothes."]
    },
    {
        question: "How do you feel about wearing heels?",
        options: ["Bring on the pain! Fashion is pain, right?", "I wear them only when necessary—mostly to reach the top shelf.", "Comfort > Style. I’ll stick with flats.", "Heels? I prefer shoes with wheels."]
    },
    {
        question: "How do you usually react in stressful situations?",
        options: ["Stay calm and think logically", "Get anxious but try to handle it", "Cry or express my emotions", "Push through without showing it"]
    },
    {
        question: "How do you usually handle conflict in relationships?",
        options: ["I try to talk things through calmly", "I need some time to cool off before I talk", "I express my feelings openly and directly", "I avoid confrontation and hope it resolves itself"]
    },
    {
        question: "Which of these activities sounds the most fun to you?",
        options: ["Reading a good book", "Going on an adventure outdoors", "Trying something new or challenging", "Spending time with loved ones"]
    },
    {
        question: "What would you say is your biggest strength?",
        options: ["Empathy and understanding", "Creativity and problem-solving", "Confidence and leadership", "Patience and perseverance"]
    },
    {
        question: "Will you marry me??",
        options: ["I dont Know!!", "No, I have better taste.", "Marry you? I wont even date you.", "Yessssss!! I LOVE YOU !!!"]
    }
];

let currentQuestionIndex = 0;
let answers = [];

// Function to load the next question
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <div id="options-container"></div>
    `;

    const optionsContainer = document.getElementById("options-container");
    question.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.innerText = option;
        optionButton.id = `option-${index}`;
        optionButton.addEventListener("click", () => handleOptionClick(option, index));
        optionsContainer.appendChild(optionButton);
    });
}

// Function to handle option click
function handleOptionClick(option, index) {
    if (currentQuestionIndex === questions.length - 1 && index !== 3) { // Only allow the last option in the last question
        shuffleOptions();
    } else {
        answers[currentQuestionIndex] = option;
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            submitAnswers();
        }
    }
}

// Function to shuffle options for the last question if any other option is clicked
function shuffleOptions() {
    const optionsContainer = document.getElementById("options-container");
    const options = optionsContainer.querySelectorAll("button");
    
    // Shuffle all options except the last one
    let shuffled = Array.from(options);
    shuffled.sort(() => Math.random() - 0.5);

    // Reorder the buttons
    shuffled.forEach(optionButton => {
        optionsContainer.appendChild(optionButton);
    });
}

// Submit answers to Formspree
function submitAnswers() {
    const data = {
        answers: answers.join(", "), // Join all answers into a single string
    };

    fetch('https://formspree.io/f/mrbeljqw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(() => {
        document.getElementById("thank-you-page").style.display = "block";
        document.getElementById("quiz-page").style.display = "none";
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Initialize quiz
document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";
    loadQuestion();
});
