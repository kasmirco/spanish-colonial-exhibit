const lightBtn = document.getElementById('lightBtn');
const darkBtn = document.getElementById('darkBtn');

lightBtn.classList.add('active'); // optional default state

lightBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');

    lightBtn.classList.add('active');
    darkBtn.classList.remove('active');
});

darkBtn.addEventListener('click', () => {
    document.body.classList.add('dark-mode');

    darkBtn.classList.add('active');
    lightBtn.classList.remove('active');
});

const nav = document.querySelector('.custom-nav');
const aboutSection = document.querySelector('#about');

window.addEventListener('scroll', () => {
    const aboutTop = aboutSection.offsetTop;
    const scrollPos = window.scrollY + 100; // small offset for smoother trigger

    if (scrollPos >= aboutTop) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("welcomeOverlay");
    const confettiContainer = document.getElementById("confetti");

    // SAFETY CHECK (prevents errors on other pages)
    if (!overlay) return;

    // =========================
    // SHOW ONLY ON FIRST LOAD OF SITE
    // =========================
    const alreadyShown = sessionStorage.getItem("welcomeShown");

    if (alreadyShown) {
        overlay.style.display = "none";
        return;
    }

    sessionStorage.setItem("welcomeShown", "true");

    // =========================
    // AUTO CLOSE (KEEP YOUR 2500ms)
    // =========================
    setTimeout(() => {
        hideOverlay();
    }, 1700);

    overlay.addEventListener("click", hideOverlay);

    function hideOverlay(){
        overlay.style.opacity = "0";
        overlay.style.transition = "0.5s ease";

        setTimeout(() => {
            overlay.style.display = "none";
        }, 500);
    }
});






/* =========================
   CHATBOT (DIVINE)
   SPANISH COLONIAL EXHIBIT
========================= */

