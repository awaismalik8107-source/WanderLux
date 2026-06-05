const destinations = [
  "Abu Dhabi",
  "AlUla",
  "Amalfi Coast",
  "Amsterdam",
  "Antarctica",
  "Athens",
  "Bali",
  "Bangkok",
  "Barcelona",
  "Bora Bora",
  "Buenos Aires",
  "Cairo",
  "Cape Town",
  "Cappadocia",
  "Chamonix",
  "Chiang Mai",
  "Copenhagen",
  "Costa Rica",
  "Crete",
  "Croatia",
  "Dubai",
  "Edinburgh",
  "Egypt",
  "Florence",
  "French Riviera",
  "Galapagos Islands",
  "Geneva",
  "Goa",
  "Greece",
  "Hanoi",
  "Havana",
  "Iceland",
  "Ibiza",
  "Istanbul",
  "Jaipur",
  "Japan",
  "Jordan",
  "Kauai",
  "Kenya",
  "Kyoto",
  "Lake Como",
  "Lapland",
  "Lisbon",
  "London",
  "Los Cabos",
  "Madeira",
  "Madrid",
  "Maldives",
  "Marrakech",
  "Mauritius",
  "Mexico City",
  "Milan",
  "Monaco",
  "Montenegro",
  "Mykonos",
  "Napa Valley",
  "New York",
  "New Zealand",
  "Norwegian Fjords",
  "Oman",
  "Paris",
  "Patagonia",
  "Peru",
  "Phuket",
  "Portugal",
  "Prague",
  "Provence",
  "Queenstown",
  "Qatar",
  "Reykjavik",
  "Rome",
  "Rwanda",
  "Safari Tanzania",
  "Saint Barthélemy",
  "Santorini",
  "Scottish Highlands",
  "Seychelles",
  "Singapore",
  "South Africa",
  "Sri Lanka",
  "St. Moritz",
  "Sydney",
  "Tahiti",
  "Tanzania",
  "Tulum",
  "Tuscany",
  "Venice",
  "Vienna",
  "Vietnam",
  "Zanzibar",
  "Zermatt"
];

