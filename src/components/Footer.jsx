import React from 'react'
import { navigate } from '../router'
const A = `${import.meta.env.BASE_URL}assets/`;
const nav=[['About','/about'],['Services','/services'],['Process','/process'],['Industries','/industries'],['Platforms','/platforms']]

function Footer(){return <footer className="site-footer"><div className="container footer-main"><div><a href="/" className="footer-wordmark" onClick={e=>{e.preventDefault();navigate('/')}}>Synertrix</a><p>Building AI-Ready Data Solutions.<br/>Unlock the power of Cloud, Data, and AI—working together</p></div><div className="footer-links"><b>EXPLORE</b>{nav.slice(0,3).map(([x,p])=><a href={p} key={p} onClick={e=>{e.preventDefault();navigate(p)}}>{x}</a>)}</div><div className="footer-links"><b>FOCUS</b>{nav.slice(3).map(([x,p])=><a href={p} key={p} onClick={e=>{e.preventDefault();navigate(p)}}>{x}</a>)}<a href="/contact" onClick={e=>{e.preventDefault();navigate('/contact')}}>Contact</a></div><div className="footer-mark"><img src={A+'Logos/LOGOS_MAIN-06.png'} alt="Synertrix"/></div></div><div className="container footer-bottom"><span>© 2025 Synertrix. All rights reserved.</span><span>Empower. Transform. Trust.</span></div></footer>}

export default Footer
