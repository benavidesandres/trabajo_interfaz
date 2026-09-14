import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
    <div class="scene">
      <div class="app-window">
        <aside class="sidebar">
          <div class="sidebar-top">
            <div class="window-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
          </div>

          <nav class="side-nav" aria-label="Main navigation">
            <button class="nav-button active" aria-label="Play">
              <span>🎮</span>
            </button>
            <button class="nav-button" aria-label="Discovery">
              <span>◌</span>
            </button>
            <button class="nav-button" aria-label="Messages">
              <span>◍</span>
            </button>
            <button class="nav-button" aria-label="Cart">
              <span>◐</span>
            </button>
            <button class="nav-button" aria-label="Settings">
              <span>◔</span>
            </button>
            <button class="nav-button" aria-label="Profile">
              <span>◕</span>
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
              <span class="search-icon">⌕</span>
              <input type="text" value="Search games" aria-label="Search games" />
            </label>

            <div class="header-actions">
              <button class="icon-button">◔</button>
              <button class="icon-button">◍</button>
            </div>
          </header>

          <div class="content-grid">
            <section class="featured-area">
              <article class="feature-card">
                <div class="feature-image"></div>
                <div class="feature-overlay"></div>
                <div class="feature-copy">
                  <span class="eyebrow">Now Featured</span>
                  <h1>The Forbidden Kingdom:<br />Adventure War</h1>
                  <button class="play-button">Play Now</button>
                </div>
              </article>
            </section>

            <aside class="live-panel">
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
            </aside>

            <section class="popular-area">
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

            <section class="for-you-area">
              <div class="section-header">
                <h3>For You</h3>
                <a href="#">See all</a>
              </div>

              <div class="mini-grid">
                <article class="mini-card">
                  <div class="mini-cover cover-racing"></div>
                  <div class="mini-card__body">
                    <strong>Ashpalt Racing</h4>
                    <div class="mini-meta">
                      <span>Racing</span>
                      <span class="free">Free</span>
                    </div>
                    <div class="rating small">★★★★★</div>
                  </div>
                </article>

                <article class="mini-card">
                  <div class="mini-cover cover-snake"></div>
                  <div class="mini-card__body">
                    <strong>Green Snake</strong>
                    <div class="mini-meta">
                      <span>Action</span>
                      <span class="paid">$100.00</span>
                    </div>
                    <div class="rating small">★★★★★</div>
                  </div>
                </article>

                <article class="mini-card">
                  <div class="mini-cover cover-ledge"></div>
                  <div class="mini-card__body">
                    <strong>Legend of Alkali</strong>
                    <div class="mini-meta">
                      <span>Adventure</span>
                      <span class="installed">Installed</span>
                    </div>
                    <div class="rating small">★★★★★</div>
                  </div>
                </article>

                <article class="mini-card">
                  <div class="mini-cover cover-rekone"></div>
                  <div class="mini-card__body">
                    <strong>Rekoning</strong>
                    <div class="mini-meta">
                      <span>Action</span>
                      <span class="download">Download</span>
                    </div>
                    <div class="rating small">★★★★★</div>
                  </div>
                </article>
              </div>
            </section>

            <aside class="detail-panel">
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
            </aside>
          </div>
        </main>
      </div>
    </div>
  `
}