const body = document.body;
const destinationField = document.querySelector(".destination-field");
const destinationInput = document.querySelector("#destination-input");
const destinationList = document.querySelector("#destination-list");
const dateField = document.querySelector(".date-field");
const dateDisplay = document.querySelector("#date-display");
const dateStart = document.querySelector(".date-start");
const dateEnd = document.querySelector(".date-end");
const travellerInput = document.querySelector("#traveller-count");
const minusButton = document.querySelector(".stepper-minus");
const plusButton = document.querySelector(".stepper-plus");
const searchForm = document.querySelector("#trip-search");
const searchButton = document.querySelector(".search-button");
const searchStatus = document.querySelector(".search-status");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const mobileMenu = document.querySelector("#mobile-menu");
const trustBar = document.getElementById("section-trust-bar");
const trustLogoImages = document.querySelectorAll("#section-trust-bar img[data-src]");
const trustRevealItems = document.querySelectorAll(".logo-item, .cert-item");
const statNumbers = document.querySelectorAll(".stat-number[data-stat-value]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const destinationGrid = document.querySelector("#destination-grid");
const destinationFilters = Array.from(document.querySelectorAll("[data-destination-filter]"));
const destinationLoadMore = document.querySelector(".destination-load-more");
const destinationSchema = document.querySelector("#destinations-schema");

const destinationCardData = [
  {
    name: "Baa Atoll",
    country: "Maldives",
    region: "MALDIVES · SOUTH ASIA",
    flag: "🇲🇻",
    categories: ["Beach & Islands"],
    duration: "7–14 nights",
    price: "From £2,490 per person",
    badge: "Most Popular",
    badgeType: "popular",
    slug: "baa-atoll",
    imageId: "1573843981267-be1999ff37cd",
    imageAlt: "Baa Atoll, Maldives — overwater villas above a turquoise lagoon",
    imageAria: "Aerial view of Baa Atoll, Maldives"
  },
  {
    name: "Amalfi Coast",
    country: "Italy",
    region: "ITALY · EUROPE",
    flag: "🇮🇹",
    categories: ["City Breaks", "Luxury & Resorts"],
    duration: "5–10 nights",
    price: "From £1,890 per person",
    slug: "amalfi-coast",
    imageId: "1533105079780-92b9be482077",
    imageAlt: "Amalfi Coast, Italy — cliffside coastal village above blue water",
    imageAria: "Cliffside view of the Amalfi Coast, Italy"
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    region: "PERU · SOUTH AMERICA",
    flag: "🇵🇪",
    categories: ["Adventure & Trekking"],
    duration: "8–12 nights",
    price: "From £2,190 per person",
    badge: "New",
    badgeType: "new",
    slug: "machu-picchu",
    imageId: "1526392060635-9d6019884377",
    imageAlt: "Machu Picchu, Peru — ancient Inca terraces surrounded by mountains",
    imageAria: "Mountain view of Machu Picchu, Peru"
  },
  {
    name: "Kyoto",
    country: "Japan",
    region: "JAPAN · EAST ASIA",
    flag: "🇯🇵",
    categories: ["Cultural & Heritage"],
    duration: "7–14 nights",
    price: "From £2,650 per person",
    slug: "kyoto",
    imageId: "1493976040374-85c8e12f0c0e",
    imageAlt: "Kyoto, Japan — vermilion shrine gates leading through a forest path",
    imageAria: "Vermilion shrine gates in Kyoto, Japan"
  },
  {
    name: "Santorini",
    country: "Greece",
    region: "GREECE · EUROPE",
    flag: "🇬🇷",
    categories: ["Honeymoon", "Luxury & Resorts"],
    duration: "5–9 nights",
    price: "From £1,750 per person",
    badge: "Exclusive",
    badgeType: "exclusive",
    slug: "santorini",
    imageId: "1570077188670-e3a8d69ac5ff",
    imageAlt: "Santorini, Greece — whitewashed village and blue domes above the caldera",
    imageAria: "Caldera view in Santorini, Greece"
  },
  {
    name: "Serengeti",
    country: "Tanzania",
    region: "TANZANIA · EAST AFRICA",
    flag: "🇹🇿",
    categories: ["Adventure & Trekking"],
    duration: "7–10 nights",
    price: "From £4,200 per person",
    slug: "serengeti",
    imageId: "1516426122078-c23e76319801",
    imageAlt: "Serengeti, Tanzania — safari wildlife crossing open golden plains",
    imageAria: "Safari landscape in the Serengeti, Tanzania"
  },
  {
    name: "Bali",
    country: "Indonesia",
    region: "INDONESIA · SOUTHEAST ASIA",
    flag: "🇮🇩",
    categories: ["Beach & Islands", "Family Trips"],
    duration: "8–14 nights",
    price: "From £1,490 per person",
    slug: "bali",
    imageId: "1537996194471-e657df975ab4",
    imageAlt: "Bali, Indonesia — temple and palms in a lush tropical landscape",
    imageAria: "Tropical temple landscape in Bali, Indonesia"
  },
  {
    name: "Patagonia",
    country: "Argentina",
    region: "ARGENTINA · SOUTH AMERICA",
    flag: "🇦🇷",
    categories: ["Adventure & Trekking"],
    duration: "10–14 nights",
    price: "From £3,100 per person",
    slug: "patagonia",
    imageId: "1519681393784-d120267933ba",
    imageAlt: "Patagonia, Argentina — jagged mountain peaks reflected in a cold lake",
    imageAria: "Mountain landscape in Patagonia, Argentina"
  },
  {
    name: "Dubrovnik",
    country: "Croatia",
    region: "CROATIA · EUROPE",
    flag: "🇭🇷",
    categories: ["City Breaks", "Cultural & Heritage"],
    duration: "5–7 nights",
    price: "From £1,380 per person",
    slug: "dubrovnik",
    imageId: "1414862625453-d87604a607e4",
    imageAlt: "Dubrovnik, Croatia — historic walled city beside the Adriatic Sea",
    imageAria: "Historic coastal view of Dubrovnik, Croatia"
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    region: "UAE · MIDDLE EAST",
    flag: "🇦🇪",
    categories: ["City Breaks", "Luxury & Resorts", "Family Trips"],
    duration: "4–7 nights",
    price: "From £1,250 per person",
    badge: "New",
    badgeType: "new",
    slug: "dubai",
    imageId: "1512453979798-5ea266f8880c",
    imageAlt: "Dubai, United Arab Emirates — modern skyline and waterfront at dusk",
    imageAria: "Skyline view of Dubai, United Arab Emirates"
  },
  {
    name: "Seychelles",
    country: "Seychelles",
    region: "SEYCHELLES · INDIAN OCEAN",
    flag: "🇸🇨",
    categories: ["Beach & Islands", "Honeymoon"],
    duration: "7–12 nights",
    price: "From £2,850 per person",
    slug: "seychelles",
    imageId: "1547471080-7cc2caa01a7e",
    imageAlt: "Seychelles — granite boulders and clear water on a quiet island beach",
    imageAria: "Island beach in the Seychelles"
  },
  {
    name: "Queenstown",
    country: "New Zealand",
    region: "NEW ZEALAND · OCEANIA",
    flag: "🇳🇿",
    categories: ["Adventure & Trekking", "Family Trips"],
    duration: "8–13 nights",
    price: "From £2,740 per person",
    slug: "queenstown",
    imageId: "1507699622108-4be3abd695ad",
    imageAlt: "Queenstown, New Zealand — alpine lake framed by dramatic mountain ridges",
    imageAria: "Alpine lake view in Queenstown, New Zealand"
  }
].map((destination) => ({
  ...destination,
  url: `/destinations/${destination.slug}`
}));

const initialDestinationCount = 9;
const destinationBatchSize = 3;
let activeDestinationFilter = "All";
let visibleDestinationCount = initialDestinationCount;
let destinationCardObserver = null;

window.requestAnimationFrame(() => {
  body.classList.add("is-loaded");
});

function loadTrustLogos() {
  trustLogoImages.forEach((image) => {
    image.src = image.dataset.src;
    image.removeAttribute("data-src");
  });
}

window.addEventListener(
  "load",
  () => {
    const load = () => loadTrustLogos();

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(load, { timeout: 1500 });
      return;
    }

    window.setTimeout(load, 250);
  },
  { once: true }
);

