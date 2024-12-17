// Movie Data with Summaries
const movies = [
    {
        title: "Pilot",
        summary: "Jung Woo goes from being a successful, popular pilot to being unemployed one morning. However, he succeeds in getting a new job after accidentally taking on a newly laundered identity.",
    },
    {
        title: "Exhuma",
        summary: "The process of excavating an ominous grave unleashes long hidden secrets and dreadful consequences buried underneath.",
    },
    {
        title: "Parasite",
        summary: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    },
    {
        title: "Love in the city",
        summary: "The friendship between two young people in Seoul, Korea.",
    },
    {
        title: "Handsome guys",
        summary: "Self-proclaimed tough guy Jae-pil and Sang-gu move into their dream European-style house. Unwanted visitors arrive, awakening a sealed evil spirit in the basement. A dark aura begins to envelop the house.",
    },
    {
        title: "Hear me: our summer",
        summary: "A hearing-impaired woman and a motorbike delivery man find connection despite communication barriers.",
    },
    {
        title: "Hijack 1971",
        summary: "People fight for their lives in an extreme situation when a passenger aeroplane is hijacked in the airspace of Korea in 1971.",
    },
    {
        title: "Train to Busan",
        summary: "A man (Gong Yoo), his estranged daughter and other passengers become trapped on a speeding train during a zombie outbreak in South Korea.",
    },
    {
        title: "The Call",
        summary: "Connected by phone in the same home but 20 years apart, a serial killer puts another woman's past -- and life -- on the line to change her own fate.",
    },
    {
        title: "Soulmate",
        summary: "A coming-of-age story of two friends that first meet at age 11 and experience love, friendship and life.",
    },
    {
        title: "Frozen 1",
        summary: "Follow Elsa and Anna's journey as they discover the power of love and family while braving icy adventures.",
    },
    {
        title: "Frozen 2",
        summary: "Elsa, Anna, Kristoff, Olaf, and Sven embark on a journey beyond Arendelle to discover the origin of Elsa's magical powers and save their kingdom.",
    },
    {
        title: "Moana",
        summary: "A spirited teenager sails out on a daring mission to save her people and discovers her true destiny.",
    },
    {
        title: "Inside out 1",
        summary: "An emotional rollercoaster inside the mind of a young girl as she navigates growing up.",
    },
    {
        title: "The little mermaid",
        summary: "A young mermaid makes a dangerous deal to become human and win the love of a prince.",
    },
    {
        title: "Tangled",
        summary: "A feisty long-haired princess teams up with a bandit to escape her tower and discover the world.",
    },
    {
        title: "Zootopia",
        summary: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
    },
    {
        title: "Aladdin",
        summary: "A street urchin discovers a magical lamp and must protect it while learning about love and trust.",
    },
    {
        title: "Mulan",
        summary: "To save her father, a young woman disguises herself as a man to join the Chinese army.",
    },
    {
        title: "Finding Nemo",
        summary: "After his son is captured in the Great Barrier Reef, a timid clownfish sets out on a journey to bring him home.",
    },
    {
        title: "The Incredibles",
        summary: "A family of undercover superheroes tries to live a quiet suburban life but is forced into action to save the world.",
    },
    {
        title: "Wall-E",
        summary: "A small waste-collecting robot inadvertently embarks on a space journey that will decide the fate of mankind.",
    },
    {
        title: "Coco",
        summary: "Aspiring musician Miguel enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    },
    {
        title: "Sing",
        summary: "In a city of animals, a koala stages a singing competition to save his failing theater.",
    },
    {
        title: "Ratatouille",
        summary: "A rat who dreams of becoming a chef makes an unusual alliance with a young kitchen worker at a renowned Parisian restaurant.",
    },
    {
        title: "Brave",
        summary: "Determined to make her own path in life, a princess defies a custom that brings chaos to her kingdom.",
    },
    {
        title: "Maleficent",
        summary: "A vengeful fairy curses an infant princess but learns that the child may be the key to peace.",
    },
    {
        title: "My Neighbor Totoro",
        summary: "Two girls move to the countryside and encounter a forest spirit named Totoro.",
    },
    {
        title: "Ponyo",
        summary: "A young boy befriends a goldfish princess who longs to become human.",
    },
    {
        title: "Weathering with You",
        summary: "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
    },
    {
        title: "Your Name",
        summary: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies.",
    },
    {
        title: "Spirited Away",
        summary: "A young girl, Chihiro, becomes trapped in a strange and mysterious world of spirits.",
    },
    {
        title: "Your Lie in April",
        summary: "A piano prodigy who has lost the ability to play after a traumatic experience finds new inspiration through a spirited violinist.",
    },
    {
        title: "The Boy and the Heron",
        summary: "A young boy discovers a mysterious tower in a fantastical world while coping with loss and self-discovery.",
    },
    {
        title: "No Longer Heroine",
        summary: "A romantic comedy exploring the life of a girl who always considered herself the heroine until she faces reality.",
    },
    {
        title: "Monster",
        summary: "A gripping drama exploring human relationships, misunderstandings, and prejudices from multiple perspectives.",
    },
    {
        title: "The Last 10 Years",
        summary: "A young woman with a terminal illness finds love and decides to live life to its fullest despite her limited time.",
    },
    {
        title: "My Tomorrow, Your Yesterday",
        summary: "A man falls in love with a woman who is moving backward in time, complicating their relationship.",
    },
    {
        title: "Like Father, Like Son",
        summary: "Two families discover that their sons were switched at birth and must navigate a complex emotional journey.",
    },
    {
        title: "Journey to the Shore",
        summary: "A grieving widow embarks on a journey with her deceased husband to visit those he loved in life.",
    },
    {
        title: "Friendzone",
        summary: "A hilarious and heartwarming story of a man trying to escape the friendzone with the woman he loves.",
    },
    {
        title: "Happy Old Year",
        summary: "A woman trying to declutter her home finds herself revisiting emotional attachments and past memories.",
    },
    {
        title: "Call Me by Your Name",
        summary: "A summer romance blossoms between a young man and his father's assistant in 1980s Italy.",
    },
    {
        title: "Our Time",
        summary: "A poignant tale of love, heartbreak, and self-discovery, as two individuals navigate the trials of growing up and the complexities of relationships.",
    },
    {
        title: "The Parades",
        summary: "A heartfelt drama that uncovers hidden truths about family, tradition, and community during a festive parade.",
    },
    {
        title: "How to Make a Million Before Grandma Dies",
        summary: "A young girl hatches an elaborate plan to earn a fortune before her beloved grandmother passes away.",
    },
    {
        title: "First Love",
        summary: "A crime thriller that intertwines love and tragedy during a night of chaos.",
    },
    {
        title: "Brother of the Year",
        summary: "A comedic and heartfelt exploration of sibling relationships, misunderstandings, and love.",
    },
    {
        title: "Crazy Rich Asian",
        summary: "An American-born Chinese professor learns her boyfriend is incredibly wealthy during a trip to Singapore.",
    },
    {
        title: "You Are the Apple of My Eyes",
        summary: "A nostalgic look at first love and the bittersweet moments of growing up.",
    },
    {
        title: "Take Me to the Moon",
        summary: "A struggling musician time travels back to prevent his best friend's untimely death.",
    },
    {
        title: "18x2 Beyond Youthful Day",
        summary: "A romantic story that explores youthful relationships and bittersweet moments of growing up.",
    },
    {
        title: "Last Christmas",
        summary: "A young woman struggling with her life meets someone who inspires her to change her perspective.",
    }
];


const allMoviesContainer = document.getElementById("all-movies");

movies.forEach((movie) => {
    const movieFileName = movie.title.toLowerCase().replace(/ /g, "_").replace(/'/g, "") + ".png";

    const movieItem = document.createElement("div");
    movieItem.classList.add("movie-item");
    movieItem.innerHTML = `
        <a href="movie.html?title=${encodeURIComponent(movie.title)}">
            <img src="image/${movieFileName}" alt="${movie.title}" onerror="this.src='image/default-movie.png'">
            <h3>${movie.title}</h3>
        </a>
        <div class="movie-summary">${movie.summary}</div>
    `;

    movieItem.addEventListener("mouseenter", () => {
        const summaryDiv = movieItem.querySelector(".movie-summary");
        summaryDiv.style.opacity = 1;
        summaryDiv.style.visibility = "visible";
    });

    movieItem.addEventListener("mouseleave", () => {
        const summaryDiv = movieItem.querySelector(".movie-summary");
        summaryDiv.style.opacity = 0;
        summaryDiv.style.visibility = "hidden";
    });

    allMoviesContainer.appendChild(movieItem);
});

const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll(".movie-item").forEach((item) => {
        const title = item.querySelector("h3").textContent.toLowerCase();
        item.style.display = title.includes(searchTerm) ? "block" : "none";
    });
});
