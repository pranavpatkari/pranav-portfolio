// To add a project: put screenshots in src/assets/projects, import them here,
// and add an entry to the list below.
import brewLight from '../assets/projects/brew-bloom-light.webp'
import brewDark from '../assets/projects/brew-bloom-dark.webp'
import folioHome from '../assets/projects/folio-home.webp'
import folioMenu from '../assets/projects/folio-menu.webp'
import pharmacyHome from '../assets/projects/pharmacy-home.webp'
import pharmacyProducts from '../assets/projects/pharmacy-products.webp'
import mangaHome from '../assets/projects/mangaverse-home.webp'
import mangaProfile from '../assets/projects/mangaverse-profile.webp'
import sharedList from '../assets/projects/shared-list.webp'

export const categories = ['All', 'Café & Restaurant', 'Pharmacy', 'Web App']

export const projects = [
  {
    id: 'brew-bloom',
    name: 'Brew & Bloom Café',
    category: 'Café & Restaurant',
    type: 'Café ordering website',
    summary:
      'A complete café website where customers browse the menu with food photos, filter what they want and add items to a cart. Includes table booking, offers and customer login.',
    goal: 'Let customers see the full menu, check what is veg or available, and decide before they arrive.',
    solution: 'A searchable photo menu with filters, a cart and table booking, so customers decide before they arrive.',
    features: [
      'Menu by category: coffee, breakfast, burgers, pasta, desserts',
      'Search plus Veg, Vegan, Spicy, Bestseller and New filters',
      'Cart, offers page and table booking',
      'Day and night themes, works on any phone',
    ],
    stack: ['React', 'Vite', 'Spring Boot', 'PostgreSQL'],
    goodFor: 'Cafés and restaurants that want customers to order or book online',
    shots: [
      { src: brewLight, label: 'Menu · day theme', alt: 'Brew and Bloom café dessert menu with photos, veg filter and add buttons' },
      { src: brewDark, label: 'Menu · night theme', alt: 'Brew and Bloom café menu in a dark neon theme' },
    ],
  },
  {
    id: 'folio',
    name: 'Folio Café & Bookstore',
    category: 'Café & Restaurant',
    type: 'Café website',
    summary:
      'A website for a vegetarian café with a reading corner. Customers browse the menu, see today\'s specials and book a table before they arrive.',
    goal: 'Give a café that is also a bookstore one place to show both its food and its books.',
    solution: 'A menu with tabs and daily specials, a books section and a reservation page in one website.',
    features: [
      'Menu with Food, Beverages and Chef\'s Specials tabs',
      'Today\'s specials and combo deals with prices in ₹',
      'Table reservation, location and opening hours',
      'Light and dark look',
    ],
    stack: ['React', 'Vite', 'CSS'],
    goodFor: 'Cafés, bakeries, sweet shops and cloud kitchens',
    shots: [
      { src: folioHome, label: 'Home page', alt: 'Folio café home page with the headline Where Stories Brew' },
      { src: folioMenu, label: 'Menu · specials', alt: 'Folio café menu page showing today\'s specials with prices' },
    ],
  },
  {
    id: 'pharmacy',
    name: 'Neighbourhood Pharmacy',
    category: 'Pharmacy',
    type: 'Pharmacy catalogue website',
    summary:
      'Customers check what is in stock before they make the trip, send their list on WhatsApp and pick it up at the counter.',
    goal: 'Cut down the "do you have this medicine?" calls a pharmacy gets every day.',
    solution: 'A searchable catalogue with stock status and an enquiry list that goes straight to the pharmacy\'s WhatsApp.',
    features: [
      'Medicine search across 15 categories',
      'Stock status, Rx label and price on every item',
      'Enquiry list sent to WhatsApp',
      'Live "Open now" badge from shop hours',
    ],
    stack: ['React', 'Vite', 'Spring Boot', 'PostgreSQL'],
    goodFor: 'Chemists, medical stores, clinics and opticians',
    shots: [
      { src: pharmacyHome, label: 'Home page', alt: 'Pharmacy home page with medicine search, WhatsApp button and categories' },
      { src: pharmacyProducts, label: 'Product catalogue', alt: 'Pharmacy catalogue of prescription medicines with prices and enquire buttons' },
    ],
  },
  {
    id: 'mangaverse',
    name: 'MangaVerse',
    category: 'Web App',
    type: 'Reading platform',
    summary:
      'A manga and light novel platform with user accounts and a coin system. Readers earn coins daily, unlock premium chapters and spend coins in an item shop.',
    goal: 'Keep readers coming back every day and reward loyal users.',
    solution: 'Accounts with a coin wallet, daily rewards, premium unlocks and reading progress on a profile page.',
    features: [
      'Login, reader profiles and reading progress',
      'Daily rewards and a coin wallet',
      'Premium content unlocks and an item shop',
      'Activity history and badges',
    ],
    stack: ['React', 'Vite', 'REST API'],
    goodFor: 'Shows how a loyalty-points system could work for your customers',
    portrait: true,
    shots: [
      { src: mangaHome, label: 'Home · daily reward', alt: 'MangaVerse home page with daily coin reward' },
      { src: mangaProfile, label: 'Reader profile', alt: 'MangaVerse profile with reading progress and recent activity' },
    ],
  },
  {
    id: 'shared-list',
    name: 'Shared Shopping List',
    category: 'Web App',
    type: 'Real-time web app',
    summary:
      'A live list several people use at once. When one person picks up an item it locks for everyone else, so nothing gets bought twice.',
    goal: 'Stop people sharing a home from buying the same items twice.',
    solution: 'A shared list with item locking and cost tracking that updates for everyone instantly.',
    features: [
      'Real-time updates between users',
      'Item status: needed, locked, bought',
      'Categories, filters and cost tracking in ₹',
    ],
    stack: ['React', 'Real-time sync', 'Database'],
    goodFor: 'Shows custom tools like order trackers, stock lists or staff checklists',
    shots: [
      { src: sharedList, label: 'List view', alt: 'Shared shopping list with categories and items marked needed, locked or bought' },
    ],
  },
]
