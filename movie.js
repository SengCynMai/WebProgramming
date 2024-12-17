const movies = [
    {
        title: "Pilot",
        summary: "Jung Woo goes from being a successful, popular pilot to being unemployed one morning. However, he succeeds in getting a new job after accidentally taking on a newly laundered identity.",
        trailer: "https://www.youtube.com/embed/ae4WVBrh25I",
        watch: "videos/pilot.mp4",
        year: 2023,
        duration: "2h 10m",
        rating: 8.1,
        genre: ["Comedy", "Romance"],
    },
    {
        title: "Exhuma",
        summary: "The process of excavating an ominous grave unleashes long hidden secrets and dreadful consequences buried underneath.",
        trailer: "https://www.youtube.com/embed/j_6_wLF1pDg",
        watch: "videos/exhuma.mp4",
        year: 2023,
        duration: "1h 50m",
        rating: 7.5,
        genre: ["Horror", "Thriller"],
    },
    {
        title: "Parasite",
        summary: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
        watch: "videos/parasite.mp4",
        year: 2019,
        duration: "2h 12m",
        rating: 8.6,
        genre: ["Drama", "Thriller"],
    },
    {
        title: "Love in the city",
        summary: "The friendship between two young people in Seoul, Korea.",
        trailer: "https://www.youtube.com/embed/mqYjCJwmnfI",
        watch: "videos/love_in_the_city.mp4",
        year: 2021,
        duration: "1h 45m",
        rating: 7.2,
        genre: ["Drama", "Romance"],
    },
    {
        title: "Handsome guys",
        summary: "Self-proclaimed tough guy Jae-pil and Sang-gu move into their dream European-style house. Unwanted visitors arrive, awakening a sealed evil spirit in the basement. A dark aura begins to envelop the house.",
        trailer: "https://www.youtube.com/embed/QmEwuffc5tA",
        watch: "videos/handsome_guys.mp4",
        year: 2022,
        duration: "2h 5m",
        rating: 7.8,
        genre: ["Comedy", "Horror"],
    },
    {
        title: "Hear me: our summer",
        summary: "A hearing-impaired woman and a motorbike delivery man find connection despite communication barriers.",
        trailer: "https://www.youtube.com/embed/lAqIZHoO9nk",
        watch: "videos/hear_me_our_summer.mp4",
        year: 2020,
        duration: "1h 30m",
        rating: 7.0,
        genre: ["Romance", "Drama"],
    },
    {
        title: "Hijack 1971",
        summary: "People fight for their lives in an extreme situation when a passenger aeroplane is hijacked in the airspace of Korea in 1971.",
        trailer: "https://www.youtube.com/embed/UxyutkXQnvA",
        watch: "videos/hijack_1971.mp4",
        year: 1971,
        duration: "2h 0m",
        rating: 8.0,
        genre: ["Action", "Drama"],
    },
    {
        title: "Train to Busan",
        summary: "A man (Gong Yoo), his estranged daughter and other passengers become trapped on a speeding train during a zombie outbreak in South Korea.",
        trailer: "https://www.youtube.com/embed/1ovgxN2VWNc",
        watch: "videos/train_to_busan.mp4",
        year: 2016,
        duration: "2h 0m",
        rating: 7.6,
        genre: ["Horror", "Action"],
    },
    {
        title: "The Call",
        summary: "Connected by phone in the same home but 20 years apart, a serial killer puts another woman's past -- and life -- on the line to change her own fate.",
        trailer: "https://www.youtube.com/embed/hxkKeniT-0Q",
        watch: "videos/the_call.mp4",
        year: 2020,
        duration: "1h 52m",
        rating: 7.1,
        genre: ["Thriller", "Drama"],
    },
    {
        title: "Soulmate",
        summary: "A coming-of-age story of two friends that first meet at age 11 and experience love, friendship and life.",
        trailer: "https://www.youtube.com/embed/94YuHAdNdd8",
        watch: "videos/soulmate.mp4",
        year: 2023,
        duration: "1h 48m",
        rating: 7.9,
        genre: ["Romance", "Drama"],
    },
    {
        title: "Frozen 1",
        summary: "Follow Elsa and Anna's journey as they discover the power of love and family while braving icy adventures.",
        trailer: "https://www.youtube.com/embed/TbQm5doF_Uc",
        watch: "videos/frozen.mp4",
        year: 2013,
        duration: "1h 42m",
        rating: 7.4,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "Frozen 2",
        summary: "Elsa, Anna, Kristoff, Olaf, and Sven embark on a journey beyond Arendelle to discover the origin of Elsa's magical powers and save their kingdom.",
        trailer: "https://www.youtube.com/embed/Zi4LMpSDccc",
        watch: "videos/frozen2.mp4",
        year: 2019,
        duration: "1h 43m",
        rating: 6.9,
        genre: ["Animation", "Adventure", "Fantasy"],
    },
    {
        title: "Moana",
        summary: "A spirited teenager sails out on a daring mission to save her people and discovers her true destiny.",
        trailer: "https://www.youtube.com/embed/LKFuXETZUsI",
        watch: "videos/moana.mp4",
        year: 2016,
        duration: "1h 47m",
        rating: 7.6,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "Inside out 1",
        summary: "An emotional rollercoaster inside the mind of a young girl as she navigates growing up.",
        trailer: "https://www.youtube.com/embed/yRUAzGQ3nSY",
        watch: "videos/inside_out.mp4",
        year: 2015,
        duration: "1h 35m",
        rating: 8.1,
        genre: ["Animation", "Family"],
    },
    {
        title: "The little mermaid",
        summary: "A young mermaid makes a dangerous deal to become human and win the love of a prince.",
        trailer: "https://www.youtube.com/embed/nPE0f-MB_bQ",
        watch: "videos/the_little_mermaid.mp4",
        year: 1989,
        duration: "1h 23m",
        rating: 7.6,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "Tangled",
        summary: "A feisty long-haired princess teams up with a bandit to escape her tower and discover the world.",
        trailer: "https://www.youtube.com/embed/ycoY201RTRo",
        watch: "videos/tangled.mp4",
        year: 2010,
        duration: "1h 40m",
        rating: 7.7,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "Crazy rich asian",
        summary: "An American-born Chinese professor learns her boyfriend is incredibly wealthy during a trip to Singapore.",
        trailer: "https://www.youtube.com/watch?v=ZQ-YX-5bAs0",
        watch: "videos/crazy_rich_asian.mp4",
        year: 2018,
        duration: "2h 0m",
        rating: 7.0,
        genre: ["Comedy", "Romance"],
    },
    {
        title: "Last Christmas",
        summary: "A young woman struggling with her life meets someone who inspires her to change her perspective.",
        trailer: "https://www.youtube.com/embed/z9CEIcmWmtA",
        watch: "videos/last_christmas.mp4",
        year: 2019,
        duration: "1h 43m",
        rating: 6.5,
        genre: ["Romance", "Comedy"],
    },
    {
        title: "Zootopia",
        summary: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
        trailer: "https://www.youtube.com/embed/XFaff7zbr7c",
        watch: "videos/zootopia.mp4",
        year: 2016,
        duration: "1h 48m",
        rating: 8.0,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "Aladdin",
        summary: "A street urchin discovers a magical lamp and must protect it while learning about love and trust.",
        trailer: "https://www.youtube.com/embed/-G5XI61Y9ms",
        watch: "videos/aladdin.mp4",
        year: 1992,
        duration: "1h 30m",
        rating: 8.0,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "Mulan",
        summary: "To save her father, a young woman disguises herself as a man to join the Chinese army.",
        trailer: "https://www.youtube.com/embed/KK8FHdFluOQ",
        watch: "videos/mulan.mp4",
        year: 1998,
        duration: "1h 28m",
        rating: 7.6,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "Finding Nemo",
        summary: "After his son is captured in the Great Barrier Reef, a timid clownfish sets out on a journey to bring him home.",
        trailer: "https://www.youtube.com/embed/zG8oQKMQSNs",
        watch: "videos/finding_nemo.mp4",
        year: 2003,
        duration: "1h 40m",
        rating: 8.1,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "The Incredibles",
        summary: "A family of undercover superheroes tries to live a quiet suburban life but is forced into action to save the world.",
        trailer: "https://www.youtube.com/embed/mG_N8_vJ7EA",
        watch: "videos/the_incredibles.mp4",
        year: 2004,
        duration: "1h 55m",
        rating: 8.0,
        genre: ["Animation", "Action"],
    },
    {
        title: "Wall-E",
        summary: "A small waste-collecting robot inadvertently embarks on a space journey that will decide the fate of mankind.",
        trailer: "https://www.youtube.com/embed/3Mi62VKDhm0",
        watch: "videos/wall_e.mp4",
        year: 2008,
        duration: "1h 38m",
        rating: 8.4,
        genre: ["Animation", "Sci-Fi"],
    },
    {
        title: "Coco",
        summary: "Aspiring musician Miguel enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        trailer: "",
        watch: "videos/coco.mp4",
        year: 2017,
        duration: "1h 49m",
        rating: 8.4,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "Sing",
        summary: "In a city of animals, a koala stages a singing competition to save his failing theater.",
        trailer: "",
        watch: "videos/sing.mp4",
        year: 2016,
        duration: "1h 48m",
        rating: 7.1,
        genre: ["Animation", "Comedy"],
    },
    {
        title: "Ratatouille",
        summary: "A rat who dreams of becoming a chef makes an unusual alliance with a young kitchen worker at a renowned Parisian restaurant.",
        trailer: "",
        watch: "videos/ratatouille.mp4",
        year: 2007,
        duration: "1h 51m",
        rating: 8.1,
        genre: ["Animation", "Comedy"],
    },
    {
        title: "Brave",
        summary: "Determined to make her own path in life, a princess defies a custom that brings chaos to her kingdom.",
        trailer: "",
        watch: "videos/brave.mp4",
        year: 2012,
        duration: "1h 33m",
        rating: 7.1,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "Maleficent",
        summary: "A vengeful fairy curses an infant princess but learns that the child may be the key to peace.",
        trailer: "",
        watch: "videos/maleficent.mp4",
        year: 2014,
        duration: "1h 37m",
        rating: 7.0,
        genre: ["Fantasy", "Adventure"],
    },
    {
        title: "My Neighbor Totoro",
        summary: "Two girls move to the countryside and encounter a forest spirit named Totoro.",
        trailer: "",
        watch: "videos/my_neighbor_totoro.mp4",
        year: 1988,
        duration: "1h 26m",
        rating: 8.2,
        genre: ["Animation", "Fantasy"],
    },
    {
        title: "Ponyo",
        summary: "A young boy befriends a goldfish princess who longs to become human.",
        trailer: "",
        watch: "videos/ponyo.mp4",
        year: 2008,
        duration: "1h 40m",
        rating: 7.7,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "Weathering with You",
        summary: "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
        trailer: "",
        watch: "videos/weathering_with_you.mp4",
        year: 2019,
        duration: "1h 52m",
        rating: 7.5,
        genre: ["Animation", "Fantasy"],
    },
    {
        title: "Your Name",
        summary: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies.",
        trailer: "",
        watch: "videos/your_name.mp4",
        year: 2016,
        duration: "1h 46m",
        rating: 8.4,
        genre: ["Animation", "Romance"],
    },
    {
        title: "Spirited Away",
        summary: "A young girl, Chihiro, becomes trapped in a strange and mysterious world of spirits.",
        trailer: "",
        watch: "videos/spirited_away.mp4",
        year: 2001,
        duration: "2h 5m",
        rating: 8.6,
        genre: ["Animation", "Adventure"],
    },
    {
        title: "5 Centimeters Per Second",
        summary: "A tale of two people drifting apart over time but cherishing their memories together.",
        trailer: "",
        watch: "videos/5_cm_per_second.mp4",
        year: 2007,
        duration: "1h 3m",
        rating: 7.6,
        genre: ["Animation", "Romance"],
    },
    {
        title: "Your Lie in April",
        summary: "A piano prodigy who has lost the ability to play after a traumatic experience finds new inspiration through a spirited violinist.",
        trailer: "",
        watch: "videos/your_lie_in_april.mp4",
        year: 2016,
        duration: "2h 2m",
        rating: 8.0,
        genre: ["Drama", "Romance"],
    },
    {
        title: "The Boy and the Heron",
        summary: "A young boy discovers a mysterious tower in a fantastical world while coping with loss and self-discovery.",
        trailer: "",
        watch: "videos/the_boy_and_the_heron.mp4",
        year: 2023,
        duration: "2h 0m",
        rating: 8.2,
        genre: ["Animation", "Fantasy"],
    },
    {
        title: "No Longer Heroine",
        summary: "A romantic comedy exploring the life of a girl who always considered herself the heroine until she faces reality.",
        trailer: "",
        watch: "videos/no_longer_heroine.mp4",
        year: 2015,
        duration: "1h 52m",
        rating: 6.8,
        genre: ["Romance", "Comedy"],
    },
    {
        title: "Monster",
        summary: "A gripping drama exploring human relationships, misunderstandings, and prejudices from multiple perspectives.",
        trailer: "",
        watch: "videos/monster.mp4",
        year: 2023,
        duration: "2h 5m",
        rating: 8.1,
        genre: ["Drama", "Mystery"],
    },
    {
        title: "The Last 10 Years",
        summary: "A young woman with a terminal illness finds love and decides to live life to its fullest despite her limited time.",
        trailer: "",
        watch: "videos/the_last_10_years.mp4",
        year: 2022,
        duration: "2h 4m",
        rating: 7.5,
        genre: ["Romance", "Drama"],
    },
    {
        title: "My Tomorrow, Your Yesterday",
        summary: "A man falls in love with a woman who is moving backward in time, complicating their relationship.",
        trailer: "",
        watch: "videos/my_tomorrow_your_yesterday.mp4",
        year: 2016,
        duration: "1h 51m",
        rating: 7.4,
        genre: ["Romance", "Fantasy"],
    },
    {
        title: "Like Father, Like Son",
        summary: "Two families discover that their sons were switched at birth and must navigate a complex emotional journey.",
        trailer: "",
        watch: "videos/like_father_like_son.mp4",
        year: 2013,
        duration: "2h 1m",
        rating: 7.8,
        genre: ["Drama", "Family"],
    },
    {
        title: "Journey to the Shore",
        summary: "A grieving widow embarks on a journey with her deceased husband to visit those he loved in life.",
        trailer: "",
        watch: "videos/journey_to_the_shore.mp4",
        year: 2015,
        duration: "2h 7m",
        rating: 6.9,
        genre: ["Drama", "Fantasy"],
    },
    {
        title: "18x2 Beyond Youthful Day",
        summary: "A romantic story that explores youthful relationships and bittersweet moments of growing up.",
        trailer: "",
        watch: "videos/18x2_beyond_youthful_day.mp4",
        year: 2021,
        duration: "1h 50m",
        rating: 7.2,
        genre: ["Romance", "Drama"],
    },
    {
        title: "The Parades",
        summary: "A heartfelt drama that uncovers hidden truths about family, tradition, and community during a festive parade.",
        trailer: "",
        watch: "videos/the_parades.mp4",
        year: 2020,
        duration: "1h 48m",
        rating: 7.1,
        genre: ["Drama", "Family"],
    },
    {
        title: "How to Make a Million Before Grandma Dies",
        summary: "A young girl hatches an elaborate plan to earn a fortune before her beloved grandmother passes away.",
        trailer: "",
        watch: "videos/how_to_make_a_million.mp4",
        year: 2021,
        duration: "1h 43m",
        rating: 7.3,
        genre: ["Comedy", "Drama"],
    },
    {
        title: "Friendzone",
        summary: "A hilarious and heartwarming story of a man trying to escape the friendzone with the woman he loves.",
        trailer: "",
        watch: "videos/friendzone.mp4",
        year: 2021,
        duration: "1h 30m",
        rating: 6.5,
        genre: ["Romance", "Comedy"],
    },
    {
        title: "Happy Old Year",
        summary: "A woman trying to declutter her home finds herself revisiting emotional attachments and past memories.",
        trailer: "",
        watch: "videos/happy_old_year.mp4",
        year: 2019,
        duration: "1h 53m",
        rating: 7.4,
        genre: ["Drama", "Romance"],
    },
    {
        title: "First Love",
        summary: "A crime thriller that intertwines love and tragedy during a night of chaos.",
        trailer: "",
        watch: "videos/first_love.mp4",
        year: 2019,
        duration: "1h 48m",
        rating: 7.1,
        genre: ["Crime", "Drama"],
    },
    {
        title: "Brother of the Year",
        summary: "A comedic and heartfelt exploration of sibling relationships, misunderstandings, and love.",
        trailer: "",
        watch: "videos/brother_of_the_year.mp4",
        year: 2018,
        duration: "2h 0m",
        rating: 7.1,
        genre: ["Comedy", "Drama"],
    },
    {
        title: "You Are the Apple of My Eye",
        summary: "A nostalgic look at first love and the bittersweet moments of growing up.",
        trailer: "",
        watch: "videos/you_are_the_apple.mp4",
        year: 2011,
        duration: "1h 49m",
        rating: 7.6,
        genre: ["Romance", "Drama"],
    },
    {
        title: "Take Me to the Moon",
        summary: "A struggling musician time travels back to prevent his best friend's untimely death.",
        trailer: "",
        watch: "videos/take_me_to_the_moon.mp4",
        year: 2017,
        duration: "1h 45m",
        rating: 7.5,
        genre: ["Drama", "Fantasy"],
    },
    {
        title: "Call Me by Your Name",
        summary: "A summer romance blossoms between a young man and his father's assistant in 1980s Italy.",
        trailer: "",
        watch: "videos/call_me_by_your_name.mp4",
        year: 2017,
        duration: "2h 12m",
        rating: 7.9,
        genre: ["Romance", "Drama"],
    },
    {
        title: "Our Time",
        summary: "A poignant tale of love, heartbreak, and self-discovery, as two individuals navigate the trials of growing up and the complexities of relationships.",
        trailer: "",
        watch: "videos/our_time.mp4",
        year: 2023,
        duration: "2h 0m",
        rating: 7.8,
        genre: ["Romance", "Drama"],
    } 
  ];

  // Extract the movie title from the URL parameters