document.addEventListener("DOMContentLoaded", () => {

const chatToggle = document.getElementById("chatToggle");
const chatbox = document.getElementById("chatbox");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

if (!chatToggle || !chatbox) return;

/* =========================
   MEMORY
========================= */

let selectedQA = null;
let questionHistory = {};

/* =========================
   DATA
========================= */

const qa = [

{
    q: [
        "🎵 How did music evolve during the Spanish colonial period?",
        "🎵 Tell me more about Spanish colonial music",
        "🎵 Explore deeper into Spanish-era musical traditions",
        "🎵 What instruments became popular during Spanish rule?",
        "🎵 How did religion influence Filipino music?",
        "🎵 Final details about music during the Spanish colonial era"
    ],

    a: [

`Music during the Spanish colonial period was heavily influenced by Catholicism and religious practices introduced by the Spaniards. Church hymns, choral singing, and devotional music became important parts of Filipino life, especially during masses, fiestas, and religious celebrations.

Spanish missionaries used music as a way to spread Christianity across the islands. Over time, Filipinos blended Spanish musical styles with local traditions, creating unique forms of folk and religious music that continued even after the colonial era.`,

`As Spanish influence expanded, musical instruments such as the guitar, harp, and banduria became widely used in Filipino communities. These instruments were commonly played during religious festivals, community gatherings, and cultural performances.

The Spanish era also introduced organized musical training through churches and schools. Because of this, many Filipinos developed strong musical traditions that later became part of the country’s cultural identity.`,

`Many traditional Filipino songs today still carry traces of Spanish influence through melody, rhythm, and lyrical style. Folk songs and serenades became popular forms of expression during the colonial period.

Music was not only used for worship but also for storytelling, celebration, and social gatherings. The blending of Spanish and indigenous traditions helped shape the rich musical culture of the Philippines today.`,

`Instruments introduced during Spanish colonization became symbols of Filipino musical expression. The guitar eventually became one of the most recognizable instruments in local folk music and serenades.

Brass bands also became popular in towns and provinces, especially during fiestas and religious processions. These performances strengthened community celebrations and cultural traditions.`,

`Religion played a major role in shaping music during the Spanish era because churches used songs and choirs to teach Christianity. Sacred music became part of everyday religious life for many Filipinos.

Large churches often trained singers and musicians to perform during masses and important Catholic celebrations. This tradition continued for generations and influenced modern Filipino church music.`,

`This is the final detail about music during the Spanish colonial period. Spanish influence helped transform Filipino music into a blend of European religious traditions and native cultural expression.

Although colonization changed many aspects of Filipino society, Filipinos adapted these musical influences and transformed them into a unique cultural identity that continues to be celebrated today.`
    ]
},

{
    q: [
        "🍲 What foods were influenced by Spanish colonization?",
        "🍲 Learn more about Spanish-influenced cuisine",
        "🍲 Discover deeper Spanish culinary influences",
        "🍲 What cooking methods were introduced?",
        "🍲 How did fiestas influence Filipino food culture?",
        "🍲 Final details about Spanish colonial cuisine"
    ],

    a: [

`Spanish colonization introduced new cooking styles, ingredients, and dishes that greatly influenced Filipino cuisine. Foods such as adobo, menudo, afritada, and embutido reflect strong Spanish culinary traditions combined with local Filipino ingredients.

Tomatoes, garlic-based sauces, and methods like sautéing and stewing became common during this period. These influences helped create the rich and flavorful dishes that are still enjoyed in the Philippines today.`,

`Fiesta foods became an important part of Filipino celebrations because of Spanish cultural influence. Large meals were often prepared during religious festivals, family gatherings, and town events.

Spanish cooking techniques blended with native practices, allowing Filipino cuisine to develop its own unique identity. Many recipes were adapted over generations using local spices, vegetables, and seafood.`,

`Bread, pastries, and noodle dishes were also introduced or popularized during the Spanish colonial era. Local bakeries eventually became part of daily Filipino life, especially in towns near churches and plazas.

The influence of Spanish cuisine remains visible today because food became one of the strongest cultural connections between Spain and the Philippines during more than 300 years of colonization.`,

`Spanish colonization introduced cooking methods such as braising, sautéing, roasting, and stewing. These techniques improved food preparation and added new flavors to local dishes.

Filipinos adapted these methods using local ingredients like coconut milk, vinegar, seafood, and native spices, resulting in a unique fusion of Spanish and indigenous cuisine.`,

`Fiestas encouraged communities to prepare elaborate meals for religious celebrations and special occasions. Families often served large amounts of food to guests as a symbol of hospitality and gratitude.

Because of this tradition, food became deeply connected to Filipino celebrations, family gatherings, and cultural identity even after the Spanish colonial period ended.`,

`This is the final detail about Spanish colonial cuisine. Spanish influence changed Filipino food culture through ingredients, cooking styles, and festive traditions that continue to exist today.

Modern Filipino cuisine remains a combination of native creativity and centuries of foreign influence, making it one of the most diverse culinary traditions in Asia.`
    ]
},

{
    q: [
        "👗 How did Spanish rule influence Filipino fashion?",
        "👗 Discover more about Spanish-era clothing",
        "👗 Explore traditional fashion during Spanish rule",
        "👗 What clothing represented social status?",
        "👗 How did religion affect clothing styles?",
        "👗 Final details about Spanish colonial fashion"
    ],

    a: [

`Spanish colonization introduced more formal and conservative styles of clothing in the Philippines. Traditional garments such as the Baro’t Saya for women and the Barong Tagalog for men became popular during this period.

Clothing often reflected social status, wealth, and education. Members of the upper class wore more detailed fabrics, embroidery, and accessories influenced by European fashion trends.`,

`Catholic values strongly affected the way people dressed during the Spanish era. Clothing became more modest, layered, and elegant compared to some pre-colonial styles.

Women commonly wore long skirts and embroidered blouses, while men wore loose formal shirts made from lightweight fabrics. These styles later evolved into recognized symbols of Filipino identity.`,

`Fashion during the Spanish colonial period was not only about appearance but also about social hierarchy and cultural adaptation. Indigenous and Spanish styles gradually blended together over time.

Today, traditional Filipino attire used in formal events and cultural celebrations still carries many elements that originated during Spanish rule.`,

`Wealthy Filipinos and Spanish officials often wore imported fabrics, decorative embroidery, and accessories that represented power and social class. Clothing became a visible symbol of status in society.

Meanwhile, ordinary Filipinos usually wore simpler versions of traditional garments made from local materials and lightweight fabrics suitable for the tropical climate.`,

`Religion encouraged modesty in clothing during the Spanish colonial era. Many garments were designed to cover more of the body compared to earlier indigenous styles.

Church teachings and Spanish cultural values influenced how people dressed during public gatherings, religious ceremonies, and community events.`,

`This is the final detail about Spanish colonial fashion. Spanish influence reshaped Filipino clothing through religion, class distinctions, and European-inspired designs.

Despite these foreign influences, Filipinos preserved native craftsmanship and eventually transformed colonial-era clothing into important symbols of national identity and culture.`
    ]
},


{
    q: [
        "🏛️ How did Spanish colonization shape Filipino culture and traditions?",
        "🏛️ Explore more cultural traditions",
        "🏛️ Learn deeper cultural influences from Spanish rule",
        "🏛️ How did religion affect Filipino communities?",
        "🏛️ What traditions continue today?",
        "🏛️ Final details about Spanish colonial culture"
    ],

    a: [

`Spanish colonization greatly influenced Filipino culture, especially through religion, language, celebrations, and community traditions. Catholicism became one of the strongest foundations of Filipino society during this period.

Fiestas, religious processions, and church-centered celebrations became important cultural practices in many towns and provinces across the Philippines.`,

`The Spaniards introduced systems of education, governance, and social organization that changed everyday life in Filipino communities. Churches became central places for both worship and public gatherings.

Many Filipino surnames, traditions, and customs today still reflect Spanish influence. These cultural changes continued to shape Filipino identity long after the colonial era ended.`,

`Spanish and indigenous traditions gradually blended together, creating unique Filipino customs that remain visible today. Music, dance, food, architecture, and festivals all carry traces of this historical connection.

Despite colonial influence, Filipinos also preserved many native traditions, resulting in a culture that combines both local heritage and foreign influence.`,

`Religion became a central part of community life during the Spanish colonial era. Churches often served as places for worship, education, social gatherings, and public announcements.

Catholic teachings influenced family traditions, celebrations, and moral values that shaped Filipino society for generations.`,

`Many traditions introduced during Spanish rule continue to exist in the Philippines today. Religious festivals, town fiestas, processions, and holiday celebrations remain important parts of Filipino culture.

Historic churches, Spanish-inspired architecture, and traditional customs continue to remind Filipinos of the country’s colonial past.`,

`This is the final detail about Spanish colonial culture. Spanish influence transformed many aspects of Filipino life, including religion, celebrations, education, and community traditions.

Although colonization changed Philippine society, Filipinos adapted these influences while preserving native customs, creating a culture that remains uniquely Filipino today.`
    ]
}

];

/* =========================
   OPEN / CLOSE
========================= */

chatToggle.onclick = () => {
    chatbox.style.display = "flex";
};

if (closeChat){
    closeChat.onclick = () => {
        chatbox.style.display = "none";
    };
}

/* =========================
   CREATE MESSAGE
========================= */

function createMessage(text, type){

    const msg = document.createElement("div");

    msg.className = `msg ${type}`;

    // PARAGRAPH SPACING
    const formattedText = text.replace(/\n\n/g, "<br><br>");

    if(type === "bot"){

        msg.innerHTML = `
            <img src="divine.jpg" class="pfp">
            <span>${formattedText}</span>
        `;

    } else {

        msg.innerHTML = formattedText;
    }

    return msg;
}

/* =========================
   CREATE QUESTIONS
========================= */

function createQuestions(){

    const container = document.createElement("div");

    container.id = "questionContainer";

    qa.forEach(item => {

        const btn = document.createElement("button");

        btn.className = "question-btn";

        // SHOW FIRST QUESTION ONLY
        btn.textContent = item.q[0];

        btn.onclick = () => {

            selectedQA = {
                item: item,
                button: btn
            };

            document.querySelectorAll(".question-btn")
                .forEach(b => b.classList.remove("selected"));

            btn.classList.add("selected");

            chatInput.value = btn.textContent;

            sendBtn.classList.add("active");
        };

        container.appendChild(btn);
    });

    return container;
}

/* =========================
   START CHAT
========================= */

function startChat(){

    chatBody.innerHTML = "";

    const intro = createMessage(
`Hola! Mabuhay! 👋🏻 I’m Divine, your guide to the Spanish colonial period.

I’m ready to answer your questions—simply select a topic below to begin exploring the exhibit.`,
        "bot"
    );

    chatBody.appendChild(intro);

    chatBody.appendChild(createQuestions());
}

/* =========================
   SEND MESSAGE
========================= */

function sendMessage(){

    if (!selectedQA) return;

    const selected = selectedQA.item;
    const button = selectedQA.button;

    const key = selected.q[0];

    // START MEMORY
    if (!questionHistory[key]) {
        questionHistory[key] = 0;
    }

    // CURRENT QUESTION LEVEL
    const currentLevel = Math.min(
        questionHistory[key],
        selected.q.length - 1
    );

    const userText = selected.q[currentLevel];

    /* USER MESSAGE */

    chatBody.appendChild(
        createMessage(userText, "user")
    );

    chatBody.scrollTop = chatBody.scrollHeight;

    /* RESET INPUT */

    chatInput.value = "";

    sendBtn.classList.remove("active");

    document.querySelectorAll(".question-btn")
        .forEach(b => b.classList.remove("selected"));

    selectedQA = null;

    /* TYPING */

    const typing = createMessage("...", "bot");

    chatBody.appendChild(typing);

    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {

        typing.remove();

        /* ANSWER LEVEL */

        const answerIndex = Math.min(
            questionHistory[key],
            selected.a.length - 1
        );

        const response = selected.a[answerIndex];

        /* BOT MESSAGE */

        chatBody.appendChild(
            createMessage(response, "bot")
        );

        chatBody.scrollTop = chatBody.scrollHeight;

        /* UPDATE MEMORY */

        questionHistory[key]++;

        /* CHANGE BUTTON QUESTION */

        const nextLevel = Math.min(
            questionHistory[key],
            selected.q.length - 1
        );

        button.textContent = selected.q[nextLevel];

    }, 1200);
}

/* =========================
   EVENTS
========================= */

sendBtn.onclick = sendMessage;

if(chatInput){
    chatInput.onkeydown = (e) => e.preventDefault();
}

/* =========================
   INIT
========================= */

startChat();

});
