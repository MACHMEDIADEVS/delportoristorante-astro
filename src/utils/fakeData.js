/* src/utils/fakeData.js */

export const fakeEvents = [
  {
    id: 1,
    title: "Cigar & Tequila Night – Featuring Dos Artes Tequila",
    slug: "cigar-tequila-night-dos-artes",
    content: `Join us for an exclusive night of Tequila, Cigars, and Italian flavors at Del Porto Ristorante!
    Enjoy a 5-course seated antipasti dinner, 6 pours of Dos Artes Tequila, and a premium cigar in an intimate lounge-style setting.
    Suggested Contribution: $125 per person.`,
    hero_event: "src/utils/content/cigar3.webp",
    flyer_event: "src/utils/content/cigar3-1.webp",
    main_data: {
      status_event: "Open",
      location_event: "New Jersey",
      date_hour_event: "09/18/2025 12:00 am",
      text_button_event: "RESERVE",
      url_button_event: "https://www.instagram.com",
    },
    sponsors: [
      {
        logo: "src/pages/blog/index.astro",
        title_sponsor: "Title",
        link_sponsor: "https://www.instagram.com",
      },
    ],
  },
  {
    id: 2,
    title: "Italian Father’s Day Feast at Del Porto",
    slug: "italian-fathers-day-feast-del-porto",
    content: `Bring Dad to Del Porto for a relaxed dinner filled with great food and good company. We’ll be offering a full lineup of favorite appetizers, handmade pastas, seafood, meats, and Italian desserts with plenty of options to choose from.
    Whiskey pairings will also be available.
    $75 per person.
    Tax and gratuity not included.`,
    hero_event: "src/utils/content/father-day.webp",
    flyer_event: "src/utils/content/father-flayer.webp",
    main_data: {
      status_event: "Open",
      location_event: "New Jersey",
      date_hour_event: "11/30/2025 6:00 pm",
      text_button_event: "RESERVE",
      url_button_event: "https://www.instagram.com",
    },
    sponsors: [
      {
        logo: "src/pages/blog/index.astro",
        title_sponsor: "Father’s Day Wines",
        link_sponsor: "https://www.instagram.com",
      },
    ],
  },
  {
    id: 3,
    title: "The Orin Swift Experience",
    slug: "the-orin-swift-experience",
    content: `5 Course Wine Dinner.
The Orin Swift Experience.
Join us at for an exceptional evening. This exclusive 5-Course Wine Dinner will be paired with premium wines curated by Dave Phinney of Orin Swift Cellars. Each wine has been carefully selected to elevate the flavors of each dish, making this a night to remember.`,
    hero_event: "src/utils/content/wine-diner.webp",
    flyer_event: "src/utils/content/wine-flayer.webp",
    main_data: {
      status_event: "Open",
      location_event: "New Jersey",
      date_hour_event: "12/18/2025 10:00 pm",
      text_button_event: "RESERVE",
      url_button_event: "https://www.instagram.com",
    },
    sponsors: [
      {
        logo: "src/pages/blog/index.astro",
        title_sponsor: "Orin Swift Wines",
        link_sponsor: "https://www.instagram.com",
      },
    ],
  },
  {
    id: 4,
    title: "CIGAR NIGHT FUNDRAISER",
    slug: "cigar-night-fundraiser",
    content: `At Del Porto Italian Ristorante
91 Elizabeth Avenue, Elizabeth, NJ 07206
Thursday, May 15 | 6 PM – 9 PM

JOIN US FOR AN EXCLUSIVE EVENING OF
Fine Cigars, Delicious Italian Cuisine, and Great Company
As we come together to support the Ronald McDonald House!

$125 PER PERSON
Includes: Entrance, Cigars, Wine, Beer, and Food!
All proceeds will go to the Ronald McDonald House

BE A PART OF SOMETHING BIGGER THAN YOU!
Help us reach our goal of raising $10,000 to support families in need through the Ronald McDonald House.

Scan to RSVP

GET TO KNOW THE RONALD MCDONALD HOUSE

Who Are They?
A nonprofit dedicated to supporting families with sick children by providing housing, resources, and care during treatment.

What Do They Do?
• Provide a home-away-from-home near hospitals
• Ronald McDonald Family Rooms offer rest inside medical centers
• Care Mobiles bring healthcare to underserved areas

Why Should You Donate?
Your contribution helps families stay close to their children during medical care—offering meals, lodging, support, and hope.

BECOME A SPONSOR

TIER 1 – $1,000
• Full Page Ad
• Logo on All Brochures
• 3 Event Tickets

TIER 2 – $500
• ½ Page Ad
• Logo on All Brochures
• 2 Event Tickets

TIER 3 – $250
• ¼ Page Ad
• Logo on All Brochures
• 1 Event Ticket

CONTACT US TO SPONSOR
THE ARENDEL GROUP
(908) 329-2672
info@thearendelgroup.com`,
    hero_event: "src/utils/content/cigar3.webp",
    flyer_event: "src/utils/content/cigar3-1.webp",
    main_data: {
      status_event: "Open",
      location_event: "New Jersey",
      date_hour_event: "12/05/2025 10:00 pm",
      text_button_event: "RESERVE",
      url_button_event: "https://www.instagram.com",
    },
    sponsors: [
      {
        logo: "src/pages/blog/index.astro",
        title_sponsor: "Local Cigar Co.",
        link_sponsor: "#",
      },
      {
        logo: "src/pages/blog/index.astro",
        title_sponsor: "Charity Foundation",
        link_sponsor: "#",
      },
    ],
  },
  {
    id: 5,
    title: "Mediterranean Wine & Dine Night",
    slug: "mediterranean-wine-dine-night",
    content: `Experience the rich flavors of the Mediterranean at Del Porto Ristorante.
Enjoy a 4-course dinner inspired by coastal Italian cuisine, paired with hand-selected Mediterranean wines.
Limited seating available — reserve early to secure your table!
$95 per person.`,
    hero_event: "src/utils/content/father-flayer.webp",
    flyer_event: "src/utils/content/father-flayer.webp",
    main_data: {
      status_event: "Open",
      location_event: "New Jersey",
      date_hour_event: "10/15/2025 7:00 pm",
      text_button_event: "RESERVE",
      url_button_event: "https://www.instagram.com",
    },
    sponsors: [
      {
        logo: "src/pages/blog/index.astro",
        title_sponsor: "Mediterranean Wines",
        link_sponsor: "https://www.instagram.com",
      },
    ],
  },
];

export const fakeServices = [
  { 
    title_service: "CATERING",
    image_background_service:
      "public/assets/images/home/catering.webp",
    explore_link: "/catering",
  },
  {
    title_service: "GIFT CARDS",
    image_background_service:
      "public/assets/images/home/gift-card.webp", 
    explore_link: "/gift-cards",
  },
  {
    title_service: "EVENT VENUE",
    image_background_service:
      "public/assets/images/home/bookvenue.webp", 
    explore_link: "/events",
  },
  {
    title_service: "EXPLORE LINK",
    image_background_service:
      "public/assets/images/home/delPortoRistoranteGallery27.webp", 
    explore_link: "#",
  },
];

