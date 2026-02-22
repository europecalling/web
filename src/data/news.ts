import eesImg from "@/assets/EES.jpg";
import russiaImg from "@/assets/russia.jpg";
import nomadImg from "@/assets/nomed.jpg";
import kazakhstanImg from "@/assets/a2 (1).png";
import armeniaImg from "@/assets/a4.png";
import etisImg from "@/assets/ETIS.jpg";
import trainImg from "@/assets/h2 (1).jpg";
import startupImg from "@/assets/startup.jpg";
import winterImg from "@/assets/mountain.jpg";
import flightImg from "@/assets/flight.jpg";
import visaImg from "@/assets/schgean.jpg";
import cardImg from "@/assets/germenCard.jpg";
import ouluImg from "@/assets/images.jpg";
import aivisaImg from "@/assets/aivisa.jpg";
import coolcationImg from "@/assets/coolcations.jpg";
import monocoImg from "@/assets/monoco.jpg";
import blogTopImg from "@/assets/blog-top.jpeg";
import craftingImg from "@/assets/crafting.jpeg";
import diversImg from "@/assets/divers.jpeg";
import dailyImg from "@/assets/daily.jpeg";

/**
 * Blog / Newsroom articles. Display order = array order (first item = top of page).
 * To REMOVE an article: delete its entire object from the array (the one with that id/title).
 * To EDIT: change title, excerpt, content, date, or category on the article object.
 * To HIDE temporarily: you can filter in Newsroom.tsx (e.g. by id or slug) until content is confirmed.
 */