function easeOutQuart(value) {
  return 1 - Math.pow(1 - value, 4);
}

function formatStatNumber(element, value) {
  const finalDisplay = element.dataset.statDisplay;

  if (finalDisplay.includes("+")) {
    return `${Math.round(value).toLocaleString("en")}+`;
  }

  if (finalDisplay.includes("★")) {
    const decimals = Number(element.dataset.statDecimals || 0);
    return `${value.toFixed(decimals)}★`;
  }

  if (finalDisplay.includes("%")) {
    return `${Math.round(value)}%`;
  }

  return Math.round(value).toLocaleString("en");
}

function setFinalStats() {
  statNumbers.forEach((number) => {
    number.textContent = number.dataset.statDisplay;
  });
}

function animateStatNumber(element) {
  const target = Number(element.dataset.statValue);
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const elapsed = Math.min(1, (now - start) / duration);
    const eased = easeOutQuart(elapsed);
    element.textContent = formatStatNumber(element, target * eased);

    if (elapsed < 1) {
      window.requestAnimationFrame(tick);
      return;
    }

    element.textContent = element.dataset.statDisplay;
  }

  window.requestAnimationFrame(tick);
}

function revealTrustBar() {
  trustBar.classList.add("trust-bar-visible");

  if (prefersReducedMotion) {
    trustRevealItems.forEach((item) => item.classList.add("visible"));
    setFinalStats();
    return;
  }

  trustRevealItems.forEach((item, index) => {
    window.setTimeout(() => item.classList.add("visible"), index * 60);
  });

  statNumbers.forEach((number) => animateStatNumber(number));
}