export const fakeMenus = [
  {
    id: 77,
    title: "Homemade Pasta",
    slug: "homemade-pasta",
    image_card: "src/utils/content/Homemade-Pasta.webp",
    subtitle: "",
    link_order_online: "https://order.toasttab.com/online/delportoristorante",
    homepage_carta: true,
    order_frontpage: 8,
    category: [
      {
        title_category: "",
        list: [
          { name_plate: "SPINACH & RICOTTA RAVIOLI", description_name: "Parmigiano Cream Sauce & Basil Pesto", single_price: true, price: 28, dual_price: "" },
          { name_plate: "CHICKPEA FUSILLI & GRILLED CHICKEN GF", description_name: "Primavera Vegetables with Alfredo Sauce", single_price: true, price: 28, dual_price: "" },
          { name_plate: "SPAGHETTI CARBONARA", description_name: "Crispy Bacon, Egg Yolk, Black Pepper & Pecorino", single_price: true, price: 28, dual_price: "" },
          { name_plate: "PAPPARDELLE BOLOGNESE ", description_name: "Tradizionale 100% Beef Ragu", single_price: true, price: 32, dual_price: "" },
          { name_plate: "RIGATONI & MEATBALLS ", description_name: "100% Beef, Fresh Mozzarella & Parmigiano Cheese in San Marzano Tomato Sauce", single_price: true, price: 32, dual_price: "" },
          { name_plate: "EGGPLANT LASAGNA", description_name: "Al Forno", single_price: true, price: 36, dual_price: "" },
          { name_plate: "LINGUINI VONGOLE ", description_name: "Manila Clams & Cockles, Garlic-White Wine", single_price: true, price: 38, dual_price: "" },
          { name_plate: "SPICY PENNE VODKA ", description_name: "Grilled Jumbo Shrimp", single_price: true, price: 38, dual_price: "" },
          { name_plate: "FETTUCCINE SHORT RIB RAGU ", description_name: "Shaved Ricotta Salata", single_price: true, price: 49, dual_price: "" }
        ]
      }
    ]
  },
  {
    id: 81,
    title: "Secondi",
    slug: "meetlovers",
    image_card: "src/utils/content/Secondi.webp",
    subtitle: "",
    link_order_online: "https://order.toasttab.com/online/delportoristorante",
    homepage_carta: true,
    order_frontpage: 6,
    category: [
      {
        title_category: "",
        list: [
          { name_plate: "CHICKEN PARM ALLA VODKA", description_name: "Homemade Rigatoni", single_price: true, price: 38, dual_price: "" },
          { name_plate: "CRISPY DOUBLE AIRLINE CHICKEN", description_name: "Bone-in – Spinach Salad, apple, Walnuts, Cranberries & Lemon Vinaigrette", single_price: true, price: 39, dual_price: "" },
          { name_plate: "SALMON DIJON", description_name: "Sauteed Spinach & Carrot Puree Chef Signature Dijon Sauce", single_price: true, price: 42, dual_price: "" },
          { name_plate: "BRANZINO", description_name: "Whole Roasted with Lemon Mash Potato & Sauteed Spinach", single_price: true, price: 45, dual_price: "" },
          { name_plate: "HANGER STEAK GIAMBOTTA", description_name: "Onions, Potatoes, Peppers, & Mushrooms", single_price: true, price: 49, dual_price: "" },
          { name_plate: "HATFIELD PREMIUM PORK CHOP", description_name: "Thick Cut, Bone-in, Onions, Cherry Peppers, Mushrooms, Peppers, Mashed potato", single_price: true, price: 49, dual_price: "" },
          { name_plate: "SEAFOOD TUSCAN STEW", description_name: "White Linguini, Lobster, Jumbo Shrimp, Clams, Mussels, Calamari & Tomato Broth", single_price: true, price: 65, dual_price: "" },
          { name_plate: "RIB EYE STEAK", description_name: "16oz, Sautee, Mashed Potatoes Spinach & Brandy Peppercorn Sauce", single_price: true, price: 69, dual_price: "" }
        ]
      }
    ]
  },
  {
    id: 83,
    title: "Brunch",
    slug: "brunch",
    image_card: "src/utils/content/Brunch.webp",
    subtitle: "SAT & SUN 11:30 AM - 4PM",
    link_order_online: "https://order.toasttab.com/online/delportoristorante",
    homepage_carta: false,
    order_frontpage: 5,
    category: [
      {
        title_category: "",
        list: [
          { name_plate: "DPR MORNING PLATE", description_name: "Scrambled eggs, beef bacon slab, spicy sausage, seasoned home fries, avocado & mini pancake.", single_price: true, price: 24, dual_price: "" },
          { name_plate: "PANCAKES TOWER", description_name: "Fluffy pancake stack topped with fresh fruit, whipped cream, cream cheese & maple syrup.", single_price: true, price: 18, dual_price: "" },
          { name_plate: "FRENCH TOAST", description_name: "Golden brioche slices with a cinnamon touch, served with fresh fruit and maple syrup.", single_price: true, price: 18, dual_price: "" },
          { name_plate: "AVOCADO TOAST & BURRATA", description_name: "Avocado on focaccia, with whole burrata, roasted corn, cilantro, lime, and olive oil.", single_price: true, price: 22, dual_price: "" },
          { name_plate: "SMOKED SALMON TOAST", description_name: "Smoked salmon paired with creamy burata cheese, served on focaccia with salty capers.", single_price: true, price: 22, dual_price: "" },
          { name_plate: "SHORT RIB OMELETTE", description_name: "Tender and juicy short rib mixed with mushrooms, peppers and potatoes.", single_price: true, price: 27, dual_price: "" },
          { name_plate: "DPR BRUNCH BURGER", description_name: "Pat LaFrieda patty topped with provolone cheese, crispy bacon, a perfectly fried egg, and served with a crispy onion rings.", single_price: true, price: 27, dual_price: "" },
          { name_plate: "SHORT RIBS HASH & EGGS", description_name: "Slow-braised short ribs over crispy potatoes, topped with our scrambled eggs.", single_price: true, price: 35, dual_price: "" },
          { name_plate: "UNLIMITED MIMOSAS BAR", description_name: "Choose from 7 delicious flavors – Mango, Passion Fruit, Guava, Pineapple, Peach, Strawberry, or Coco. (served until 3:30 PM)", single_price: true, price: 38, dual_price: "" }
        ]
      }
    ]
  },
  {
    id: 86,
    title: "COCKTAIL & WINE",
    slug: "cocktail-wine",
    image_card: "src/utils/content/Cocktail-wine.webp",
    subtitle: "",
    link_order_online: "https://order.toasttab.com/online/delportoristorante",
    homepage_carta: true,
    order_frontpage: 4,
    category: [
      {
        title_category: "GRAPES BY THE GLASS",
        list: [
          { name_plate: "Champagne", description_name: "Wycliff Brut – California", single_price: false, price: null, dual_price: "10 / 40" },
          { name_plate: "Pinot Grigio", description_name: "Daisy – California", single_price: false, price: 23, dual_price: "14 / 52" },
          { name_plate: "Sauvignon Blanc", description_name: "Grove Mill – New Zealand", single_price: false, price: 16, dual_price: "15 / 56" },
          { name_plate: "Chardonnay", description_name: "Gait – Napa Valley", single_price: false, price: 22, dual_price: "16 / 57" },
          { name_plate: "Riesling", description_name: "Dr Konstantin Frank – New York", single_price: false, price: 19, dual_price: "15 / 56" },
          { name_plate: "Moscato", description_name: "Vietti Cascinetta – Italy", single_price: false, price: 23, dual_price: "14 / 52" },
          { name_plate: "Rosé", description_name: "La Jolie Fleur – France", single_price: false, price: null, dual_price: "15 / 56" },
          { name_plate: "Cabernet Sauvignon", description_name: "Chasing Rain – WA", single_price: false, price: null, dual_price: "15 / 58" },
          { name_plate: "Pinot Noir", description_name: "Mark West Pinot – California", single_price: false, price: null, dual_price: "16 / 59" },
          { name_plate: "Chianti Classico", description_name: "Castello d'Albola – Italy", single_price: false, price: null, dual_price: "15 / 57" }
        ]
      },
      {
        title_category: "COCKTAILS",
        list: [
          { name_plate: "THE LYCHEE CRUSH", description_name: "Tito's Vodka, Lychee Purée, Coconut, Lime Juice, and Elderflower Liquor.", single_price: true, price: 20, dual_price: "" },
          { name_plate: "DPR OLD FASHIONED", description_name: "Premium Woodford Reserve Bourbon, Demerara, Amarena cherry.", single_price: true, price: 23, dual_price: "" },
          { name_plate: "THE KHALEESI", description_name: "Tanqueray Gin, Passion Fruit Juice, Lemon & Agave.", single_price: true, price: 16, dual_price: "" },
          { name_plate: "REPOSADO ROYALE", description_name: "Don Julio Reposado, Hibiscus Syrup, Lemon Juice, Orange Curaçao & Pomegranate Juice.", single_price: true, price: 22, dual_price: "" },
          { name_plate: "DRACARYS (DRAGONFIRE)", description_name: "Tequila 100% Blue Agave Rey, Homemade Dragon Fruit Pure, Fresh Squeezed Lime & Agave.", single_price: true, price: 19, dual_price: "" },
          { name_plate: "FIFTH AVENUE", description_name: "Fresh Kumquat Juice, Grapefruit Gin, Splash of Coconut Rum, Softened by Aperol & Fresh Lime.", single_price: true, price: 23, dual_price: "" }
        ]
      },
      {
        title_category: "BEER",
        list: [
          { name_plate: "PAULANER", description_name: "Amber Lager - Germany", single_price: true, price: 7, dual_price: "" },
          { name_plate: "PERONI", description_name: "Lager - Italy", single_price: true, price: 7, dual_price: "" },
          { name_plate: "STELLA", description_name: "Pilsner - Belgian", single_price: true, price: 7, dual_price: "" },
          { name_plate: "CORONA", description_name: "Pale Lager - Mexico", single_price: true, price: 7, dual_price: "" },
          { name_plate: "MODELO", description_name: "American Lager - Mexico", single_price: true, price: 7, dual_price: "" },
          { name_plate: "MILLER LITE", description_name: "Lager - USA", single_price: true, price: 7, dual_price: "" },
          { name_plate: "LAGUNITAS IPA", description_name: "India Pale Ale - USA", single_price: true, price: 7, dual_price: "" }
        ]
      },
      {
        title_category: "GRAPES BY THE BOTTLE",
        list: [
          { name_plate: "La Marca", description_name: "Prosecco (Italy)", single_price: true, price: 48, dual_price: "" },
          { name_plate: "Ratti", description_name: "Battaglione – Barbera D’Asti 2023", single_price: true, price: 62, dual_price: "" },
          { name_plate: "Conférence de Presse", description_name: "Syrah – 2020 – France", single_price: true, price: 45, dual_price: "" },
          { name_plate: "Oro Del Mar", description_name: "Pecorino – NV – Italy", single_price: true, price: 48, dual_price: "" },
          { name_plate: "Amabilis", description_name: "Rosato – NV – Italy", single_price: true, price: 45, dual_price: "" },
          { name_plate: "Zette", description_name: "Trebbiano – NV – Italy", single_price: true, price: 48, dual_price: "" },
          { name_plate: "Pessimist By Daou", description_name: "Red Blend, 2021, Paso Robles", single_price: true, price: 58, dual_price: "" },
          { name_plate: "J Vineyards", description_name: "Pinot Grigio – California", single_price: true, price: 52, dual_price: "" },
          { name_plate: "Cotes du Rhone Rouge", description_name: "Syrah – NV – France", single_price: true, price: 52, dual_price: "" },
          { name_plate: "Rombauer", description_name: "Chardonnay – California", single_price: true, price: 88, dual_price: "" },
          { name_plate: "Franciscan", description_name: "Cabernet Sauvignon – 2021 – CA", single_price: true, price: 53, dual_price: "" },
          { name_plate: "Familia Cotarella", description_name: "Merlot – 2020 – Italy", single_price: true, price: 51, dual_price: "" },
          { name_plate: "Ratti ", description_name: "Ochetti Langhe – Nebbiolo 2022", single_price: true, price: 59, dual_price: "" },
          { name_plate: "Quinta do Vale Meao", description_name: "Douro Tinto – 2020 – Portugal", single_price: true, price: 65, dual_price: "" },
          { name_plate: "Duckhorn", description_name: "Sauvignon Blanc – 2022 – CA", single_price: true, price: 72, dual_price: "" },
          { name_plate: "Picabuey", description_name: "Malbec Riserva – 2020 – Argentina", single_price: true, price: 65, dual_price: "" },
          { name_plate: "Il Poggione", description_name: "Rosso di Montalcino – 2022 – Italy", single_price: true, price: 75, dual_price: "" },
          { name_plate: "Amarone", description_name: "Montepulciano Riserva – 2020 – Italy", single_price: true, price: 84, dual_price: "" },
          { name_plate: "Chateau Haut Peyrat", description_name: "Bordeaux – NV – France", single_price: true, price: 61, dual_price: "" },
          { name_plate: "Idi di Marzo", description_name: "Atto Finale Appassimento – NV – Italy", single_price: true, price: 71, dual_price: "" },
          { name_plate: "Rocca Delle Macie", description_name: "Chianti Classico Riserva 2019", single_price: true, price: 71, dual_price: "" },
          { name_plate: "Chateau de Sancerre", description_name: "Sancerre – 2022 – France", single_price: true, price: 85, dual_price: "" },
          { name_plate: "Belle Glos", description_name: "Pinot Noir – 2021 – California", single_price: true, price: 77, dual_price: "" },
          { name_plate: "Alerramicini", description_name: "Brunello di Montalcino – 2020", single_price: true, price: 89, dual_price: "" },
          { name_plate: "Decoy Blue", description_name: "Cabernet Sauvignon – 2021 – CA", single_price: true, price: 85, dual_price: "" },
          { name_plate: "Caymus", description_name: "The Walking Fool – 2022 – Red Blend – CA", single_price: true, price: 95, dual_price: "" },
          { name_plate: "Vega Sicilia ", description_name: "Macán Clásico (Rioja)", single_price: true, price: 130, dual_price: "" }
        ]
      },
      {
        title_category: "",
        list: [
          { name_plate: "Monte Zovo", description_name: "Amarone – 2020 – Italy", single_price: true, price: 105, dual_price: "" },
          { name_plate: "Flowers", description_name: "Pinot Noir – 2022 – California", single_price: true, price: 105, dual_price: "" },
          { name_plate: "Moët & Chandon", description_name: "Champagne – NV – France", single_price: true, price: 110, dual_price: "" },
          { name_plate: "Jordan", description_name: "Cabernet Sauvignon – 2021 – Sonoma", single_price: true, price: 125, dual_price: "" },
          { name_plate: "The Prisoner", description_name: "Red Blend – 2022 – California", single_price: true, price: 128, dual_price: "" },
          { name_plate: "Stags’ Leap", description_name: "Cabernet Sauvignon – 2021 – Napa", single_price: true, price: 132, dual_price: "" },
          { name_plate: "Cakebread", description_name: "Cabernet Sauvignon – 2021 – Napa", single_price: true, price: 135, dual_price: "" },
          { name_plate: "Billecart-Salmon", description_name: "Brut Reserve Champagne – Italy", single_price: true, price: 145, dual_price: "" },
          { name_plate: "Palermo", description_name: "Cabernet Sauvignon – 2022 – Napa", single_price: true, price: 149, dual_price: "" },
          { name_plate: "Chimney Rock", description_name: "Cabernet Sauvignon – 2021 – Napa (Stags Leap District)", single_price: true, price: 195, dual_price: "" },
          { name_plate: "Caymus", description_name: "Cabernet Sauvignon – 2021 – Napa", single_price: true, price: 220, dual_price: "" },
          { name_plate: "Joseph Phelps", description_name: "Cabernet Sauvignon – 2021 – Napa", single_price: true, price: 245, dual_price: "" },
          { name_plate: "Insignia", description_name: "Cabernet Sauvignon – 2019 – Napa", single_price: true, price: 545, dual_price: "" }
        ]
      },
      {
        title_category: "MOCKTAILS",
        list: [
          { name_plate: "NO TAXI NEEDED", description_name: "Non-Alcoholic, Muddle Blueberry, Lime Juice, Hibiscus Syrup, Apple Juice & Strawberry.", single_price: true, price: 14, dual_price: "" }
        ]
      }
    ]
  },
  {
    id: 87,
    title: "HAPPY HOUR MENU",
    slug: "happy-hour",
    image_card: "src/utils/content/Happy-Hour.webp",
    subtitle: "",
    link_order_online: "https://order.toasttab.com/online/delportoristorante",
    homepage_carta: false,
    order_frontpage: 1,
    category: [
      {
        title_category: "SMALL BITES ",
        list: [
          { name_plate: "BEEF SLIDERS DUO", description_name: "Pat LaFrieda Beef, Aged Provolone, Cheddar Cheese Homemade Brioche, Caramelized Onions & Dijon Dipping Sauce.", single_price: true, price: 10, dual_price: "" },
          { name_plate: "CHEF CALAMARI", description_name: "House Sweet & Spicy Sauce Mixed with Chopped Greens.", single_price: true, price: 10, dual_price: "" },
          { name_plate: "TWO MINI CRAB CAKES", description_name: "100% Colossal Crab Meat, Mixed Greens, Aioli & Bread Crumbs.", single_price: true, price: 10, dual_price: "" },
          { name_plate: "ZUCCHINI CHIPS", description_name: "Chef's Signature Seasoning Mix & Tzatziki Sauce.", single_price: true, price: 10, dual_price: "" },
          { name_plate: "CHEESESTEAK BITES", description_name: "Shaved beef, cheddar cheese, onions, mushrooms & spicy aioli.", single_price: true, price: 10, dual_price: "" }
        ]
      },
      {
        title_category: "DRINKS",
        list: [
          { name_plate: "LYCHEE CRUSH", description_name: "Tito’s Vodka, Homemade Lychee Purée, Elderflower Liqueur, Coconut Cream & Lime.", single_price: true, price: 9, dual_price: "" },
          { name_plate: "ESPRESSO MARTINI ", description_name: "Vanilla Vodka, Coffee Liqueur, Fresh Espresso.", single_price: true, price: 9, dual_price: "" },
          { name_plate: "DRACARYS", description_name: "Tequila Agave Rey, Homemade Dragon Fruit Purée, Fresh Lime & Agave.", single_price: true, price: 10, dual_price: "" },
          { name_plate: "THE KHALEESI", description_name: "Tanqueray Gin, Passion Fruit Juice, Lemon & Agave.", single_price: true, price: 10, dual_price: "" }
        ]
      },
      {
        title_category: "",
        list: [
          { name_plate: "BELLA CIAO NEGRONI", description_name: "Grape Fruit Gin, Sweet Vermouth, Campari & Muddle Orange.", single_price: true, price: 12, dual_price: "" },
          { name_plate: "WINE & SANGRIA", description_name: "", single_price: true, price: 7, dual_price: "" },
          { name_plate: "BEER", description_name: "", single_price: true, price: 5, dual_price: "" }
        ]
      }
    ]
  },
  {
    id: 89,
    title: "DESSERT MENU",
    slug: "dessert-menu",
    image_card: "src/utils/content/Dessert-Menu.webp",
    subtitle: "",
    link_order_online: "https://order.toasttab.com/online/delportoristorante",
    homepage_carta: true,
    order_frontpage: 5,
    category: [
      {
        title_category: "HOUSEMADE DOLCE",
        list: [
          { name_plate: "Hot Fudge Sundae", description_name: "Vanilla ice cream, homemade fudge, walnuts, whipped cream, maraschino cherry.", single_price: true, price: 17, dual_price: "" },
          { name_plate: "Chocolate Bread Pudding", description_name: "Banana Bread with Chocolate Chips and Vanilla Ice Cream.", single_price: true, price: 15, dual_price: "" },
          { name_plate: "Ricotta Cheesecake", description_name: "Mascarpone Cheese", single_price: true, price: 14, dual_price: "" },
          { name_plate: "Homemade Tiramisu", description_name: "Mascarpone, Vanilla, Espresso, Lady Fingers", single_price: true, price: 14, dual_price: "" },
          { name_plate: "Chocolate Filled Churros", description_name: "Vanilla Ice Cream", single_price: true, price: 14, dual_price: "" }
        ]
      },
      {
        title_category: "",
        list: [
          { name_plate: "Crème Brûlée", description_name: "Tahitian", single_price: true, price: 12, dual_price: "" },
          { name_plate: "Cannoli ", description_name: "Crispy pastry shell, sweet ricotta filling, chocolate chips.", single_price: true, price: 12, dual_price: "" },
          { name_plate: "Espresso Affogato", description_name: "Espresso over Vanilla Ice Cream", single_price: true, price: 12, dual_price: "" },
          { name_plate: "Ice Cream", description_name: "Vanilla or Chocolate", single_price: true, price: 5, dual_price: "" }
        ]
      },
      {
        title_category: "AFTER DINNER COCKTAILS",
        list: [
          { name_plate: "CASA 43", description_name: "Casamigos Reposado, Licor 43 and Fresh Espresso", single_price: true, price: 19, dual_price: "" },
          { name_plate: "Vanilla Espresso Martini ", description_name: "Fresh Espresso, Stoli Vanilla, Mr Black & Vanilla Extract.", single_price: true, price: 19, dual_price: "" },
          { name_plate: "Classic Espresso Martini", description_name: "Fresh Espresso, Titos Vodka, Mr Black.", single_price: true, price: 17, dual_price: "" },
          { name_plate: "Irish Coffee", description_name: "Jameson Whiskey, Black Coffee, Whipped Cream.", single_price: true, price: 15, dual_price: "" }
        ]
      }
    ]
  },
  {
    id: 90,
    title: "KIDS MENU",
    slug: "kids-menu",
    image_card: "src/utils/content/Kids-Menu.webp",
    subtitle: "",
    link_order_online: "https://order.toasttab.com/online/delportoristorante",
    homepage_carta: true,
    order_frontpage: 2,
    category: [
      {
        title_category: "ENTREE",
        list: [
          { name_plate: "Spaghetti With Meatball ", description_name: "Marinara Sauce 100% Beef 1 Meatball on top", single_price: true, price: 16, dual_price: "" },
          { name_plate: "Chicken Tenders", description_name: "Served with Fries and Ketchup", single_price: true, price: 16, dual_price: "" },
          { name_plate: "Penne Butter", description_name: "Homemade pasta with Butter and Parmesan Cheese", single_price: true, price: 16, dual_price: "" },
          { name_plate: "Cheese Burger", description_name: "Plain burger with cheese (Sesame bread) No Sauce no Green", single_price: true, price: 16, dual_price: "" }
        ]
      },
      {
        title_category: "DESSERT",
        list: [
          { name_plate: "Ice Cream", description_name: "Choice of vanilla or chocolate.", single_price: true, price: 5, dual_price: "" },
          { name_plate: "Churros (Chocolate inside)", description_name: "Served With Ice Cream and caramel sauce", single_price: true, price: 14, dual_price: "" }
        ]
      },
      {
        title_category: "DRINKS",
        list: [
          { name_plate: "Shirley Temple", description_name: "", single_price: true, price: 5, dual_price: "" },
          { name_plate: "Roy Rogers", description_name: "", single_price: true, price: 5, dual_price: "" },
          { name_plate: "Pink Lemonade", description_name: "", single_price: true, price: 5, dual_price: "" },
          { name_plate: "Pineapple Juice", description_name: "", single_price: true, price: 5, dual_price: "" },
          { name_plate: "Apple Juice", description_name: "", single_price: true, price: 5, dual_price: "" },
          { name_plate: "Hibiscus Soda", description_name: "", single_price: true, price: 5, dual_price: "" }
        ]
      }
    ]
  },
  {
    id: 173,
    title: "Vegetarian-Gluten Free-Vegan",
    slug: "vegetarian-gluten-free-vegan-menu",
    image_card: "http://delportoejemplo.local/wp-content/uploads/2025/05/freepik__expand__4395.jpg",
    subtitle: "",
    link_order_online: "https://order.toasttab.com/online/delportoristorante",
    homepage_carta: false,
    order_frontpage: null,
    category: [
      {
        title_category: "Vegetarian",
        list: [
          { name_plate: "APPETIZER", description_name: "", single_price: true, price: null, dual_price: "" },
          { name_plate: "BABY GEM CAESAR SALAD", description_name: "Anchovy-Garlicky Dressing, Ciabatta Croutons.", single_price: true, price: 16, dual_price: "" },
          { name_plate: "CRISPY ZUCCHINI CHIPS", description_name: "Tzatziki", single_price: true, price: 17, dual_price: "" },
          { name_plate: "CRISPY ITALIAN EGGPLANT", description_name: "Ricotta, Parmigiano, Basil Pesto", single_price: true, price: 19, dual_price: "" },
          { name_plate: "FRIED WHOLE BURRATA CHEESE", description_name: "Mixed Greens, Arrabbiata Sauce & Crostini", single_price: true, price: 24, dual_price: "" },
          { name_plate: "MAIN COURSE", description_name: "", single_price: true, price: null, dual_price: "" },
          { name_plate: "EGGPLANT LASAGNA", description_name: "Al Forno", single_price: true, price: 36, dual_price: "" },
          { name_plate: "SPINACH & RICOTTA RAVIOLI", description_name: "Parmigiano Cream Sauce & Basil Pesto", single_price: true, price: 28, dual_price: "" },
          { name_plate: "SPICY PENNE VODKA ", description_name: "Chef Tradizionale Sauce", single_price: true, price: 26, dual_price: "" },
          { name_plate: "GNOCCHI GORGONZOLA", description_name: "Potato Dumpling & Creamy Sauce", single_price: true, price: 26, dual_price: "" }
        ]
      },
      {
        title_category: "Gluten Free Menu",
        list: [
          { name_plate: "APPETIZER", description_name: "", single_price: true, price: null, dual_price: "" },
          { name_plate: "BABY GEM CAESAR SALAD", description_name: "Anchovy-Garlicky Dressing, Ciabatta Croutons.", single_price: true, price: 16, dual_price: "" },
          { name_plate: "GRANDE BEEF CARPACCIO", description_name: "Arugula, Capers, Red Onion, Dijon & Parmigiano.", single_price: true, price: 26, dual_price: "" },
          { name_plate: "GRILLED KING OCTOPUS", description_name: "Marinated White Bean Salad", single_price: true, price: 28, dual_price: "" },
          { name_plate: "MAIN COURSE", description_name: "", single_price: true, price: null, dual_price: "" },
          { name_plate: "CHICKPEA FUSILLI & GRILLED CHICKEN GF ", description_name: "Primavera Vegetables with Alfredo Sauce", single_price: true, price: 28, dual_price: "" },
          { name_plate: "CHICKPEA SPAGHETTI CARBONARA", description_name: "Crispy Bacon, Egg Yolk, Black Pepper & Pecorino", single_price: true, price: 28, dual_price: "" },
          { name_plate: "SALMON DIJON ", description_name: "Sauteed Spinach & Carrot Puree / Chef Signature Dijon Sauce", single_price: true, price: 42, dual_price: "" },
          { name_plate: "BRANZINO", description_name: "Whole Roasted with Lemon / Mash Potato & Sauteed Spinach", single_price: true, price: 45, dual_price: "" }
        ]
      },
      {
        title_category: "Vegan Menu",
        list: [
          { name_plate: "APPETIZER", description_name: "", single_price: true, price: null, dual_price: "" },
          { name_plate: "FRESH HOUSE SALAD", description_name: "Mix Greens, Red Onion, Cucumber Radicchio Balsamic & Vinegar", single_price: true, price: 10, dual_price: "" },
          { name_plate: "CRISPY ZUCCHINI CHIPS", description_name: "", single_price: true, price: 17, dual_price: "" },
          { name_plate: "MAIN COURSE", description_name: "", single_price: true, price: null, dual_price: "" },
          { name_plate: "BAKED GNOCCHI MARINARA", description_name: "Fresh Tomato Sauce & Basil", single_price: true, price: 26, dual_price: "" },
          { name_plate: "FRESH ZUCCHINI NOODLES", description_name: "Fresh Tomato Sauce & Basil Mushrooms", single_price: true, price: 26, dual_price: "" },
          { name_plate: "VEGAN CHICKPEA FUSILLI ", description_name: "Garlic & Oil & Mixed Green", single_price: true, price: 28, dual_price: "" },
          { name_plate: "CHICKPEA SPAGHETTI", description_name: "Vegan Caccio O Peppe", single_price: true, price: 28, dual_price: "" }
        ]
      }
    ]
  },
  {
    id: 185,
    title: "TAKE A DELIVERY MENU",
    slug: "take-delivery-menu",
    image_card: "src/utils/content/Take-Deliveri.webp",
    subtitle: "",
    link_order_online: "https://order.toasttab.com/online/delportoristorante",
    homepage_carta: true,
    order_frontpage: null,
    category: [
      {
        title_category: "APPETIZERS",
        list: [
          { name_plate: "SWEET & SPICY CALAMARI", description_name: "", single_price: true, price: 17, dual_price: "" },
          { name_plate: "HOUSE SALAD", description_name: "", single_price: true, price: 9, dual_price: "" },
          { name_plate: "HOMEMADE MEATBALLS", description_name: "", single_price: true, price: 17, dual_price: "" },
          { name_plate: "CAESAR SALAD", description_name: "", single_price: true, price: 8, dual_price: "" },
          { name_plate: "MUSSELS FRA DIAVOLO", description_name: "", single_price: true, price: 17, dual_price: "" },
          { name_plate: "ZUCCHINI CHIPS", description_name: "", single_price: true, price: 12, dual_price: "" },
          { name_plate: "GRILLED OCTOPUS", description_name: "", single_price: true, price: 20, dual_price: "" },
          { name_plate: "GARLIC SHRIMP", description_name: "", single_price: true, price: 16, dual_price: "" },
          { name_plate: "FRIED WHOLE BURRATA", description_name: "", single_price: true, price: 17, dual_price: "" },
          { name_plate: "MINI CARPACCIO", description_name: "", single_price: true, price: 17, dual_price: "" },
          { name_plate: "CRISPY EGGPLANT", description_name: "", single_price: true, price: 14, dual_price: "" },
          { name_plate: "BURRATA CAPRESE ", description_name: "", single_price: true, price: 17, dual_price: "" }
        ]
      },
      {
        title_category: "HOMEMADE PASTA",
        list: [
          { name_plate: "PENNE CARBONARA", description_name: "", single_price: true, price: 20, dual_price: "" },
          { name_plate: "SPICY PENNE VODKA", description_name: "", single_price: true, price: 19, dual_price: "" },
          { name_plate: "CHICKEN SPICY PENNE VODKAS", description_name: "", single_price: true, price: 23, dual_price: "" },
          { name_plate: "SPICY PENNE VODKA WITH SHRIMP", description_name: "", single_price: true, price: 27, dual_price: "" },
          { name_plate: "RIGATONI ALFREDO WITH CHICKEN", description_name: "", single_price: true, price: 23, dual_price: "" },
          { name_plate: "EGGPLANT LASAGNA", description_name: "", single_price: true, price: 26, dual_price: "" },
          { name_plate: "CHICKPEA FUSILLI ALFREDO (GF) WITH CHICKEN", description_name: "", single_price: true, price: 27, dual_price: "" },
          { name_plate: "SPINACH & RICOTTA RAVIOLI", description_name: "", single_price: true, price: 20, dual_price: "" },
          { name_plate: "RIGATONI BOLOGNESE", description_name: "", single_price: true, price: 23, dual_price: "" },
          { name_plate: "SPAGHETTI & MEATBALLS", description_name: "", single_price: true, price: 23, dual_price: "" },
          { name_plate: "FETTUCCINE ALFREDO", description_name: "", single_price: true, price: 19, dual_price: "" }
        ]
      },
      {
        title_category: "PROTEINS",
        list: [
          { name_plate: "CHICKEN MARSALA", description_name: "", single_price: true, price: 23, dual_price: "" },
          { name_plate: "CHICKEN PARMIGIANA", description_name: "", single_price: true, price: 27, dual_price: "" },
          { name_plate: "CHICKEN PICCATA", description_name: "", single_price: true, price: 23, dual_price: "" },
          { name_plate: "DIJON SALMON", description_name: "", single_price: true, price: 30, dual_price: "" },
          { name_plate: "HANGER STEAK GIAMBOTTA", description_name: "", single_price: true, price: 35, dual_price: "" }
        ]
      },
      {
        title_category: "SIDES",
        list: [
          { name_plate: "ROASTED POTATOES", description_name: "", single_price: true, price: 9, dual_price: "" },
          { name_plate: "MASHED POTATOES", description_name: "", single_price: true, price: 9, dual_price: "" },
          { name_plate: "ROASTED VEGETABLES", description_name: "", single_price: true, price: 9, dual_price: "" }
        ]
      },
      {
        title_category: "KIDS MENU",
        list: [
          { name_plate: "CHICKEN TENDERS & FRIES ", description_name: "", single_price: true, price: 12, dual_price: "" },
          { name_plate: "PENNE BUTTER", description_name: "", single_price: true, price: 10, dual_price: "" },
          { name_plate: "PENNE AND MEATBALL", description_name: "", single_price: true, price: 12, dual_price: "" },
          { name_plate: "PENNE ALFREDO", description_name: "", single_price: true, price: 10, dual_price: "" }
        ]
      },
      {
        title_category: "DESSERT",
        list: [
          { name_plate: "TIRAMISU", description_name: "", single_price: true, price: 10, dual_price: "" },
          { name_plate: "CHEESECAKE", description_name: "", single_price: true, price: 10, dual_price: "" },
          { name_plate: "CANNOLI", description_name: "", single_price: true, price: 10, dual_price: "" },
          { name_plate: "CHURROS", description_name: "", single_price: true, price: 10, dual_price: "" }
        ]
      }
    ]
  },
  {
    id: 217,
    title: "CATERING MENU",
    slug: "catering-menu",
    image_card: "src/utils/content/Catering-Menu.webp",
    subtitle: "H: HALF TRAY SERVES UP TO 8 PERSON - F: FULL TRAY SERVES UP TO 16 PERSON",
    link_order_online: "https://order.toasttab.com/online/delportoristorante",
    homepage_carta: false,
    order_frontpage: null,
    category: [
      {
        title_category: "ANTIPASTI",
        list: [
          { name_plate: "SWEET & SPICY CALAMARI", description_name: "", single_price: false, price: null, dual_price: "H60 / F115" },
          { name_plate: "MINI CAPRESE SKEWERS", description_name: "", single_price: false, price: null, dual_price: "H35 / F75" },
          { name_plate: "COLOSSAL MINI CRAB CAKE", description_name: "", single_price: false, price: null, dual_price: "H90 / F175" },
          { name_plate: "CAESAR SALAD", description_name: "", single_price: false, price: null, dual_price: "H35 / F65" },
          { name_plate: "HOUSE SALAD", description_name: "", single_price: false, price: null, dual_price: "H35 / F65" },
          { name_plate: "HOMEMADE MEATBALLS", description_name: "", single_price: false, price: null, dual_price: "H60 / F105" },
          { name_plate: "EGGPLANT ROLLATINI", description_name: "", single_price: false, price: null, dual_price: "H45 / F85" },
          { name_plate: "MUSSELS FRA DIAVOLO", description_name: "", single_price: false, price: null, dual_price: "H50 / F95" },
          { name_plate: "ZUCCHINI CHIPS", description_name: "", single_price: false, price: null, dual_price: "H45 / F85" },
          { name_plate: "SAUSAGE & PEPPERS", description_name: "", single_price: false, price: null, dual_price: "H40 / F75" }
        ]
      },
      {
        title_category: "CATERING PRIMI",
        list: [
          { name_plate: "BAKED ZITI", description_name: "", single_price: false, price: null, dual_price: "H40 / F75" },
          { name_plate: "PENNE CARBONARA", description_name: "", single_price: false, price: null, dual_price: "H40 / F75" },
          { name_plate: "SPICY PENNE VODKA", description_name: "", single_price: false, price: null, dual_price: "H40 / F75" },
          { name_plate: "CHICKEN SPICY PENNE VODKA", description_name: "", single_price: false, price: null, dual_price: "H60 / F95" },
          { name_plate: "SHRIMP SPICY PENNE VODKA", description_name: "", single_price: false, price: null, dual_price: "H70 / F105" },
          { name_plate: "CHICKEN RIGATONI ALFREDO", description_name: "", single_price: false, price: null, dual_price: "H60 / F95" },
          { name_plate: "EGGPLANT LASAGNA", description_name: "", single_price: false, price: null, dual_price: "H70 / F135" },
          { name_plate: "CHICKEN CHICKPEA FUSILLI ALFREDO", description_name: "", single_price: false, price: null, dual_price: "H65 / F125" },
          { name_plate: "BEEF LASAGNA", description_name: "", single_price: false, price: null, dual_price: "H80 / F150" },
          { name_plate: "RIGATONI BOLOGNES", description_name: "(PAT LAFRIEDA BEEF)", single_price: false, price: null, dual_price: "H60 / F115" },
          { name_plate: "SPINACH & RICOTTA RAVIOLI", description_name: "", single_price: false, price: null, dual_price: "H55 / F105" },
          { name_plate: "RIGATONI WITH SAUSAGE, BROCCOLI & GARLIC OIL", description_name: "", single_price: false, price: null, dual_price: "H66 / F115" },
          { name_plate: "PASTA ENTREE", description_name: "", single_price: false, price: null, dual_price: "H60 / F75" }
        ]
      },
      {
        title_category: "CATERING SECONDI",
        list: [
          { name_plate: "CHICKEN MARSALA", description_name: "", single_price: false, price: null, dual_price: "H55 / F100" },
          { name_plate: "CHICKEN PARM", description_name: "", single_price: false, price: null, dual_price: "H55 / F105" },
          { name_plate: "EGGPLANT PARM", description_name: "", single_price: false, price: null, dual_price: "H45 / F75" },
          { name_plate: "CHICKEN FRANCESE", description_name: "", single_price: false, price: null, dual_price: "H55 / F105" },
          { name_plate: "CHICKEN PICCATA", description_name: "", single_price: false, price: null, dual_price: "H65 / F125" },
          { name_plate: "DIJON SALMON", description_name: "", single_price: false, price: null, dual_price: "H85 / F160" },
          { name_plate: "HANGER STEAK GIAMBOTTA", description_name: "", single_price: false, price: null, dual_price: "H100 / F200" },
          { name_plate: "SKIRT STEAK & HOME FRIES", description_name: "", single_price: false, price: null, dual_price: "H92 / F180" }
        ]
      },
      {
        title_category: "CATERING SIDES",
        list: [
          { name_plate: "ROASTED POTATOES", description_name: "", single_price: false, price: null, dual_price: "H35 / F65" },
          { name_plate: "MASHED POTATOES", description_name: "", single_price: false, price: null, dual_price: "H35 / F65" },
          { name_plate: "GREEN BEANS", description_name: "", single_price: false, price: null, dual_price: "H40 / F65" },
          { name_plate: "ROASTED VEGETABLES", description_name: "", single_price: false, price: null, dual_price: "H35 / F65" }
        ]
      },
      {
        title_category: "CATERING DOLCE",
        list: [
          { name_plate: "TIRAMISU", description_name: "", single_price: false, price: null, dual_price: "H45 / F80" },
          { name_plate: "CHEESECAKE", description_name: "", single_price: false, price: null, dual_price: "H40 / F75" },
          { name_plate: "TRES LECHES", description_name: "", single_price: false, price: null, dual_price: "40" },
          { name_plate: "CANOLI X 12", description_name: "", single_price: false, price: null, dual_price: "12 FOR 40 / 24 FOR 75" }
        ]
      }
    ]
  },
  {
    id: 322,
    title: "Main Menu",
    slug: "main-menu",
    image_card: "src/utils/content/Main-Menu.webp",
    subtitle: "",
    link_order_online: "https://order.toasttab.com/online/delportoristorante",
    homepage_carta: true,
    order_frontpage: null,
    category: [
      {
        title_category: "ANTIPASTI",
        list: [
          { name_plate: "BABY GEM CAESAR SALAD", description_name: "Anchovy-Garlicky Dressing, Ciabatta Croutons", single_price: true, price: 16, dual_price: "" },
          { name_plate: "CRISPY ZUCCHINI CHIPS", description_name: "Tzatziki", single_price: true, price: 17, dual_price: "" },
          { name_plate: "HOMEMADE MEATBALLS", description_name: "100% Beef, Fresh Mozzarella & Parmigiano Cheese in San Marzano Tomato Sauce", single_price: true, price: 18, dual_price: "" },
          { name_plate: "CRISPY ITALIAN EGGPLANT", description_name: "Ricotta, Parmigiano, Basil Pesto", single_price: true, price: 19, dual_price: "" },
          { name_plate: "FRIED WHOLE BURRATA CHEESE", description_name: "Mixed Greens, Arrabbiata Sauce & Crostini", single_price: true, price: 24, dual_price: "" },
          { name_plate: "SWEET & SPICY CRISPY CALAMARI", description_name: "Romaine, Tomato, Scallions", single_price: true, price: 24, dual_price: "" },
          { name_plate: "GRANDE BEEF CARPACCIO", description_name: "Arugula, Capers, Red Onion, Dijon & Parmigiano", single_price: true, price: 26, dual_price: "" },
          { name_plate: "GRILLED KING OCTOPUS", description_name: "Marinated White Bean Salad", single_price: true, price: 28, dual_price: "" }
        ]
      },
      {
        title_category: "HOMEMADE PASTA",
        list: [
          { name_plate: "SPINACH & RICOTTA RAVIOLI", description_name: "Parmigiano Cream Sauce & Basil Pesto", single_price: true, price: 28, dual_price: "" },
          { name_plate: "CHICKPEA FUSILLI & GRILLED CHICKEN GF", description_name: "Primavera Vegetables with Alfredo Sauce", single_price: true, price: 28, dual_price: "" },
          { name_plate: "SPAGHETTI CARBONARA", description_name: "Crispy Bacon, Egg Yolk, Black Pepper & Pecorino", single_price: true, price: 28, dual_price: "" },
          { name_plate: "PAPPARDELLE BOLOGNESE", description_name: "Tradizionale 100% Beef Ragu", single_price: true, price: 32, dual_price: "" },
          { name_plate: "RIGATONI & MEATBALLS", description_name: "100% Beef, Fresh Mozzarella & Parmigiano Cheese in San Marzano Tomato Sauce", single_price: true, price: 32, dual_price: "" },
          { name_plate: "EGGPLANT LASAGNA", description_name: "Al Forno", single_price: true, price: 36, dual_price: "" },
          { name_plate: "LINGUINI VONGOLE", description_name: "Manila Clams & Cockles, Garlic-White Wine", single_price: true, price: 38, dual_price: "" },
          { name_plate: "SPICY PENNE VODKA", description_name: "Grilled Jumbo Shrimp", single_price: true, price: 38, dual_price: "" },
          { name_plate: "FETTUCCINE SHORT RIB RAGU", description_name: "Shaved Ricotta Salata", single_price: true, price: 49, dual_price: "" }
        ]
      },
      {
        title_category: "SECONDI",
        list: [
          { name_plate: "CHICKEN PARM ALLA VODKA", description_name: "Homemade Rigatoni", single_price: true, price: 38, dual_price: "" },
          { name_plate: "CRISPY DOUBLE AIRLINE CHICKEN", description_name: "Bone-in - Spinach Salad, apple, Walnuts, Cranberries & Lemon Vinaigrette", single_price: true, price: 39, dual_price: "" },
          { name_plate: "SALMON DIJON", description_name: "Sauteed Spinach & Carrot Puree Chef Signature Dijon Sauce", single_price: true, price: 42, dual_price: "" },
          { name_plate: "BRANZINO", description_name: "Whole Roasted with Lemon Mash Potato & Sauteyed Spinach", single_price: true, price: 45, dual_price: "" },
          { name_plate: "HANGER STEAK GIAMBOTTA", description_name: "Onions, Potatoes, Peppers, & Mushrooms", single_price: true, price: 49, dual_price: "" },
          { name_plate: "HATFIELD PREMIUM PORK CHOP", description_name: "Thick Cut, Bone-in, Onions, Cherry Peppers, Mushrooms, Peppers, Mashed potato", single_price: true, price: 49, dual_price: "" },
          { name_plate: "SEAFOOD TUSCAN STEW", description_name: "White Linguini, Lobster, Jumbo Shrimp, Clams, Mussels, Calamari & Tomatto Broth", single_price: true, price: 65, dual_price: "" },
          { name_plate: "RIB EYE STEAK", description_name: "16oz, Sautee, Mashed Potatoes Spinach & Brandy Peppercorn Sauce", single_price: true, price: 69, dual_price: "" }
        ]
      }
    ]
  }
];