export const news = [
  {
    id: 15,
    category: "Company Story",
    title: "CRAFTING UNFORGETTABLE JOURNEYS IN EURASIA & EUROPE",
    excerpt: "Nestled in the heart of Baku, Azerbaijan, Europe Calling DMC stands as a beacon for travel enthusiasts seeking unique, customized travel experiences.",
    content: `
      <h3>A More Rewarding Way to Travel</h3>
      <p>Nestled in the heart of Baku, Azerbaijan, Europe Calling DMC stands as a beacon for travel enthusiasts seeking unique, customized travel experiences. Founded in 2020 by the passionate Indian duo, Najath Sharafudeen and Shirin Najath, this tour company has swiftly become a leading name in the tourism industry, offering an array of comprehensive services for both groups and individual travelers.</p>

      <h3>NAJATH SHARAFUDEEN - Founder and Director</h3>
      <hr />
      <h3>The Genesis of a Dream</h3>
      <p>The story of Europe Calling DMC is as captivating as the journeys they curate. Najath Sharafudeen, a travel aficionado since childhood, dreamt of transforming his love for exploration into a vocation. With unwavering support from his life partner Shirin, this dream materialized into Europe Calling DMC. Their mutual love for travel has taken them across more than 30 countries, shaping their understanding of what makes a journey truly special.</p>
      <hr />
      <h3>Passionate Founder</h3>
      <p>Najath Sharafudeen, whose childhood dream was to earn a living doing what he loves, believes that travel is the key to achieving anything. He gained all his knowledge through traveling and wanted to turn it into a business. He gets the most joy when people customize their tour packages with his company and then share their new experiences and discoveries with him. Their happiness and feedback bring him the greatest satisfaction. The most positive aspect of this business is the joy he feels when customers contact him to share their experiences. This is what drives him forward, with financial gains being secondary. His story is a testament to the power of passion, perseverance, and dreams.</p>
      <p>An Indian and a Malayali couple started a project to make Europe Calling well-known and widely spread in the initial market. They took a vintage 1995 Volkswagen van in Georgia, modified the interiors themselves, and converted it into a home where they could live and travel around. Then they made it known to the market by traveling and posting videos and pictures. This marked the beginning of their success story.</p>
    `,
    date: "February 10, 2026",
    image: craftingImg,
    slug: "crafting-unforgettable-journeys-eurasia-europe",
  },
  {
    id: 16,
    category: "Services",
    title: "Europe Calling: Diverse and Customizable Packages",
    excerpt: "Europe Calling specializes in tailor-made tour packages across various Eurasian & Europe countries, catering to different types of travelers.",
    content: `
      <h3>Diverse and Customizable Packages</h3>
      <p>Europe Calling specializes in tailor-made tour packages across various Eurasian & Europe countries, including Kazakhstan, Armenia, Georgia, Azerbaijan, France, Belgium, Netherlands and Kyrgyzstan. Their offerings are diverse, catering to different types of travelers:</p>
      <ul>
        <li><strong>Group Packages:</strong> Perfect for friends, corporate retreats, or special interest groups.</li>
        <li><strong>Solo Packages:</strong> Designed for the lone explorer seeking personalized experiences.</li>
        <li><strong>Family Packages:</strong> Fun-filled and educational trips for families, ensuring every member has a memorable time.</li>
        <li><strong>Honeymoon Packages:</strong> Romantic getaways curated to create lifelong memories for newlyweds.</li>
      </ul>
      <hr />
      <h3>Commitment to Quality and Authenticity</h3>
      <p>The hallmark of Europe Calling is their commitment to providing top-notch services. They collaborate with professional guides who bring the history, culture and customs of each destination to life. Travelers enjoy modern transportation, stay in quality hotels, and dine at fine restaurants. Every vendor, from guides to hoteliers, is carefully selected to ensure an authentic and enriching travel experience.</p>
      <p>What sets Europe Calling apart is the personal touch infused into every package. Najath and Shirin’s journey from hostel stays to running a successful travel business began when they met a Polish couple in Georgia who became their first clients. A 4–5 days Georgia package was given to them free of cost. This personal approach has since delighted over 2000+ happy customers, who appreciate the couple’s dedication to creating bespoke travel experiences that cater to their unique needs and interests.</p>
      <hr />
      <h3>Expanding Horizons</h3>
      <p>Europe Calling DMC’s success in Azerbaijan has paved the way for expansion. With a strong base in Georgia and Dubai, the company is now set to extend its footprint into Northern Europe by December. This growth is a testament to their unwavering dedication to make travel rewarding and accessible to all.</p>
      <hr />
      <h3>Why Choose Europe Calling?</h3>
      <ol>
        <li><strong>Personalized Attention:</strong> Every package is curated to meet the specific needs and desires of the traveler.</li>
        <li><strong>Experienced Guides:</strong> Professional and knowledgeable guides enhance the travel experience.</li>
        <li><strong>Quality Services:</strong> Enjoy modern transportation, quality accommodations, and fine dining.</li>
        <li><strong>Diverse Destinations:</strong> From the ancient wonders of Armenia to the natural beauty of Kyrgyzstan, explore the best of Eurasia and Central Europe.</li>
        <li><strong>Passionate Founders:</strong> Led by a couple who live and breathe travel, ensuring every journey is infused with their enthusiasm and expertise. Europe Calling DMC is not just a tour company; it’s a gateway to authentic, memorable, and enriching travel experiences.</li>
      </ol>
      <p>With a foundation built on passion and a commitment to excellence, Europe Calling invites you to explore the wonders of Eurasia through their expertly crafted tour packages. Let Europe Calling DMC be your trusted partner in discovering the world, one rewarding journey at a time.</p>
      <hr />
      <h3>SHIRIN N - Co Founder</h3>
      <p>Embark on a journey of a lifetime with Europe Calling. Whether you’re planning a group adventure, a solo expedition, a family vacation, or a romantic honeymoon, Europe Calling is here to turn your travel dreams into reality.</p>
      <p><strong>For bookings and inquiries:</strong><br />
      📞 +994 55 5533744 (Azerbaijan)<br />
      📞 +995 568616839 (Georgia)</p>
    `,
    date: "February 12, 2026",
    image: diversImg,
    slug: "europe-calling-diverse-customizable-packages",
  },
  {
    id: 14,
    category: "Awards",
    title: "HE’S A TOP GUY",
    excerpt: "Thrissur-born Najath Sharafudeen has just won the Public Charity Award in the Top Model competition in Britain.",
    content: `
      <p>At the prize giving ceremony for the Top Model competition at the Amba Charing Cross Hotel, London, on March 24, the announcer said, “In the men’s category, it is Najath Sharafudeen.” The Thrissur-born model stepped up and received a glass plaque with the words “Top Model” right across it, a sash and a goodies bag, even as whoops and cheers rang across the hall.</p>

      <p>He is the first Indian and the second Asian to win this national-level competition. The Top Model is one of the leading competitions in the UK. In the men’s category, Najath won the Public Charity Award. There were 17 finalists from countries as diverse as Ireland, Spain, Africa and the United Kingdom.</p>

      <p>This is a web-based competition. Visitors to the website have to click on the model they like, by assessing their appearance and walk, and send money — if you give one pound it is equivalent to one vote. “If you give 30 pounds it would get 30 votes and for 100 pounds, it is 150 votes.” Voting took place over five months. In the end, Najath received about 2,000 votes and earned over 1,300 pounds. The money has been given to the Children with Cancer UK organisation, which is the leading charity in Britain for childhood cancer.</p>

      <p>At the British School of Fashion, where he is studying brand development, Najath says there are differences between fashion in India and Britain. “The majority of Indians follow a traditional fit and style. The British believe wearing clothes is a fashion statement. And they are able to draw attention to themselves.”</p>

      <p>In Britain, when it comes to material, there are three types: white shirts, poplin, herringbone and Oxford. These are formal shirts and are 100 per cent cotton and non-iron. As for fittings, there are four types: super-fitted, fitted, slim fit and regular fit. But when they go for dinner, the style is different. Then the men will have V-cut collars, cufflinks and dress studs instead of buttons.</p>

      <p>As for the women, they wear suits and trousers in the office. For evening wear, it is snake or animal prints in snake colours. The fashion all over the world today is wearing colours like red, rose and fluorescent. And there is no categorising of the clothes as mini skirts or short dresses. They just call it a dress.</p>

      <p>Because the climate is very cold now, the ladies wear full jeans and trenchcoats while going to a party. Once there, they will take it off, since most places are centrally heated.</p>

      <p>Najath also notes differences in education. “In India, education is good, but the system we follow is different from the UK. In our system we need to step up, but the quality of teaching is good.”</p>

      <p>He also did notice a difference in the attitude of students towards their teachers. “In Britain, you can put your leg on a chair while chatting with your teacher and having a coffee. It is very casual. But in India, when we see a teacher, we are very formal. When I compare the two styles, the UK system is better as the students are able to develop a sense of independence and self confidence.”</p>

      <p>Meanwhile, he is nearing the end of his 16 month course. Najath did his Bachelor of Business Administration degree from SRM College, Chennai, and participated in 35 ramp shows in India.</p>

      <p>“My dream is to create a fashion brand in India based on British designs,” he says.</p>
    `,
    date: "March 24, 2026",
    image: blogTopImg,
    slug: "hes-a-top-guy-najath-sharafudeen",
  },
  {
    id: 17,
    category: "Announcement",
    title: "SHOCKING NEWS FROM AZERBAIJAN FOR ALL INDIANS",
    excerpt: "GUESS WHAT JUST HAPPENED THERE? Europe Calling is entering an exciting new phase with expanded destinations and upgraded services.",
    content: `
      <h3>GUESS WHAT JUST HAPPENED THERE?</h3>
      <p>Europe Calling is entering an exciting new phase with expanded destinations, upgraded services, and customized packages crafted from the founder’s recent travels — all built on five years of experience. Stay tuned… it’s worth the wait.</p>
      <hr />
      <h3>Celebrating 5 Years of Success</h3>
      <p>We are proud to celebrate 5 successful years and over 10,000+ travelers served. As a token of appreciation, 15 lucky customers will receive exclusive packages, along with special discounts for everyone who has supported us. More updates coming soon.</p>
      <p>— Team Europe Calling</p>
    `,
    date: "February 14, 2026",
    image: dailyImg,
    slug: "shocking-news-azerbaijan-indians",
  },
  {
    id: 1,
    category: "Travel Policy",
    title: "ETIAS Launch Pushed to Late 2026: What You Need to Know",
    excerpt: "The European Travel Information and Authorisation System (ETIAS) has been rescheduled for late 2026. Here's how this impacts your upcoming travel plans.",
    content: `
      <p>The European Union has officially announced a updated timeline for the European Travel Information and Authorisation System (ETIAS). Originally slated for an earlier release, the full implementation is now expected in late 2026.</p>
      
      <h3>Why the Delay?</h3>
      <p>The postponement allows member states more time to integrate their national border systems with the central ETIAS database. This ensures a smoother rollout and minimizes disruptions for millions of travelers.</p>

      <h3>What This Means for Travelers:</h3>
      <ul>
        <li><strong>Visa-Free Travel Continues:</strong> Travelers from visa-exempt countries (like the US, UK, and Canada) can continue entering the EU with just their passports until the system goes live.</li>
        <li><strong>Future Requirements:</strong> Once active, ETIAS will require a quick online application and a small fee (approx. €7) valid for three years.</li>
      </ul>

      <p>"While the delay provides a breather, we advise all our clients to stay updated," says our Head of Travel. Europe Calling will continue to monitor these developments closely to keep you prepared.</p>
    `,
    date: "January 15, 2026",
    image: etisImg,
    slug: "etias-launch-delayed-late-2026",
  },
  {
    id: 2,
    category: "Digital Borders",
    title: "The New EES System: A New Era for European Borders",
    excerpt: "Since its launch in late 2025, the Entry/Exit System (EES) has transformed border control. We analyze its impact on processing times and traveler experience.",
    content: `
      <p>The EU's Entry/Exit System (EES), fully operational since October 2025, has successfully replaced traditional passport stamping with biometric digital registration. This monumental shift aims to tighten security while streamlining legitimate travel.</p>

      <h3>Early Impacts Observed:</h3>
      <ul>
        <li><strong>Initial Queues:</strong> While the first few months saw longer wait times at major airports like Frankfurt and Paris CDG, processing speeds have stabilized as travelers adapt to the self-service kiosks.</li>
        <li><strong>Data Security:</strong> The system collects fingerprints and facial images, storing them securely to prevent overstays and irregular migration.</li>
      </ul>

      <p>For our clients, this means arriving at the airport a bit earlier is the new norm. "Digital borders are the future," notes our travel analyst. "They offer a layer of security and efficiency that manual stamps never could."</p>
    `,
    date: "December 12, 2025",
    image: eesImg,
    slug: "ees-system-impact-report",
  },
  {
    id: 3,
    category: "Nomad Visas",
    title: "2026 Outlook: Spain & Italy Expand Digital Nomad Quotas",
    excerpt: "Great news for remote workers! Southern Europe is opening its doors wider in 2026 with expanded visa quotas and simplified tax regimes.",
    content: `
      <p>As remote work becomes a permanent fixture of the global economy, Spain and Italy are vying for the top spot as Europe's premier digital nomad destinations. For 2026, both nations have announced significant expansions to their visa programs.</p>

      <h3>Key Updates for 2026:</h3>
      <ul>
        <li><strong>Spain:</strong> Has introduced a 'fast-track' renewal process for existing nomads and reduced specific income tax rates for the first four years of residency.</li>
        <li><strong>Italy:</strong> The long-awaited implementation decrees are fully active, with a specific focus on attracting tech talent and creatives to rural 'borghi' (villages).</li>
      </ul>

      <p>Europe Calling has already helped over 200 freelancers secure these visas in the last quarter alone. If you're ready to move your office to a sunny piazza, now is the time to apply.</p>
    `,
    date: "January 20, 2026",
    image: nomadImg,
    slug: "digital-nomad-visa-updates-2026",
  },
  {
    id: 4,
    category: "New Launch",
    title: "Alpine Elegance: Luxury Winter Retreats 2026",
    excerpt: "Discover our new collection of exclusive winter escapes in the Swiss and French Alps, featuring private chalets and world-class skiing.",
    content: `
      <p>We are proud to unveil our most ambitious winter collection yet. Alpine Elegance 2026 brings you the peak of luxury in Europe's most prestigious mountain destinations.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li><strong>Private Chalets:</strong> Handpicked properties with ski-in/ski-out access and personal butler service.</li>
        <li><strong>Exclusive Experiences:</strong> Private heli-skiing tours and sunset fondue on the glacier.</li>
        <li><strong>Wellness & Spa:</strong> Access to world-renowned thermal baths and in-house spa treatments.</li>
      </ul>

      <p>"Our goal is to provide more than just a holiday; we offer an immersion into the sublime," says our Senior Travel Curator. Bookings are now open for the 2026 season.</p>
    `,
    date: "February 5, 2026",
    image: winterImg,
    slug: "alpine-elegance-luxury-winter-retreats-2026",
  },
  {
    id: 5,
    category: "Travel Trends",
    title: "Sustainable Travel: The 'Train First' Initiative",
    excerpt: "France and Germany's push for rail travel is reshaping tourism. Short-haul flights are out; high-speed trains are in.",
    content: `
      <p>In a bold move to combat climate change, 2026 has seen a ban on several short-haul domestic flights where train alternatives exist, particularly in France and Spain. This 'Train First' policy is reshaping how tourists explore the continent.</p>

      <p>Travelers are now enjoying:</p>
      <ul>
        <li><strong>unified Rail Passes:</strong> New cross-border passes making multi-country train travel cheaper than flying.</li>
        <li><strong>Night Trains Renaissance:</strong> New sleeper routes connecting Berlin to Paris and Vienna to Brussels have launched this winter.</li>
      </ul>

      <p>At Europe Calling, we are now curating 'Slow Travel' itineraries that celebrate the journey as much as the destination.</p>
    `,
    date: "December 28, 2025",
    image: trainImg,
    slug: "sustainable-travel-train-initiative",
  },
  {
    id: 6,
    category: "Success Stories",
    title: "From Student to Startup Founder: Elena's Story",
    excerpt: "How a student visa paved the way for a successful fintech startup in Berlin. Meet Elena, one of our star alumni.",
    content: `
      <p>Elena, originally from Brazil, came to Germany on a student visa we helped process back in 2022. Fast forward to 2026, and she is now the founder of 'GreenPay,' a sustainable fintech startup based in Berlin.</p>

      <p>"The transition from student to entrepreneur visa was daunting," Elena shares. "But the legal team at Europe Calling knew exactly which loopholes to avoid and how to present my business plan."</p>

      <p>Elena's company recently raised Series A funding. Her story is a powerful reminder that a visa is just the beginning of what's possible in Europe.</p>
    `,
    date: "November 15, 2025",
    image: startupImg,
    slug: "elena-startup-success-story",
  },
  {
    id: 7,
    category: "Aviation",
    title: "Direct Flights: Delhi to Rome & Athens in 2026",
    excerpt: "Air India and IndiGo announce major European expansion with direct routes to Italy and Greece starting early 2026.",
    content: `
      <p>Great news for Indian travelers! 2026 is set to be the year of direct connectivity. Air India has confirmed the resumption of its non-stop Delhi-Rome service, operating four times a week starting March 25, 2026.</p>

      <p>Meanwhile, low-cost carrier IndiGo is making history by launching the first direct flights between India and Greece. New routes from Delhi and Mumbai to Athens will commence in January 2026.</p>

      <h3>What This Means:</h3>
      <ul>
        <li><strong>Shorter Travel Times:</strong> No more long layovers in the Gulf or Europe.</li>
        <li><strong>Competitive Pricing:</strong> More carriers mean better deals for tourists.</li>
      </ul>

      <p>Europe Calling is already offering exclusive package deals for these new routes. Contact us to be among the first to fly direct.</p>
    `,
    date: "January 12, 2026",
    image: flightImg,
    slug: "direct-flights-delhi-rome-athens-2026",
  },
  {
    id: 8,
    category: "Visa Updates",
    title: "Schengen Visa Fees to Increase in 2026",
    excerpt: "The European Commission has proposed a revised fee structure for Schengen visas. Here is what you need to budget for your next trip.",
    content: `
      <p>Travelers planning a European summer in 2026 should prepare for slightly higher costs. The European Commission has proposed an increase in the standard Schengen visa fee, citing inflation and the need to upgrade consular services.</p>

      <p>The new fee structure is expected to be:</p>
      <ul>
        <li><strong>Adults:</strong> €90 (up from €80)</li>
        <li><strong>Children (6-12 years):</strong> €45 (up from €40)</li>
      </ul>

      <p>While the increase is modest, we advise applying early to avoid the peak season rush which often comes with additional expedited service fees.</p>
    `,
    date: "January 8, 2026",
    image: visaImg,
    slug: "schengen-visa-fee-increase-2026",
  },
  {
    id: 9,
    category: "Student Visas",
    title: "Germany's 'Opportunity Card' for Students",
    excerpt: "New amendments allow international students to switch to the Opportunity Card job-seeker visa more easily post-graduation.",
    content: `
      <p>Germany continues to be a top destination for students, and new rules for 2026 make staying after graduation even easier. The 'Chancenkarte' (Opportunity Card) is now accessible to recent graduates from recognized German universities without the need for a prior job offer.</p>

      <p>This provides a 12-month window to find qualified employment, during which candidates can work part-time to support themselves. It's a game-changer for non-EU students looking to build a career in Europe largest economy.</p>
    `,
    date: "December 20, 2025",
    image: cardImg,
    slug: "germany-opportunity-card-students",
  },
  {
    id: 10,
    category: "Cultural Events",
    title: "Oulu, Finland: European Capital of Culture 2026",
    excerpt: "Discover the Arctic magic! Oulu takes the stage as the European Capital of Culture 2026 with a year-long festival of lights and tech.",
    content: `
      <p>Pack your warmest coats! Oulu, Finland, has been crowned the European Capital of Culture for 2026. This northern tech hub is planning a spectacular localized program themed 'Cultural Climate Change'.</p>

      <p>Highlights include:</p>
      <ul>
        <li><strong>Arctic Light Festival:</strong> Large-scale light installations across the snowy landscape.</li>
        <li><strong>Air Guitar World Championships:</strong> The famous event gets a special cultural edition.</li>
        <li><strong>Tech & Art:</strong> Exhibitions blending Oulu's tech heritage with contemporary art.</li>
      </ul>

      <p>Europe Calling is engaging with local partners to offer exclusive 'Northern Lights & Culture' tour packages for winter 2026.</p>
    `,
    date: "January 2, 2026",
    image: ouluImg,
    slug: "oulu-capital-of-culture-2026",
  },
  {
    id: 11,
    category: "Tech & Work",
    title: "France's 'Tech Visa' Expanded to AI Specialists",
    excerpt: "In a bid to become a global AI hub, France expands its Tech Visa program to fast-track artificial intelligence researchers and engineers.",
    content: `
      <p>President Macron's vision of France as an AI superpower gets a boost with the expansion of the 'Passeport Talent' status. Effective 2026, AI specialists and data scientists get priority processing and a 4-year renewable residence permit.</p>

      <p>This applies to both employees joining French tech companies and founders launching AI startups. Family members also receive a multi-year permit automatically.</p>
    `,
    date: "December 15, 2025",
    image: aivisaImg,
    slug: "france-tech-visa-ai-expansion",
  },
  {
    id: 12,
    category: "Travel Trends",
    title: "The Rise of 'Coolcationing' in 2026",
    excerpt: "With rising summer temperatures in the south, travelers are heading north. Scandinavia and the Baltics see record booking numbers.",
    content: `
      <p>'Coolcationing'—vacationing in cooler climates—is the hottest travel trend of 2026. As heatwaves become more frequent in Southern Europe, tourists are trading Mediterranean beaches for Baltic fjords and Alpine lakes.</p>

      <p>Top trending destinations for Summer 2026 include:</p>
      <ul>
        <li><strong>Bergen, Norway:</strong> For fjord cruises and mountain hikes.</li>
        <li><strong>Tallinn, Estonia:</strong> For medieval charm without the sweltering heat.</li>
        <li><strong>High Tatras, Slovakia:</strong> For affordable alpine luxury.</li>
      </ul>
    `,
    date: "January 22, 2026",
    image: coolcationImg,
    slug: "coolcationing-travel-trend-2026",
  },
  {
    id: 13,
    category: "Success Story",
    title: "A Royal Welcome: Our Clients' Journey to Monaco",
    excerpt: "Meet the family who experienced the ultimate Mediterranean luxury tour with Europe Calling this summer.",
    content: `
      <p>This month, we are celebrating a truly unique success story. We had the honor of organizing a bespoke 14-day tour for the Robertson family, taking them from the hills of Tuscany to the glitz of Monaco.</p>
      
      <h3>Highlights of the Journey:</h3>
      <ul>
        <li><strong>Monaco Dream:</strong> A private yacht tour of the French Riviera followed by a gala dinner at the Monte Carlo Casino.</li>
        <li><strong>Tuscan Retreat:</strong> A private villa stay with olive oil tasting and vintage car tours.</li>
        <li><strong>Parisian Finale:</strong> Exclusive after-hours access to the Louvre.</li>
      </ul>

      <p>"It wasn't just a trip; it was a series of perfect moments," the Robertsons shared. At Europe Calling, we turn itineraries into legacies.</p>
    `,
    date: "February 15, 2026",
    image: monocoImg,
    slug: "royal-welcome-clients-journey-monaco",
  },
];
