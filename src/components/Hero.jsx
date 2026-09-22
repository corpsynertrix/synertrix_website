import React, { useState } from 'react'
import { navigate } from '../router'
import HeroVisual from './HeroVisual'
const A = `${import.meta.env.BASE_URL}assets/`;

function Hero(){return <section className="hero"><div className="hero-grid-bg"></div><div className="hero-glow hero-glow-one"></div><div className="hero-glow hero-glow-two"></div><div className="container hero-inner"><div className="hero-copy reveal"><div className="eyebrow"><span></span>AI-READY ENTERPRISE TRANSFORMATION</div><h1>Future-proof your <em>decisions.</em></h1><p>Build modern data platforms that turn fragmented information into trusted, AI-ready decisions.</p><div className="hero-actions"><a href="/services" className="button button-primary" onClick={e=>{e.preventDefault();navigate('/services')}}>Explore capabilities <span>↗</span></a><a href="/contact" className="button button-ghost" onClick={e=>{e.preventDefault();navigate('/contact')}}>Talk to us <span>→</span></a></div><div className="hero-proof"><span>Data Engineering</span><i></i><span>Analytics &amp; BI</span><i></i><span>Cloud Modernization</span></div></div><HeroVisual/></div></section>}

export default Hero