export const fakePosts = [
  {
    id: 1,
    title: "The Art of Homemade Pasta: A Beginner's Guide",
    slug: "the-art-of-homemade-pasta",
    date: "July 25, 2025",
    excerpt:
      "Learn the secrets to crafting perfect homemade pasta from scratch with our step-by-step guide...",
    content:
      "<p>Making pasta from scratch is a rewarding experience...</p><p>You only need a few basic ingredients: flour, eggs, and a little water.</p><p>First, pile your flour on a clean surface and make a well in the center...</p>",
    imageUrl:
      "https://muestra.machmedianj.com/wp-content/themes/del-porto-ristorante/assets/images/delportoristorante.webp", // Placeholder
    category: "Recipes",
  },
  {
    id: 2,
    title: "Wine Pairing Masterclass: Italian Reds",
    slug: "wine-pairing-italian-reds",
    date: "July 20, 2025",
    excerpt:
      "Discover how to perfectly pair Italian red wines with your favorite Del Porto dishes...",
    content:
      "<p>Italian red wines are renowned for their versatility and depth...</p><p>Chianti pairs wonderfully with tomato-based sauces, while a robust Barolo is ideal for rich meat dishes.</p><p>Join us for our next wine tasting event to learn more!</p>",
    imageUrl:
      "https://muestra.machmedianj.com/wp-content/themes/del-porto-ristorante/assets/images/delportoristorante.webp", // Placeholder
    category: "Wine",
  },
  {
    id: 3,
    title: "Behind the Scenes: A Day at Del Porto Kitchen",
    slug: "behind-the-scenes-kitchen",
    date: "July 15, 2025",
    excerpt:
      "Ever wondered what goes into creating our authentic Italian dishes? Step into our kitchen...",
    content:
      "<p>From the early morning deliveries of fresh produce to the evening's bustling service, our kitchen is a hub of activity.</p><p>Our chefs begin their day preparing homemade pasta and fresh sauces, ensuring every ingredient meets our high standards.</p><p>It's a true labor of love that brings the flavors of Italy to your table.</p>",
    imageUrl:
      "https://muestra.machmedianj.com/wp-content/themes/del-porto-ristorante/assets/images/delportoristorante.webp", // Placeholder
    category: "Restaurant",
  },
];