// Extract the movie title from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const movieTitle = urlParams.get("title");

// Find the movie data
const movie = movies.find((m) => m.title === movieTitle);

// Populate movie details
const movieDetailsContainer = document.getElementById("movie-details");
if (movie) {
    // Prepare fallback/default values
    const movieFileName = movie.title.toLowerCase().replace(/ /g, "_").replace(/'/g, "") + ".png";
    const posterPath = `image/${movieFileName}`;
    const genres = movie.genre ? movie.genre.join(", ") : "N/A";
    const trailerEmbed = movie.trailer
        ? `<div class="trailer-container">
               <iframe 
                   src="${movie.trailer}" 
                   frameborder="0" 
                   allowfullscreen 
                   class="trailer">
               </iframe>
           </div>`
        : "<p><strong>Trailer:</strong> Not Available</p>";
    const watchLink = movie.watch
        ? `<div class="buttons">
               <a href="${movie.watch}" target="_blank" class="watch-button">Watch Movie</a>
           </div>`
        : "";

    // Inject content into the DOM
    movieDetailsContainer.innerHTML = `
        <div class="movie-poster">
            <img src="${posterPath}" alt="${movie.title}" onerror="this.src='image/default-movie.png'">
        </div>
        <div class="movie-info">
            <h1>${movie.title}</h1>
            <p><strong>IMDb:</strong> ${movie.rating || "N/A"}</p>
            <p><strong>Year:</strong> ${movie.year || "N/A"}</p>
            <p><strong>Duration:</strong> ${movie.duration || "N/A"}</p>
            <p><strong>Genres:</strong> ${genres}</p>
            <p>${movie.summary || "No summary available."}</p>
            ${trailerEmbed}
            ${watchLink}
        </div>
    `;
} else {
    // Handle the case where no movie is found
    movieDetailsContainer.innerHTML = `<p>Movie not found. Please select a valid movie.</p>`;
}

// Reviews Feature
const reviewsContainer = document.getElementById("reviews-container");
const reviewForm = document.getElementById("review-form");

// Simulated database for storing reviews (this would be replaced with a real database/backend)
let reviewsDB = JSON.parse(localStorage.getItem("reviewsDB")) || {};

// Load existing reviews for the movie
const movieReviews = reviewsDB[movieTitle] || [];
renderReviews(movieReviews);

// Handle review submission
reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Collect review data
    const rating = document.getElementById("rating").value;
    const reviewText = document.getElementById("review-text").value;

    // Add review to the database
    const newReview = {
        rating: parseInt(rating),
        text: reviewText,
        date: new Date().toLocaleString(),
    };

    if (!reviewsDB[movieTitle]) {
        reviewsDB[movieTitle] = [];
    }
    reviewsDB[movieTitle].push(newReview);

    // Save to localStorage
    localStorage.setItem("reviewsDB", JSON.stringify(reviewsDB));

    // Clear the form
    reviewForm.reset();

    // Re-render reviews
    renderReviews(reviewsDB[movieTitle]);
});