setFinalStats();

if (trustBar && "IntersectionObserver" in window) {
  const trustObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealTrustBar();
          trustObserver.unobserve(trustBar);
        }
      });
    },
    { threshold: 0.15 }
  );

  trustObserver.observe(trustBar);
} else if (trustBar) {
  revealTrustBar();
}

function getDestinationImageUrl(imageId, width, format = "webp") {
  return `https://images.unsplash.com/photo-${imageId}?fit=crop&w=${width}&q=45&fm=${format}`;
}

function getDestinationImageSrcset(imageId, format = "webp") {
  return [400, 700, 900].map((width) => `${getDestinationImageUrl(imageId, width, format)} ${width}w`).join(", ");
}

function getFilteredDestinationData() {
  if (activeDestinationFilter === "All") {
    return destinationCardData;
  }

  return destinationCardData.filter((destination) => destination.categories.includes(activeDestinationFilter));
}

function getAbsoluteDestinationUrl(path) {
  try {
    return new URL(path, window.location.href).href;
  } catch {
    return path;
  }
}

function updateDestinationSchema() {
  if (!destinationSchema) return;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Explore destinations",
    numberOfItems: destinationCardData.length,
    itemListElement: destinationCardData.map((destination, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: getAbsoluteDestinationUrl(destination.url),
      item: {
        "@type": "TouristDestination",
        name: `${destination.name}, ${destination.country}`
      }
    }))
  };

  destinationSchema.textContent = JSON.stringify(schema);
}

function getDestinationCardObserver() {
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    return null;
  }

  if (!destinationCardObserver) {
    destinationCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          destinationCardObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
  }

  return destinationCardObserver;
}

function markDestinationImageLoaded(image) {
  if (image.complete && image.naturalWidth > 0) {
    image.classList.add("is-loaded");
    return;
  }

  image.addEventListener("load", () => image.classList.add("is-loaded"), { once: true });
}

function createDestinationCard(destination) {
  const article = document.createElement("article");
  const badgeClass = destination.badgeType ? ` is-${destination.badgeType}` : "";
  const badgeMarkup = destination.badge
    ? `<span class="destination-badge${badgeClass}" aria-hidden="true">${destination.badge}</span>`
    : "";

  article.className = "destination-card";
  article.dataset.categories = destination.categories.join("|");
  article.setAttribute("aria-label", `${destination.name}, ${destination.country} — ${destination.price}`);
  article.innerHTML = `
    <picture class="destination-media">
      <source
        type="image/webp"
        srcset="${getDestinationImageSrcset(destination.imageId, "webp")}"
        sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 899px) calc((100vw - 60px) / 2), 373px"
      >
      <img
        class="destination-image"
        src="${getDestinationImageUrl(destination.imageId, 900, "jpg")}"
        srcset="${getDestinationImageSrcset(destination.imageId, "jpg")}"
        sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 899px) calc((100vw - 60px) / 2), 373px"
        alt="${destination.imageAlt}"
        role="img"
        aria-label="${destination.imageAria}"
        width="900"
        height="1260"
        loading="lazy"
        decoding="async"
      >
    </picture>
    <span class="destination-overlay" aria-hidden="true"></span>
    ${badgeMarkup}
    <div class="destination-content">
      <div class="destination-meta">
        <span class="destination-flag" aria-hidden="true">${destination.flag}</span>
        <span class="destination-region">${destination.region}</span>
      </div>
      <h3>${destination.name}</h3>
      <div class="destination-detail-row">
        <span class="destination-duration">${destination.duration}</span>
      </div>
      <p class="destination-price">${destination.price}</p>
      <a class="destination-package-link" href="${destination.url}" aria-label="View packages for ${destination.name}, ${destination.country}">
        View packages <span class="package-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  `;

  const image = article.querySelector(".destination-image");
  const packageLink = article.querySelector(".destination-package-link");

  markDestinationImageLoaded(image);
  article.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    packageLink.click();
  });

  return article;
}

