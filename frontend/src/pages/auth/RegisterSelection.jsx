import { Link } from "react-router-dom"

const RegisterSelection = () => {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                .rs-root {
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

                /* Subtle background pattern */
                .rs-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        radial-gradient(circle at 20% 80%, rgba(212, 175, 130, 0.12) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(180, 150, 200, 0.08) 0%, transparent 50%);
                    pointer-events: none;
                }

                .rs-card {
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

                .rs-brand {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    justify-content: center;
                    margin-bottom: 2rem;
                }

                .rs-brand-icon {
                    width: 32px;
                    height: 32px;
                    background: #1a1a1a;
                    border-radius: 8px;
                    display: grid;
                    place-items: center;
                }

                .rs-brand-icon svg {
                    width: 18px;
                    height: 18px;
                    fill: #f7f5f2;
                }

                .rs-brand-name {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.25rem;
                    color: #1a1a1a;
                    letter-spacing: -0.01em;
                }

                .rs-divider {
                    height: 1px;
                    background: #ebebeb;
                    margin-bottom: 2rem;
                }

                .rs-heading {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.6rem;
                    color: #1a1a1a;
                    text-align: center;
                    margin-bottom: 0.4rem;
                    letter-spacing: -0.02em;
                }

                .rs-sub {
                    text-align: center;
                    font-size: 0.875rem;
                    color: #888;
                    font-weight: 300;
                    margin-bottom: 2rem;
                }

                .rs-options {
                    display: flex;
                    flex-direction: column;
                    gap: 0.875rem;
                }

                /* ── Shared card-style button ── */
                .rs-btn {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 1.25rem;
                    border-radius: 14px;
                    text-decoration: none;
                    border: 1.5px solid transparent;
                    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
                    position: relative;
                    overflow: hidden;
                }

                .rs-btn::after {
                    content: '→';
                    position: absolute;
                    right: 1.25rem;
                    font-size: 1rem;
                    opacity: 0;
                    transform: translateX(-6px);
                    transition: opacity 0.18s ease, transform 0.18s ease;
                }

                .rs-btn:hover::after {
                    opacity: 1;
                    transform: translateX(0);
                }

                .rs-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.10);
                }

                .rs-btn:active {
                    transform: translateY(0);
                }

                /* Seller — dark */
                .rs-btn--seller {
                    background: #1a1a1a;
                    border-color: #1a1a1a;
                    color: #fff;
                }

                .rs-btn--seller:hover {
                    background: #2c2c2c;
                    border-color: #2c2c2c;
                }

                /* Buyer — outlined */
                .rs-btn--buyer {
                    background: #fff;
                    border-color: #ddd;
                    color: #1a1a1a;
                }

                .rs-btn--buyer:hover {
                    border-color: #1a1a1a;
                }

                .rs-btn-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: grid;
                    place-items: center;
                    flex-shrink: 0;
                }

                .rs-btn--seller .rs-btn-icon {
                    background: rgba(255,255,255,0.1);
                }

                .rs-btn--buyer .rs-btn-icon {
                    background: #f7f5f2;
                }

                .rs-btn-icon svg {
                    width: 20px;
                    height: 20px;
                }

                .rs-btn--seller .rs-btn-icon svg { stroke: #fff; }
                .rs-btn--buyer  .rs-btn-icon svg { stroke: #1a1a1a; }

                .rs-btn-text { text-align: left; }

                .rs-btn-label {
                    font-size: 0.95rem;
                    font-weight: 500;
                    display: block;
                    line-height: 1.2;
                }

                .rs-btn-desc {
                    font-size: 0.775rem;
                    font-weight: 300;
                    opacity: 0.7;
                    display: block;
                    margin-top: 2px;
                }

                .rs-footer {
                    margin-top: 1.75rem;
                    text-align: center;
                    font-size: 0.8rem;
                    color: #aaa;
                }

                .rs-footer a {
                    color: #1a1a1a;
                    font-weight: 500;
                    text-decoration: none;
                }

                .rs-footer a:hover { text-decoration: underline; }

                /* Responsive */
                @media (max-width: 480px) {
                    .rs-card { padding: 2rem 1.5rem; border-radius: 16px; }
                    .rs-heading { font-size: 1.4rem; }
                }
            `}</style>

            <div className="rs-root">
                <div className="rs-card">

                    {/* Brand */}
                    <div className="rs-brand">
                        <div className="rs-brand-icon">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#f7f5f2">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                                <line x1="3" y1="6" x2="21" y2="6" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
                                <path d="M16 10a4 4 0 0 1-8 0" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
                            </svg>
                        </div>
                        <span className="rs-brand-name">Shopique</span>
                    </div>

                    <div className="rs-divider" />

                    <h2 className="rs-heading">Join as…</h2>
                    <p className="rs-sub">Choose how you'd like to use the platform</p>

                    <div className="rs-options">

                        {/* Seller */}
                        <Link to="/seller/register" className="rs-btn rs-btn--seller">
                            <div className="rs-btn-icon">
                                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9h18M9 21V9M3 9l2-5h14l2 5M3 9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1"/>
                                </svg>
                            </div>
                            <div className="rs-btn-text">
                                <span className="rs-btn-label">Continue as Seller</span>
                                <span className="rs-btn-desc">List products &amp; manage your store</span>
                            </div>
                        </Link>

                        {/* Buyer */}
                        <Link to="/buyer/register" className="rs-btn rs-btn--buyer">
                            <div className="rs-btn-icon">
                                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                </svg>
                            </div>
                            <div className="rs-btn-text">
                                <span className="rs-btn-label">Continue as Buyer</span>
                                <span className="rs-btn-desc">Shop from thousands of products</span>
                            </div>
                        </Link>

                    </div>

                    <p className="rs-footer">
                        Already have an account?{" "}
                        <a href="/login">Sign in</a>
                    </p>

                </div>
            </div>
        </>
    )
}

export default RegisterSelection