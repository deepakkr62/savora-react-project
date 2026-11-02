import { useMemo, useState } from 'react'

const categories = ['All', 'Burgers', 'Pizza', 'Salads', 'Desserts']

const dishes = [
  {
    id: 'classic-burger',
    name: 'Classic Smash Burger',
    description: 'Double beef, cheddar, pickles & house sauce',
    category: 'Burgers',
    price: 12.9,
    rating: '4.9',
    time: '20–25 min',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=720&q=85',
    tag: 'Bestseller',
  },
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    description: 'San Marzano tomato, mozzarella & fresh basil',
    category: 'Pizza',
    price: 14.5,
    rating: '4.8',
    time: '25–30 min',
    image:
      'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=720&q=85',
    tag: 'Popular',
  },
  {
    id: 'avocado-bowl',
    name: 'Green Goddess Bowl',
    description: 'Avocado, quinoa, greens & lemon tahini',
    category: 'Salads',
    price: 11.75,
    rating: '4.9',
    time: '15–20 min',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=720&q=85',
    tag: 'Fresh',
  },
  {
    id: 'berry-cheesecake',
    name: 'Berry Cheesecake',
    description: 'Creamy vanilla cheesecake with fresh berries',
    category: 'Desserts',
    price: 7.5,
    rating: '4.7',
    time: '10–15 min',
    image:
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=720&q=85',
    tag: '',
  },
]

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [quantities, setQuantities] = useState({})

  const visibleDishes = useMemo(() => {
    const query = search.trim().toLowerCase()

    return dishes.filter((dish) => {
      const matchesCategory =
        activeCategory === 'All' || dish.category === activeCategory
      const matchesSearch =
        !query ||
        dish.name.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query) ||
        dish.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  const cartCount = Object.values(quantities).reduce(
    (total, quantity) => total + quantity,
    0,
  )

  function updateQuantity(dishId, change) {
    setQuantities((current) => {
      const nextQuantity = (current[dishId] || 0) + change

      if (nextQuantity <= 0) {
        const next = { ...current }
        delete next[dishId]
        return next
      }

      return { ...current, [dishId]: nextQuantity }
    })
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#main" aria-label="Savora home">
          <span className="brand-mark" aria-hidden="true">s</span>
          <span>savora<span className="brand-period">.</span></span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-link active" href="#main">Home</a>
          <a className="nav-link" href="#menu">Our menu</a>
          <a className="nav-link" href="#why-savora">About us</a>
        </nav>

        <div className="account-actions">
          <a className="login-link" href="#login">Log in</a>
          <button className="cart-button" type="button" aria-label={`Cart, ${cartCount} items`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 8H6" />
              <circle cx="10" cy="20" r="1.25" />
              <circle cx="18" cy="20" r="1.25" />
            </svg>
            <span>Cart</span>
            <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow"><span aria-hidden="true">✦</span> GOOD FOOD, GOOD MOOD</span>
            <h1 id="hero-title">A little joy<br />in <span>every bite.</span></h1>
            <p className="hero-description">
              Delicious food, made with love and delivered to your door while
              it&apos;s still wonderfully warm.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#menu">
                Explore menu <span aria-hidden="true">↗</span>
              </a>
              <div className="delivery-note">
                <span className="delivery-icon" aria-hidden="true">◷</span>
                <span><strong>Fast delivery</strong><small>Within 30 minutes</small></span>
              </div>
            </div>
            <div className="customer-proof">
              <div className="avatar-stack" aria-hidden="true">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&h=80&q=80" alt="" />
              </div>
              <span><strong>2,000+</strong> happy foodies</span>
              <span className="proof-divider" aria-hidden="true" />
              <span className="proof-rating"><span aria-hidden="true">★</span> 4.9 <small>(500+ reviews)</small></span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1100&q=90"
                alt="Freshly grilled meal served with vegetables"
              />
            </div>
            <div className="floating-card meal-note">
              <span className="meal-note-icon" aria-hidden="true">🥗</span>
              <span><strong>Freshly made</strong><small>Just for you</small></span>
            </div>
            <div className="floating-card discount-note">
              <span className="discount-sparkle" aria-hidden="true">✳</span>
              <span><strong>20% off</strong><small>your first order</small></span>
            </div>
            <span className="hero-decoration hero-decoration-one" aria-hidden="true">✳</span>
            <span className="hero-decoration hero-decoration-two" aria-hidden="true">✦</span>
          </div>
        </section>

        <section className="menu-section" id="menu" aria-labelledby="menu-title">
          <div className="menu-heading">
            <div>
              <span className="section-kicker">MADE FRESH, JUST FOR YOU</span>
              <h2 id="menu-title">What are you <span>craving?</span></h2>
            </div>
            <label className="search-box">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 4.5 4.5" />
              </svg>
              <input
                type="search"
                placeholder="Search dishes..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search dishes"
              />
              <span className="search-shortcut" aria-hidden="true">⌕</span>
            </label>
          </div>

          <div className="menu-toolbar">
            <div className="category-list" aria-label="Filter dishes by category">
              {categories.map((category) => (
                <button
                  className={`category-button${activeCategory === category ? ' selected' : ''}`}
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <a className="view-all-link" href="#menu">View all <span aria-hidden="true">→</span></a>
          </div>

          <div className="dish-grid">
            {visibleDishes.map((dish) => {
              const quantity = quantities[dish.id] || 0

              return (
                <article className="dish-card" key={dish.id}>
                  <div className="dish-image-wrap">
                    <img className="dish-image" src={dish.image} alt={dish.name} />
                    {dish.tag && <span className="dish-tag">{dish.tag}</span>}
                    <span className="dish-rating"><span aria-hidden="true">★</span> {dish.rating}</span>
                  </div>
                  <div className="dish-content">
                    <div className="dish-title-row">
                      <h3>{dish.name}</h3>
                      <span className="dish-time">{dish.time}</span>
                    </div>
                    <p>{dish.description}</p>
                    <div className="dish-order-row">
                      <strong className="dish-price">${dish.price.toFixed(2)}</strong>
                      {quantity === 0 ? (
                        <button
                          className="add-button"
                          type="button"
                          onClick={() => updateQuantity(dish.id, 1)}
                          aria-label={`Add ${dish.name} to cart`}
                        >
                          <span aria-hidden="true">+</span> Add
                        </button>
                      ) : (
                        <div className="quantity-control" aria-label={`${dish.name} quantity`}>
                          <button
                            type="button"
                            onClick={() => updateQuantity(dish.id, -1)}
                            aria-label={`Remove one ${dish.name}`}
                          >−</button>
                          <span aria-live="polite">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(dish.id, 1)}
                            aria-label={`Add one ${dish.name}`}
                          >+</button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          {visibleDishes.length === 0 && (
            <p className="empty-state">No dishes found. Try another search or category.</p>
          )}
        </section>

        <section className="why-savora" id="why-savora">
          <span className="section-kicker">A BETTER WAY TO EAT</span>
          <p>Good ingredients. Big flavor. Delivered with a little extra love.</p>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <a className="brand footer-brand" href="#main">
          <span className="brand-mark" aria-hidden="true">s</span>
          <span>savora<span className="brand-period">.</span></span>
        </a>
        <span>Made fresh, delivered happy.</span>
      </footer>
    </>
  )
}

export default App