function revealDestinationCard(card, staggerIndex) {
  card.style.setProperty("--stagger-delay", `${staggerIndex * 80}ms`);

  if (prefersReducedMotion) {
    card.classList.add("is-visible");
    return;
  }

  const observer = getDestinationCardObserver();

  if (observer) {
    observer.observe(card);
    return;
  }

  window.requestAnimationFrame(() => card.classList.add("is-visible"));
}

function appendDestinationCards(destinationsToAppend, staggerStart = 0) {
  destinationsToAppend.forEach((destination, index) => {
    const card = createDestinationCard(destination);
    destinationGrid.appendChild(card);
    revealDestinationCard(card, staggerStart + index);
  });
}

function updateDestinationLoadButton() {
  if (!destinationLoadMore) return;

  const filteredDestinations = getFilteredDestinationData();
  const shownCount = Math.min(visibleDestinationCount, filteredDestinations.length);
  const totalCount = filteredDestinations.length;
  const label = `Load more destinations, currently showing ${shownCount} of ${totalCount}`;

  destinationLoadMore.setAttribute("aria-label", label);
  destinationLoadMore.disabled = shownCount >= totalCount;
  destinationLoadMore.querySelector("span").textContent =
    shownCount >= totalCount ? "You've seen all destinations" : "Explore more destinations";
}

function renderDestinationCards() {
  if (!destinationGrid) return;

  if (destinationCardObserver) {
    destinationCardObserver.disconnect();
    destinationCardObserver = null;
  }

  const filteredDestinations = getFilteredDestinationData();
  destinationGrid.innerHTML = "";
  appendDestinationCards(filteredDestinations.slice(0, visibleDestinationCount));
  updateDestinationLoadButton();
}

