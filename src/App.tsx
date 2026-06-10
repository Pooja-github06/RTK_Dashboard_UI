import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductsQuery } from './store/apiSlice'
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from './features/counterSlice'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const [isLightMode, setIsLightMode] = useState(false)
  const count = useSelector(selectCount)
  const { data: products, error, isLoading } = useGetProductsQuery()
  const productCount = products?.length ?? 0

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode)
  }, [isLightMode])

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-actions">
          <div>
            <p className="eyebrow">RTK + Vite dashboard</p>
            <h1>Redux Toolkit UI demo</h1>
            <p className="subtitle">
              A simple UI for counter state and products fetched with RTK Query.
            </p>
          </div>

          <button
            type="button"
            className="theme-toggle-button"
            onClick={() => setIsLightMode((value) => !value)}
          >
            {isLightMode ? 'Switch to dark' : 'Switch to light'}
          </button>
        </div>

        <div className="dashboard-meta">
          <span className="stat-pill">Count: {count}</span>
          <span className="stat-pill">Products: {productCount}</span>
          <span className="stat-pill">Theme: {isLightMode ? 'Light' : 'Dark'}</span>
        </div>
      </header>

      <main className="app-grid">
        <section className="glass-card counter-card">
          <div className="card-title">
            <span className="card-badge">Counter</span>
            <h2>Interactive state</h2>
          </div>

          <div className="counter-display">{count}</div>

          <div className="counter-controls">
            <button type="button" onClick={() => dispatch(decrement())}>
              −
            </button>
            <button type="button" onClick={() => dispatch(increment())}>
              +
            </button>
          </div>

          <button
            type="button"
            className="primary-button"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Add 5
          </button>
        </section>

        <section className="glass-card products-card">
          <div className="card-title">
            <span className="card-badge secondary">Products</span>
            <h2>Fetched items</h2>
          </div>

          {isLoading && <p className="status-text">Loading products…</p>}
          {Boolean(error) && (
            <p className="status-text error">Unable to load products.</p>
          )}

          {products && products.length > 0 ? (
            <ul className="product-list">
              {products.map((product) => (
                <li key={product.id}>
                  <span>{product.name}</span>
                  <strong>${product.price}</strong>
                </li>
              ))}
            </ul>
          ) : (
            !isLoading && (
              <p className="status-text muted">No products available.</p>
            )
          )}
        </section>
      </main>
    </div>
  )
}

export default App
