import { Link } from "react-router-dom"

const LoginSelection = () => {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                .ls-root {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f7f5f2;
                    font-family: 'DM Sans', sans-serif;
                    padding: 1rem;
                    position: relative;
                    overflow: hidden;
                }

                .ls-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        radial-gradient(circle at 20% 80%, rgba(212, 175, 130, 0.12) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(180, 150, 200, 0.08) 0%, transparent 50%);
                    pointer-events: none;
                }

                .ls-card {
                    background: #fff;
                    border-radius: 20px;
                    padding: 3rem 2.5rem;
                    width: 100%;
                    max-width: 420px;
                    box-shadow:
                        0 1px 3px rgba(0,0,0,0.04),
                        0 8px 32px rgba(0,0,0,0.08),
                        0 0 0 1px rgba(0,0,0,0.04);
                    animation: slideUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
                    position: relative;
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .ls-brand {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    justify-content: center;
                    margin-bottom: 2rem;
                }

                .ls-brand-icon {
                    width: 32px;
                    height: 32px;
                    background: #1a1a1a;
                    border-radius: 8px;
                    display: grid;
                    place-items: center;
                }

                .ls-brand-name {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.25rem;
                    color: #1a1a1a;
                    letter-spacing: -0.01em;
                }

                .ls-divider {
                    height: 1px;
                    background: #ebebeb;
                    margin-bottom: 2rem;
                }

                .ls-heading {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.6rem;
                    color: #1a1a1a;
                    text-align: center;
                    margin-bottom: 0.4rem;
                    letter-spacing: -0.02em;
                }

                .ls-sub {
                    text-align: center;
                    font-size: 0.875rem;
                    color: #888;
                    font-weight: 300;
                    margin-bottom: 2rem;
                }

                .ls-options {
                    display: flex;
                    flex-direction: column;
                    gap: 0.875rem;
                }

                .ls-btn {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 1.25rem;
                    border-radius: 14px;
                    text-decoration: none;
                    border: 1.5px solid transparent;
                    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease;
                    position: relative;
                    overflow: hidden;
                }

                .ls-btn::after {
                    content: '→';
                    position: absolute;
                    right: 1.25rem;
                    font-size: 1rem;
                    opacity: 0;
                    transform: translateX(-6px);
                    transition: opacity 0.18s ease, transform 0.18s ease;
                }

                .ls-btn:hover::after {
                    opacity: 1;
                    transform: translateX(0);
                }

                .ls-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.10);
                }

                .ls-btn:active {
                    transform: translateY(0);
                    box-shadow: none;
                }

                /* Seller — dark filled */
                .ls-btn--seller {
                    background: #1a1a1a;
                    border-color: #1a1a1a;
                    color: #fff;
                }

                .ls-btn--seller:hover {
                    background: #2c2c2c;
                    border-color: #2c2c2c;
                }

                /* Buyer — outlined */
                .ls-btn--buyer {
                    background: #fff;
                    border-color: #ddd;
                    color: #1a1a1a;
                }

                .ls-btn--buyer:hover {
                    border-color: #1a1a1a;
                }

                .ls-btn-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: grid;
                    place-items: center;
                    flex-shrink: 0;
                }

                .ls-btn--seller .ls-btn-icon { background: rgba(255,255,255,0.10); }
                .ls-btn--buyer  .ls-btn-icon { background: #f7f5f2; }

                .ls-btn-icon svg {
                    width: 20px;
                    height: 20px;
                }

                .ls-btn--seller .ls-btn-icon svg { stroke: #fff; }
                .ls-btn--buyer  .ls-btn-icon svg { stroke: #1a1a1a; }

                .ls-btn-text { text-align: left; }

                .ls-btn-label {
                    font-size: 0.95rem;
                    font-weight: 500;
                    display: block;
                    line-height: 1.2;
                }

                .ls-btn-desc {
                    font-size: 0.775rem;
                    font-weight: 300;
                    opacity: 0.7;
                    display: block;
                    margin-top: 2px;
                }

                .ls-footer {
                    margin-top: 1.75rem;
                    text-align: center;
                    font-size: 0.8rem;
                    color: #aaa;
                }

                .ls-footer a {
                    color: #1a1a1a;
                    font-weight: 500;
                    text-decoration: none;
                }

                .ls-footer a:hover { text-decoration: underline; }

                @media (max-width: 480px) {
                    .ls-card { padding: 2rem 1.5rem; border-radius: 16px; }
                    .ls-heading { font-size: 1.4rem; }
                }
            `}</style>

            <div className="ls-root">
                <div className="ls-card">

                    {/* Brand */}
                    <div className="ls-brand">
                        <div className="ls-brand-icon">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#f7f5f2">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                                <line x1="3" y1="6" x2="21" y2="6" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
                                <path d="M16 10a4 4 0 0 1-8 0" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
                            </svg>
                        </div>
                        <span className="ls-brand-name">Shopique</span>
                    </div>

                    <div className="ls-divider" />

                    <h2 className="ls-heading">Welcome back</h2>
                    <p className="ls-sub">Sign in to your account to continue</p>

                    <div className="ls-options">

                        {/* Seller */}
                        <Link to="/seller/login" className="ls-btn ls-btn--seller">
                            <div className="ls-btn-icon">
                                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9h18M9 21V9M3 9l2-5h14l2 5M3 9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1"/>
                                </svg>
                            </div>
                            <div className="ls-btn-text">
                                <span className="ls-btn-label">Sign in as Seller</span>
                                <span className="ls-btn-desc">Manage your store &amp; orders</span>
                            </div>
                        </Link>

                        {/* Buyer */}
                        <Link to="/buyer/login" className="ls-btn ls-btn--buyer">
                            <div className="ls-btn-icon">
                                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                </svg>
                            </div>
                            <div className="ls-btn-text">
                                <span className="ls-btn-label">Sign in as Buyer</span>
                                <span className="ls-btn-desc">Browse &amp; track your orders</span>
                            </div>
                        </Link>

                    </div>

                    <p className="ls-footer">
                        Don't have an account?{" "}
                        <Link to="/register">Create one</Link>
                    </p>

                </div>
            </div>
        </>
    )
}

export default LoginSelection