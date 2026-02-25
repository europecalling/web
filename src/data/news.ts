import etisImg from "@/assets/ETIS.jpg";
import blogTopImg from "@/assets/blog-top.jpeg";
import craftingImg from "@/assets/crafting.jpeg";
import diversImg from "@/assets/divers.jpeg";
import dailyImg from "@/assets/daily.jpeg";
import azerbaijanGrowthImg from "@/assets/blogs/azerbaijan-travel-tourism-growth-2025.jpeg";
import kazakhstanTopCentralAsiaImg from "@/assets/blogs/kazakhstan-tops-central-asia-azerbaijan.jpeg";
import kazakhstan75MillionImg from "@/assets/blogs/kazakhstan-7-5-million-tourists-2025.jpeg";
import visaFree2026Img from "@/assets/blogs/visa-free-travel-2026.jpeg";
import georgiaInsuranceImg from "@/assets/blogs/georgia-mandatory-insurance.jpeg";
import georgiaGccImg from "@/assets/blogs/georgia-visa-free-world-class-venues.jpeg";

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
    id: 18,
    category: "Industry News",
    title: "Azerbaijan’s Travel & Tourism Sector Set for Strong Growth in 2025",
    excerpt: "WTTC projects ₼10.3BN contribution to the national economy and 472,000 jobs supported this year, with domestic visitor spending set to reach a new record.",
    content: `
      <h3>WTTC Forecast: Record Year Ahead</h3>
      <p><strong>London, UK</strong> — Azerbaijan’s Travel & Tourism sector is set for a year of significant growth in 2025, with new data from the World Travel & Tourism Council (WTTC) forecasting a contribution of ₼10.3BN to the national economy — a 32% year-on-year rise, representing 8.2% of total GDP.</p>
      <p>This year, the sector is also expected to support <strong>472,000 jobs</strong>, representing nearly 10% of total national employment.</p>
      <h3>Visitor Spending Highlights</h3>
      <p>International visitor spending in 2025 is projected to reach ₼5.5BN, marking a full post-pandemic recovery, while domestic visitor spending is forecast to reach a record new milestone at ₼3.8BN. The sharp growth in both domestic and international visitor spending signals renewed strength in the country’s tourism economy.</p>
      <blockquote><p>Julia Simpson, WTTC President &amp; CEO: “Azerbaijan is turning heads in the global Travel &amp; Tourism sector. With visitor spending rising and employment accelerating, 2025 is shaping up to be a breakthrough year. These figures reflect growing international appeal and the success of Azerbaijan’s long-term focus on diversification, cultural promotion, and sustainable tourism development. WTTC is proud to support the country’s journey.”</p></blockquote>
      <h3>Looking Back at 2024</h3>
      <p>In 2024, Azerbaijan’s Travel &amp; Tourism sector contributed ₼7.8BN to the economy, 10% behind 2019 levels, and supported 423,700 jobs. International visitor spending reached ₼3.4BN, a 29% increase year-on-year. Domestic visitor spending totalled ₼3.5BN, nearly 10% above 2023 levels. The upward trend across all indicators sets the stage for Azerbaijan to continue rising as a global tourism destination.</p>
      <h3>Vision 2035: Long-Term Promise</h3>
      <p>Looking ahead, WTTC forecasts that by 2035, Azerbaijan’s Travel &amp; Tourism sector will contribute over ₼17BN to the economy, almost 11% of GDP, and support almost 670,000 jobs — representing the creation of nearly 200,000 new jobs over the next decade. International visitor spending is expected to reach just under ₼9.5BN, while domestic visitor spending is forecast at ₼6.3BN, reflecting balanced and sustained sector growth.</p>
      <p>For more information and to access the full factsheet, including WTTC’s latest Environmental Social Research (ESR), please visit <a href="https://wttc.org" target="_blank" rel="noopener noreferrer">WTTC's Research Hub</a>.</p>
    `,
    date: "June 10, 2025",
    image: azerbaijanGrowthImg,
    slug: "azerbaijan-travel-tourism-strong-growth-2025",
  },
  {
    id: 19,
    category: "Destination News",
    title: "Kazakhstan Tops Central Asia in Tourism Growth to Azerbaijan",
    excerpt: "More than 181,000 foreign nationals visited Azerbaijan in January 2026, with significant growth from Kazakhstan and Uzbekistan, according to the State Tourism Agency.",
    content: `
      <h3>January 2026 Arrivals</h3>
      <p>More than 181,000 foreign nationals visited Azerbaijan in January 2026, according to the State Tourism Agency of Azerbaijan — <strong>5% (8,984 people) more</strong> compared to the same period in 2025. Growth is particularly strong among tourists from Central Asia, led by Kazakhstan and Uzbekistan.</p>
      <h3>Key Source Markets</h3>
      <p>Arrivals from <strong>Kazakhstan</strong> reached 5,676, up 2.5% year-on-year, underscoring sustained interest in Azerbaijan as a tourist and business destination. Tourist flow from <strong>Uzbekistan</strong> increased to 5,130 visitors.</p>
      <p>Among other key markets: Russia (42,342 visitors), Türkiye (36,536), Iran (15,399), India (9,070), and Saudi Arabia (8,976 — 44.9% more than the previous year). The top 10 also include Georgia (8,734), Pakistan (6,758), and Israel (4,972).</p>
      <h3>2026 Promotion Strategy</h3>
      <p>Starting in 2026, Azerbaijan plans to intensify the use of both digital and traditional promotion channels to boost travel, raise awareness of the country, and strengthen its position in the international tourism market.</p>
    `,
    date: "February 1, 2026",
    image: kazakhstanTopCentralAsiaImg,
    slug: "kazakhstan-tops-central-asia-tourism-growth-azerbaijan",
  },
  {
    id: 20,
    category: "Industry News",
    title: "Kazakhstan Draws 7.5 Million Foreign Tourists in First Half of 2025",
    excerpt: "Kazakhstan recorded 7.5 million foreign tourist arrivals in the first half of 2025, with strong domestic accommodation use and continued sector investment.",
    content: `
      <h3>First Half 2025 Results</h3>
      <p>Kazakhstan recorded <strong>7.5 million foreign tourist arrivals</strong> in the first half of 2025, according to the Ministry of Tourism and Sports, which released the results of the summer season.</p>
      <h3>Domestic Tourism</h3>
      <p>During the same period, 3.9 million Kazakhstani citizens used domestic accommodation facilities — half a million more than in the first half of 2024.</p>
      <h3>Investment &amp; Revenue</h3>
      <p>Investment in the tourism sector’s fixed assets reached <strong>592 billion tenge</strong>. Revenues from accommodation facilities totalled <strong>151 billion tenge</strong>.</p>
      <p>Currently, Kazakhstan operates 4,442 accommodation facilities with a combined capacity of over 232,000 beds, supporting the country’s position as a growing regional tourism hub.</p>
    `,
    date: "August 15, 2025",
    image: kazakhstan75MillionImg,
    slug: "kazakhstan-7-5-million-foreign-tourists-first-half-2025",
  },
  {
    id: 21,
    category: "Visa Updates",
    title: "Visa-Free Travel 2026: Two New Destinations for Indian Passport Holders",
    excerpt: "The Indian passport gains visa-free access to Malaysia and Kazakhstan in 2026, opening new routes for leisure and short business trips.",
    content: `
      <h3>Passport Index Update</h3>
      <p>The Indian passport has climbed five spots to <strong>80th</strong> in the 2026 Henley Passport Index, reflecting growing diplomatic influence. While the total number of visa-free destinations has slightly dipped to 55, India has gained fresh access to <strong>Malaysia</strong> and <strong>Kazakhstan</strong>, marking a strategic win for tourism and business mobility in Southeast and Central Asia.</p>
      <h3>Strategic Wins: Malaysia and Kazakhstan</h3>
      <p>Through a mix of diplomacy and digital-visa arrangements, India has secured expanded access to two major hubs:</p>
      <ul>
        <li><strong>Malaysia:</strong> A key partner in the “Visit Malaysia Year 2026” campaign, focusing on tourism and business ties.</li>
        <li><strong>Kazakhstan:</strong> A central pillar of India’s strategic outreach in Central Asia, facilitating short-term professional and leisure travel.</li>
      </ul>
      <p>These additions open new routes beyond traditional destinations like Dubai and Singapore, giving Indian travellers more flexibility for leisure and business trips.</p>
      <h3>Visa-Free Stays</h3>
      <p>Indian citizens can enjoy visa-free stays — <strong>30 days in Malaysia</strong> and <strong>14 days in Kazakhstan</strong>. Travellers must keep documents ready and submit required digital forms. Entry is for tourism and short visits; employment or extended stays require a visa.</p>
      <h3>Malaysia: Requirements</h3>
      <ul>
        <li><strong>Purpose:</strong> Tourism, social visits, leisure only.</li>
        <li><strong>Mandatory:</strong> Submit the Malaysia Digital Arrival Card (MDAC) online at least 3 days before travel.</li>
        <li><strong>Documents:</strong> Passport valid for 6+ months, return/onward ticket, hotel proof or host address, proof of funds (approx. $50/day).</li>
      </ul>
      <p>Malaysia has extended 30-day visa-free entry for Indian citizens through December 31, 2026, as part of its “Visit Malaysia Year 2026” tourism push.</p>
      <h3>Important Note</h3>
      <p>Visa-free entry does not guarantee admission. Indian tourists must meet all immigration requirements. Entry is strictly for leisure — employment, internships, or extended stays require the appropriate visa.</p>
    `,
    date: "January 10, 2026",
    image: visaFree2026Img,
    slug: "visa-free-travel-2026-india-malaysia-kazakhstan",
  },
  {
    id: 22,
    category: "Travel Policy",
    title: "Georgia Introduces Mandatory Health and Accident Insurance for Tourists (January 2026)",
    excerpt: "From 1 January 2026, all foreign tourists visiting Georgia must hold valid health and accident insurance with minimum coverage of 30,000 GEL.",
    content: `
      <h3>New Regulation Effective January 2026</h3>
      <p>Beginning <strong>1 January 2026</strong>, all foreign tourists visiting Georgia must hold valid <strong>health and accident insurance</strong> with a minimum coverage of <strong>30,000 GEL</strong>, as per the new national regulation under the Law of Georgia “On Tourism.”</p>
      <h3>Policy Requirements</h3>
      <ul>
        <li>The policy must cover the <strong>full duration of stay</strong>.</li>
        <li>The policy must be available in <strong>Georgian or English</strong>.</li>
      </ul>
      <p>Travelers planning a trip to Georgia from 2026 onward should arrange compliant insurance before departure to ensure a smooth entry and stay.</p>
    `,
    date: "January 1, 2026",
    image: georgiaInsuranceImg,
    slug: "georgia-mandatory-health-accident-insurance-tourists-2026",
  },
  {
    id: 23,
    category: "Destination News",
    title: "Visa-Free Entry and World-Class Venues Make Georgia a Magnet for GCC Tourists",
    excerpt: "Georgia is emerging as a leading destination for GCC travelers, combining accessibility, affordability, and world-class MICE and leisure infrastructure.",
    content: `
      <h3>A Sought-After Destination</h3>
      <p>Georgia is fast emerging as one of the most sought-after destinations for travelers from the Gulf Cooperation Council (GCC) region. Blending rich history, diverse culture, and breathtaking natural landscapes, the country offers a unique mix of leisure and business experiences. Just a short flight from cities like Dubai, Doha, and Muscat, Georgia’s growing appeal lies in its <strong>accessibility</strong>, <strong>affordability</strong>, and <strong>world-class infrastructure</strong> — making it an ideal getaway for both tourists and corporate travelers.</p>
      <h3>Seamless Access for GCC Travelers</h3>
      <p>Georgia’s proximity and travel-friendly policies have been key to its rising popularity. With direct flights averaging just four hours, GCC nationals enjoy visa-free entry, while GCC residents benefit from quick and easy e-visa processes. These simplified arrangements have opened the door to more frequent visits and a steady influx of travelers from across the Gulf.</p>
      <h3>A Thriving MICE Destination</h3>
      <p>Beyond leisure, Georgia is positioning itself as a dynamic <strong>MICE</strong> (Meetings, Incentives, Conferences, and Exhibitions) hub. With premium venues such as Expo Georgia in Tbilisi and the Batumi Convention Center, the country offers modern facilities for international business events. Leading global hotel chains including Hilton, Marriott, and Radisson Blu strengthen the hospitality offering with state-of-the-art infrastructure and services.</p>
      <h3>Culture, Heritage, and Hospitality</h3>
      <p>Georgia’s cultural depth adds to its charm. Renowned for its ancient winemaking tradition in Kakheti, the country invites visitors to explore vineyards, taste authentic wines, and experience UNESCO World Heritage sites. Traditional dance, art galleries, and culinary workshops allow travelers to immerse themselves in Georgian culture and hospitality.</p>
      <h3>Adventure and Natural Beauty</h3>
      <p>From the snow-covered peaks of the Caucasus Mountains to the shores of the Black Sea, Georgia’s diverse landscapes cater to every type of traveler. Adventure enthusiasts can enjoy skiing, paragliding, and mountain trekking, while those seeking relaxation can unwind in coastal resorts or countryside retreats.</p>
      <h3>Affordability with Quality</h3>
      <p>Georgia stands out as an affordable yet high-quality destination. From boutique stays to luxury hotels, travelers can enjoy strong hospitality without overspending. With reasonably priced dining, transport, and activities, it appeals to both budget-conscious and premium travelers.</p>
      <h3>Strategic Location and Connectivity</h3>
      <p>Situated at the crossroads of Europe and Asia, Georgia serves as a convenient gateway between East and West. International airports in Tbilisi, Batumi, and Kutaisi offer smooth connections to key GCC hubs, reinforcing its appeal as both a travel destination and a regional meeting point.</p>
      <p>With 7.4 million international arrivals projected in 2024 and a significant share from the GCC, Georgia continues to attract growing interest from Gulf nations. As partnerships deepen and infrastructure expands, the country is well on its way to becoming a leading travel and MICE hub in the region.</p>
    `,
    date: "February 20, 2026",
    image: georgiaGccImg,
    slug: "visa-free-georgia-world-class-venues-gcc-tourists",
  },
];