function setDestinationFilter(nextFilter) {
  if (!destinationGrid || nextFilter === activeDestinationFilter) return;

  activeDestinationFilter = nextFilter;
  visibleDestinationCount = initialDestinationCount;

  destinationFilters.forEach((button) => {
    const isActive = button.dataset.destinationFilter === nextFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const currentCards = Array.from(destinationGrid.querySelectorAll(".destination-card"));
  currentCards.forEach((card) => {
    const categories = card.dataset.categories.split("|");
    const matches = nextFilter === "All" || categories.includes(nextFilter);

    card.classList.toggle("is-filtering-in", matches);
    card.classList.toggle("is-filtering-out", !matches);
  });

  window.setTimeout(renderDestinationCards, prefersReducedMotion ? 0 : 300);
}

function loadMoreDestinationCards() {
  const filteredDestinations = getFilteredDestinationData();
  const previousCount = Math.min(visibleDestinationCount, filteredDestinations.length);

  visibleDestinationCount = Math.min(visibleDestinationCount + destinationBatchSize, filteredDestinations.length);
  appendDestinationCards(filteredDestinations.slice(previousCount, visibleDestinationCount));
  updateDestinationLoadButton();
}

if (destinationGrid) {
  renderDestinationCards();
  updateDestinationSchema();
}

destinationFilters.forEach((button) => {
  button.addEventListener("click", () => setDestinationFilter(button.dataset.destinationFilter));
});

destinationLoadMore?.addEventListener("click", loadMoreDestinationCards);

function renderDestinations(query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  const matches = destinations.filter((destination) => destination.toLowerCase().includes(normalizedQuery));

  destinationList.innerHTML = "";

  matches.forEach((destination, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "destination-option";
    option.role = "option";
    option.id = `destination-option-${index}`;
    option.textContent = destination;
    option.setAttribute("aria-selected", "false");
    option.addEventListener("mousedown", (event) => event.preventDefault());
    option.addEventListener("click", () => {
      destinationInput.value = destination;
      closeDestinationList();
    });
    destinationList.appendChild(option);
  });
}

function openDestinationList() {
  renderDestinations(destinationInput.value);
  destinationField.classList.add("is-open");
  destinationInput.setAttribute("aria-expanded", "true");
}

function closeDestinationList() {
  destinationField.classList.remove("is-open");
  destinationInput.setAttribute("aria-expanded", "false");
}

destinationInput.addEventListener("focus", openDestinationList);
destinationInput.addEventListener("input", () => {
  renderDestinations(destinationInput.value);
  destinationField.classList.add("is-open");
  destinationInput.setAttribute("aria-expanded", "true");
});

destinationInput.addEventListener("keydown", (event) => {
  const options = Array.from(destinationList.querySelectorAll(".destination-option"));
  const selectedIndex = options.findIndex((option) => option.getAttribute("aria-selected") === "true");

  if (event.key === "Escape") {
    closeDestinationList();
  }

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    openDestinationList();

    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = selectedIndex === -1 ? 0 : (selectedIndex + direction + options.length) % options.length;

    options.forEach((option) => option.setAttribute("aria-selected", "false"));
    options[nextIndex]?.setAttribute("aria-selected", "true");
    options[nextIndex]?.scrollIntoView({ block: "nearest" });
  }

  if (event.key === "Enter" && selectedIndex > -1) {
    event.preventDefault();
    destinationInput.value = options[selectedIndex].textContent;
    closeDestinationList();
  }
});

function formatDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(year, month - 1, day)
  );
}

function updateDateDisplay() {
  const startValue = dateStart.value;
  const endValue = dateEnd.value;

  if (startValue && endValue) {
    dateDisplay.value = `${formatDate(startValue)} - ${formatDate(endValue)}`;
    dateField.classList.remove("is-open");
    return;
  }

  if (startValue) {
    dateDisplay.value = `${formatDate(startValue)} - choose end`;
    return;
  }

  dateDisplay.value = "";
}

const today = new Date().toISOString().split("T")[0];
dateStart.min = today;
dateEnd.min = today;

dateDisplay.addEventListener("click", () => {
  dateField.classList.toggle("is-open");
});

dateDisplay.addEventListener("focus", () => {
  dateField.classList.add("is-open");
});

dateStart.addEventListener("change", () => {
  dateEnd.min = dateStart.value || today;
  if (dateEnd.value && dateEnd.value < dateStart.value) {
    dateEnd.value = "";
  }
  updateDateDisplay();
});

dateEnd.addEventListener("change", updateDateDisplay);

function updateTravellerCount(nextValue) {
  const count = Math.min(20, Math.max(1, nextValue));
  travellerInput.value = count;
  minusButton.disabled = count === 1;
  plusButton.disabled = count === 20;
}

minusButton.addEventListener("click", () => updateTravellerCount(Number(travellerInput.value) - 1));
plusButton.addEventListener("click", () => updateTravellerCount(Number(travellerInput.value) + 1));
updateTravellerCount(Number(travellerInput.value));

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchButton.classList.add("is-loading");
  searchButton.disabled = true;
  searchStatus.textContent = "";

  window.setTimeout(() => {
    searchButton.classList.remove("is-loading");
    searchButton.disabled = false;
    searchStatus.textContent = "A travel expert will shape matching ideas for your enquiry.";
  }, 1100);
});

function openMenu() {
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  body.style.overflow = "";
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  if (!destinationField.contains(event.target)) {
    closeDestinationList();
  }

  if (!dateField.contains(event.target)) {
    dateField.classList.remove("is-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDestinationList();
    dateField.classList.remove("is-open");
    closeMenu();
  }
});