export const fakeReviews = [
  {
    id: 1,
    name: "Attila Tihanyi",
    date: "May 13, 2020",
    rating: 5,
    text: "My favorite application Quick response from the support team Superb !!",
    profileImage:
      "https://muestra.machmedianj.com/wp-content/themes/del-porto-ristorante/assets/images/delportoristorante.webp", // Placeholder
  },
  {
    id: 2,
    name: "Slamovits Tibor",
    date: "April 8, 2020",
    rating: 5,
    text: "Good solution. happy to be Pro user. Was really easy to integrate the widget to my WEB page. Support working good.",
    profileImage:
      "https://muestra.machmedianj.com/wp-content/themes/del-porto-ristorante/assets/images/delportoristorante.webp", // Placeholder
  },
  {
    id: 3,
    name: "Gabor Bakonyi",
    date: "March 22, 2020",
    rating: 5,
    text: "Customer reviews have a very important role in sales processes, and Trustindex is an amazing tool to collect and publish customer reviews!",
    profileImage:
      "https://muestra.machmedianj.com/wp-content/themes/del-porto-ristorante/assets/images/delportoristorante.webp", // Placeholder
  },
  {
    id: 4,
    name: "Maria Rossi",
    date: "July 1, 2025",
    rating: 5,
    text: "Absolutely delightful! The pasta was perfectly al dente and the Tiramisu was out of this world. A true taste of Italy in Elizabeth.",
    profileImage:
      "https://muestra.machmedianj.com/wp-content/themes/del-porto-ristorante/assets/images/delportoristorante.webp", // Placeholder
  },
  {
    id: 5,
    name: "Giovanni Esposito",
    date: "June 28, 2025",
    rating: 5,
    text: "Outstanding service and authentic dishes. The ambiance is cozy and inviting. Del Porto is our new favorite spot for family dinners.",
    profileImage:
      "https://muestra.machmedianj.com/wp-content/themes/del-porto-ristorante/assets/images/delportoristorante.webp", // Placeholder
  },
  {
    id: 6,
    name: "Sofia Bianchi",
    date: "June 15, 2025",
    rating: 5,
    text: "Amazing wine selection and fresh seafood. Every dish was a masterpiece. Highly recommend for a romantic evening or special occasion.",
    profileImage:
      "https://muestra.machmedianj.com/wp-content/themes/del-porto-ristorante/assets/images/delportoristorante.webp", // Placeholder
  },
];
