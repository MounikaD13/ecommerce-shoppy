import React, { useState, useContext } from "react"
import axios from "../../services/axiosInstance"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export default function BuyerLogin() {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await axios.post("/buyer/login", formData)
            console.log(res)
            if (res.data.accessToken) {
                login(res.data)
                alert("Login Successful")
                navigate("/")
            }
        } catch (err) {
            alert(err.response?.data?.message || "Login Failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                .bl-root {
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

                .bl-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        radial-gradient(circle at 20% 80%, rgba(212, 175, 130, 0.12) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(180, 150, 200, 0.08) 0%, transparent 50%);
                    pointer-events: none;
                }

                .bl-card {
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

                .bl-brand {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    justify-content: center;
                    margin-bottom: 2rem;
                }

                .bl-brand-icon {
                    width: 32px;
                    height: 32px;
                    background: #1a1a1a;
                    border-radius: 8px;
                    display: grid;
                    place-items: center;
                }

                .bl-brand-name {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.25rem;
                    color: #1a1a1a;
                    letter-spacing: -0.01em;
                }

                .bl-divider {
                    height: 1px;
                    background: #ebebeb;
                    margin-bottom: 2rem;
                }

                .bl-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    background: #f7f5f2;
                    border: 1px solid #e8e4df;
                    border-radius: 20px;
                    padding: 0.25rem 0.75rem;
                    font-size: 0.72rem;
                    font-weight: 500;
                    color: #888;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    margin-bottom: 0.75rem;
                }

                .bl-badge-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #1a1a1a;
                }

                .bl-heading {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.6rem;
                    color: #1a1a1a;
                    margin-bottom: 0.4rem;
                    letter-spacing: -0.02em;
                }

                .bl-sub {
                    font-size: 0.875rem;
                    color: #888;
                    font-weight: 300;
                    margin-bottom: 2rem;
                }

                .bl-field {
                    margin-bottom: 1rem;
                    position: relative;
                }

                .bl-label {
                    display: block;
                    font-size: 0.78rem;
                    font-weight: 500;
                    color: #555;
                    margin-bottom: 0.4rem;
                    letter-spacing: 0.01em;
                }

                .bl-input-wrap {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .bl-input-icon {
                    position: absolute;
                    left: 0.9rem;
                    display: grid;
                    place-items: center;
                    pointer-events: none;
                }

                .bl-input-icon svg {
                    width: 16px;
                    height: 16px;
                    stroke: #bbb;
                }

                .bl-input {
                    width: 100%;
                    padding: 0.75rem 1rem 0.75rem 2.5rem;
                    border: 1.5px solid #e8e4df;
                    border-radius: 11px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.9rem;
                    color: #1a1a1a;
                    background: #fdfcfb;
                    outline: none;
                    transition: border-color 0.18s ease, box-shadow 0.18s ease;
                }

                .bl-input::placeholder { color: #c0b8b0; }

                .bl-input:focus {
                    border-color: #1a1a1a;
                    background: #fff;
                    box-shadow: 0 0 0 3px rgba(26,26,26,0.06);
                }

                .bl-submit {
                    width: 100%;
                    padding: 0.85rem;
                    background: #1a1a1a;
                    color: #fff;
                    border: none;
                    border-radius: 11px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 500;
                    cursor: pointer;
                    margin-top: 0.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
                }

                .bl-submit:hover:not(:disabled) {
                    background: #2c2c2c;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 14px rgba(0,0,0,0.15);
                }

                .bl-submit:active:not(:disabled) {
                    transform: translateY(0);
                    box-shadow: none;
                }

                .bl-submit:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .bl-spinner {
                    width: 15px;
                    height: 15px;
                    border: 2px solid rgba(255,255,255,0.35);
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spin 0.7s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .bl-footer {
                    margin-top: 1.75rem;
                    text-align: center;
                    font-size: 0.8rem;
                    color: #aaa;
                }

                .bl-footer a {
                    color: #1a1a1a;
                    font-weight: 500;
                    text-decoration: none;
                }

                .bl-footer a:hover { text-decoration: underline; }

                @media (max-width: 480px) {
                    .bl-card { padding: 2rem 1.5rem; border-radius: 16px; }
                    .bl-heading { font-size: 1.4rem; }
                }
            `}</style>

            <div className="bl-root">
                <div className="bl-card">

                    {/* Brand */}
                    <div className="bl-brand">
                        <div className="bl-brand-icon">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#f7f5f2" width="18" height="18">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                                <line x1="3" y1="6" x2="21" y2="6" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
                                <path d="M16 10a4 4 0 0 1-8 0" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
                            </svg>
                        </div>
                        <span className="bl-brand-name">Shopique</span>
                    </div>

                    <div className="bl-divider" />

                    <div className="bl-badge">
                        <span className="bl-badge-dot" />
                        Buyer Account
                    </div>
                    <h2 className="bl-heading">Sign in</h2>
                    <p className="bl-sub">Welcome back — great deals are waiting</p>

                    <form onSubmit={handleLogin}>
                        <div className="bl-field">
                            <label className="bl-label">Email address</label>
                            <div className="bl-input-wrap">
                                <span className="bl-input-icon">
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    className="bl-input"
                                    placeholder="you@example.com"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="bl-field">
                            <label className="bl-label">Password</label>
                            <div className="bl-input-wrap">
                                <span className="bl-input-icon">
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2"/>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                    </svg>
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    className="bl-input"
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bl-submit"
                            disabled={loading}
                            onClick={handleLogin}
                        >
                            {loading
                                ? <><span className="bl-spinner" /> Signing in…</>
                                : "Sign in to your account"
                            }
                        </button>
                    </form>

                    <p className="bl-footer">
                        Don't have an account?{" "}
                        <a href="/register">Create one</a>
                    </p>

                </div>
            </div>
        </>
    )
}