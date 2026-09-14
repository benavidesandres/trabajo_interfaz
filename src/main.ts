import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
    <div class="screen-shell">
      <div class="app-window">
        <aside class="sidebar">
          <div class="window-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>

          <nav class="side-nav" aria-label="Main navigation">
            <button class="nav-button active" aria-label="Play">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8h10l1 3.5v2.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2.5L7 8Z"/><path d="M9 8V6.5A3 3 0 0 1 12 3.5a3 3 0 0 1 3 3V8"/><path d="M8.5 12h7"/><path d="M12 10v4"/><path d="M5.5 11.5v-1"/><path d="M18.5 11.5v-1"/></svg>
            </button>
            <button class="nav-button" aria-label="Discovery">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7"/><path d="M9.5 14.5 15 9l-2.5 6.5Z"/><path d="m15 9 2.5-2.5"/><path d="M12 3.5v2"/><path d="M12 18.5v2"/><path d="M3.5 12h2"/><path d="M18.5 12h2"/></svg>
            </button>
            <button class="nav-button" aria-label="Messages">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16H11l-4 3v-3.5H7.5A2.5 2.5 0 0 1 5 13.5v-6Z"/><path d="M8.5 9.5h7"/><path d="M8.5 12.5h5"/></svg>
            </button>
            <button class="nav-button" aria-label="Cart">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l-1 10H7L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><path d="M9 12h6"/></svg>
            </button>
            <button class="nav-button" aria-label="Settings">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1 1 0 0 1 .2 1.1l-.7 1.2a1 1 0 0 1-1 .5l-1.3-.2a7.5 7.5 0 0 1-1.3.8l-.4 1.3a1 1 0 0 1-1 .7h-1.4a1 1 0 0 1-1-.7l-.4-1.3c-.4-.2-.8-.5-1.3-.8l-1.3.2a1 1 0 0 1-1-.5l-.7-1.2a1 1 0 0 1 .2-1.1l.9-.9a7.2 7.2 0 0 1 0-1.6l-.9-.9a1 1 0 0 1-.2-1.1l.7-1.2a1 1 0 0 1 1-.5l1.3.2c.4-.3.9-.5 1.3-.8l.4-1.3a1 1 0 0 1 1-.7h1.4a1 1 0 0 1 1 .7l.4 1.3c.4.3.8.5 1.3.8l1.3-.2a1 1 0 0 1 1 .5l.7 1.2a1 1 0 0 1-.2 1.1l-.9.9c.1.5.1 1 .1 1.6s0 1.1-.1 1.6l.9.9Z"/></svg>
            </button>
            <button class="nav-button" aria-label="Profile">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.4"/><path d="M5 18.5c1.8-2.4 4.1-3.6 7-3.6s5.2 1.2 7 3.6"/></svg>
            </button>
          </nav>
        </aside>

        <main class="main-panel">
          <header class="topbar">
            <div class="profile">
              <div class="avatar"></div>
              <span>Hello, <strong>Silmavally</strong></span>
            </div>

            <label class="searchbox" aria-label="Search games">
              <span class="search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="5.5"/><path d="M16 16l4 4"/></svg>
              </span>
              <input type="text" value="Search games" aria-label="Search games" />
            </label>

            <div class="header-actions">
              <button class="icon-button" aria-label="Notifications">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 17h6l1.5-1.5V10a4.5 4.5 0 1 0-9 0v5.5L9 17Z"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>
              </button>
              <button class="icon-button" aria-label="Messages">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7.5A2.5 2.5 0 0 1 8.5 5h7A2.5 2.5 0 0 1 18 7.5v5A2.5 2.5 0 0 1 15.5 15H11l-4.5 3v-3.2A2.5 2.5 0 0 1 6 12.5v-5Z"/><path d="M9 9h6"/><path d="M9 12h4.5"/></svg>
              </button>
            </div>
          </header>

          <div class="grid-layout">
            <div class="left-column">
              <section class="feature-card">
                <div class="feature-media"></div>
                <div class="feature-overlay"></div>
                <div class="feature-copy">
                  <span class="eyebrow">Now Featured</span>
                  <h1>The Forbidden Kingdom:<br />Adventure War</h1>
                  <button class="play-button">Play Now</button>
                </div>
              </section>

              <section class="popular-section">
                <div class="section-header">
                  <h3>Most Popular Games</h3>
                  <a href="#">See all</a>
                </div>

                <div class="game-grid">
                  <article class="game-card">
                    <div class="game-art art-spider"></div>
                    <div class="game-meta">
                      <h4>Spider Man</h4>
                      <p>Action + Adventure</p>
                      <div class="rating">★★★★★</div>
                    </div>
                  </article>

                  <article class="game-card">
                    <div class="game-art art-call"></div>
                    <div class="game-meta">
                      <h4>Call of Duty</h4>
                      <p>Action + Adventure</p>
                      <div class="rating">★★★★★</div>
                    </div>
                  </article>

                  <article class="game-card">
                    <div class="game-art art-assassin"></div>
                    <div class="game-meta">
                      <h4>Assassin's Creed</h4>
                      <p>Action + Adventure</p>
                      <div class="rating">★★★★★</div>
                    </div>
                  </article>
                </div>
              </section>

              <section class="for-you-section">
                <div class="section-header">
                  <h3>For You</h3>
                  <a href="#">See all</a>
                </div>

                <div class="mini-grid">
                  <article class="mini-card">
                    <div class="mini-cover cover-racing"></div>
                    <div class="mini-info">
                      <strong>Ashpalt Racing</strong>
                      <div class="meta-row">
                        <span>Racing</span>
                        <span class="badge free">Free</span>
                      </div>
                      <div class="rating small">★★★★★</div>
                    </div>
                  </article>

                  <article class="mini-card">
                    <div class="mini-cover cover-snake"></div>
                    <div class="mini-info">
                      <strong>Green Snake</strong>
                      <div class="meta-row">
                        <span>Action</span>
                        <span class="badge paid">$100.00</span>
                      </div>
                      <div class="rating small">★★★★★</div>
                    </div>
                  </article>

                  <article class="mini-card">
                    <div class="mini-cover cover-ledge"></div>
                    <div class="mini-info">
                      <strong>Legend of Alkali</strong>
                      <div class="meta-row">
                        <span>Adventure</span>
                        <span class="badge installed">Installed</span>
                      </div>
                      <div class="rating small">★★★★★</div>
                    </div>
                  </article>

                  <article class="mini-card">
                    <div class="mini-cover cover-rekone"></div>
                    <div class="mini-info">
                      <strong>Rekoning</strong>
                      <div class="meta-row">
                        <span>Action</span>
                        <span class="badge download">Download</span>
                      </div>
                      <div class="rating small">★★★★★</div>
                    </div>
                  </article>
                </div>
              </section>
            </div>

            <aside class="right-column">
              <section class="live-panel">
                <div class="panel-header">
                  <h2>Live Games <span>(29)</span></h2>
                  <a href="#">See all</a>
                </div>

                <ul class="live-list">
                  <li>
                    <div class="mini-thumb thumb-one"></div>
                    <div class="live-copy">
                      <strong>Speedy T...</strong>
                      <small>14.5k viewers</small>
                    </div>
                    <button>Join</button>
                  </li>
                  <li>
                    <div class="mini-thumb thumb-two"></div>
                    <div class="live-copy">
                      <strong>Mortal Kombat</strong>
                      <small>16.5k viewers</small>
                    </div>
                    <button>Join</button>
                  </li>
                  <li>
                    <div class="mini-thumb thumb-three"></div>
                    <div class="live-copy">
                      <strong>Living Dead</strong>
                      <small>15.5k viewers</small>
                    </div>
                    <button>Join</button>
                  </li>
                  <li>
                    <div class="mini-thumb thumb-four"></div>
                    <div class="live-copy">
                      <strong>Warriors</strong>
                      <small>11.5k viewers</small>
                    </div>
                    <button>Join</button>
                  </li>
                </ul>
              </section>

              <section class="detail-panel">
                <div class="detail-art"></div>
                <div class="detail-body">
                  <div class="detail-tag">Action + Adventure</div>
                  <div class="detail-stars">★★★★★</div>
                  <h3>Grand Theft Auto V</h3>
                  <p>
                    Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions to progress through the story and earn in-game cash.
                  </p>
                  <div class="metrics">
                    <div>
                      <strong>4.8</strong>
                      <span>Rating</span>
                    </div>
                    <div>
                      <strong>19.5</strong>
                      <span>Size</span>
                    </div>
                    <div>
                      <strong>2.2M</strong>
                      <span>Downloads</span>
                    </div>
                  </div>
                  <button class="download-button">Download</button>
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  `
}