// Function to render reviews
function renderReviews(reviews) {
    reviewsContainer.innerHTML = ""; // Clear the container

    const MAX_VISIBLE_REVIEWS = 1; // Set the maximum number of visible reviews
    let isCollapsed = reviewsContainer.dataset.isCollapsed === "true"; // Use a data attribute to track state

    const visibleReviews = isCollapsed ? reviews.slice(0, MAX_VISIBLE_REVIEWS) : reviews;

    // Render the appropriate reviews
    visibleReviews.forEach((review) => {
        const reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");
        reviewDiv.innerHTML = `
            <p><strong>${review.rating} Stars</strong> - ${review.date}</p>
            <p>${review.text}</p>
        `;
        reviewsContainer.appendChild(reviewDiv);
    });

    // Ensure only one toggle button exists
    let toggleButton = document.getElementById("toggle-reviews");
    if (!toggleButton) {
        toggleButton = document.createElement("button");
        toggleButton.id = "toggle-reviews";
        toggleButton.className = "toggle-reviews-button";
        reviewsContainer.parentElement.appendChild(toggleButton);
    }

    // Update button text and visibility
    if (reviews.length > MAX_VISIBLE_REVIEWS) {
        toggleButton.style.display = "inline-block";
        toggleButton.textContent = isCollapsed ? "Show More" : "Show Less";

        // Attach click event to toggle reviews
        toggleButton.onclick = () => {
            isCollapsed = !isCollapsed; // Toggle the state
            reviewsContainer.dataset.isCollapsed = isCollapsed; // Update the data attribute
            renderReviews(reviews); // Re-render the reviews
        };
    } else {
        toggleButton.style.display = "none"; // Hide button if no extra reviews
    }
}




  
