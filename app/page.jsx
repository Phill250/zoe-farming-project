"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useMotionValue, animate } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import Image from 'next/image';

import styles from './layout.module.css';


function StatCounter({ to, suffix = '', label }) {
  const nodeRef = useRef(null);
  const count = useMotionValue(0);

  return (
    <motion.div
      className={styles.statItem}
      initial={{ opacity: 0, y: 20 }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        }
      }}
      onViewportEnter={() => {
        animate(count, to, {
          duration: 1.6,
          ease: 'easeOut',
          onUpdate: (value) => {
            if (nodeRef.current) {
              nodeRef.current.textContent = Math.round(value) + suffix;
            }
          }
        });
      }}
    >
      <span className={styles.statNumber} ref={nodeRef}>0{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </motion.div>
  );
}


function AgriIcon({ type, style }) {
  const common = { fill: 'none', stroke: 'white', strokeWidth: 3.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

  const icons = {
    coffeeBean: (
      <svg viewBox="0 0 64 64" width="72" height="72">
        <ellipse cx="32" cy="32" rx="20" ry="27" {...common} transform="rotate(20 32 32)" />
        <path d="M32 7 C 26 20, 26 44, 32 57" {...common} transform="rotate(20 32 32)" />
      </svg>
    ),
    avocado: (
      <svg viewBox="0 0 64 64" width="72" height="72">
        <path d="M32 6c12 6 18 20 18 32a18 18 0 0 1-36 0c0-12 6-26 18-32z" {...common} />
        <circle cx="32" cy="42" r="7" {...common} />
      </svg>
    ),
    maize: (
      <svg viewBox="0 0 64 64" width="72" height="72">
        <path d="M32 6c8 0 14 14 14 30s-6 22-14 22-14-6-14-22S24 6 32 6z" {...common} />
        <path d="M22 18h20M20 26h24M19 34h26M20 42h24M22 50h20" {...common} />
      </svg>
    ),
    tomato: (
      <svg viewBox="0 0 64 64" width="72" height="72">
        <circle cx="32" cy="36" r="22" {...common} />
        <path d="M32 14c-3-4-9-5-13-2 4 4 8 4 13 2zM32 14c3-4 9-5 13-2-4 4-8 4-13 2z" {...common} />
      </svg>
    ),
    cow: (
      <svg viewBox="0 0 64 64" width="78" height="78">
        <ellipse cx="32" cy="34" rx="20" ry="14" {...common} />
        <path d="M16 26c-3-4-3-8 0-10M48 26c3-4 3-8 0-10" {...common} />
        <circle cx="24" cy="32" r="2.5" fill="white" stroke="none" />
        <circle cx="40" cy="32" r="2.5" fill="white" stroke="none" />
        <path d="M26 42c2 3 10 3 12 0" {...common} />
      </svg>
    ),
  };

  return (
    <div className={styles.agriIcon} style={{ position: 'absolute', opacity: 0.8, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.35))', ...style }}>
      {icons[type]}
    </div>
  );
}

export default function CompleteSinglePageWebsite() {

  const [activeTab, setActiveTab] = useState('home');


  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(85);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setFormStatus('error');
    }
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const farmsRef = useRef(null);
  const livestockRef = useRef(null);
  const impactRef = useRef(null);
  const partnersRef = useRef(null);
  const contactRef = useRef(null);
  const productsRef = useRef(null);


  const { scrollYProgress } = useScroll();


  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

 
  const sectionHeaderContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  const gridStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

 

  const scrollToSection = (elementRef, tabName) => {
    setActiveTab(tabName);
    setIsMenuOpen(false);
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - navHeight,
        behavior: 'smooth',
      });
    }
  };

  const products = [
    { name: 'Arabica Coffee', category: 'Export Crops', image: '/products/coffee.jpeg' },
    { name: 'Hass Avocado', category: 'Fruits', image: '/products/avocado.jpg' },
    { name: 'Tomatoes', category: 'Vegetables', image: '/products/tomatoes.jpeg' },
    { name: 'Cucumbers', category: 'Vegetables', image: '/products/cucumbers.jpeg' },
    { name: 'French Beans', category: 'Vegetables', image: '/products/french-beans.jpeg' },
    { name: 'Mushrooms', category: 'Vegetables', image: '/products/mushrooms.jpeg' },
    { name: 'Hybrid Maize', category: 'Grains', image: '/products/hybrid-maize.jpeg' },
    { name: 'Hybrid Beans', category: 'Grains', image: '/products/beans.jpeg' },
    { name: 'Irish Potatoes', category: 'Vegetables', image: '/products/irish.jpeg' },
    { name: 'Dairy Products', category: 'Livestock', image: '/products/diary.jpeg' },
    { name: 'Poultry Products', category: 'Livestock', image: '/products/poultry.jpeg' },
  ];

  const partners = [
    { name: 'Inyange Industries', logo: '/partners/inyange.png' },
    { name: 'Afri-Farmers Market', logo: '/partners/afri-farmers.png' },
    { name: 'Western Seed Company Rwanda', logo: '/partners/western-seed-company.png' },
    { name: 'NAEB', logo: '/partners/naeb.png' },
    { name: 'Proxifresh', logo: '/partners/proxifresh.jpg' },
    { name: 'Icyizere fruits', logo: '/partners/icyizere.jpg' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/250788395089', '_blank');
  };

  return (
    <div className={styles.wrapper}>

    
      <motion.div
        className={styles.scrollProgress}
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

     
      <motion.button
        onClick={handleWhatsApp}
        className={styles.whatsappFloat}
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <FaWhatsapp size={35} color="white" />
      </motion.button>

      {/* Navigation */}
      <nav className={styles.nav} ref={navRef}>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image src="/logo.png" alt="Logo" width={120} height={48} className={styles.logo} priority />
        </motion.div>

       
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarOpenTop : ''}`} />
          <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarOpenMid : ''}`} />
          <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarOpenBottom : ''}`} />
        </button>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
          <li onClick={() => scrollToSection(homeRef, 'home')} className={`${styles.navLink} ${activeTab === 'home' ? styles.activeLink : ''}`}>Home</li>
          <li onClick={() => scrollToSection(aboutRef, 'about')} className={`${styles.navLink} ${activeTab === 'about' ? styles.activeLink : ''}`}>About us</li>
          <li onClick={() => scrollToSection(productsRef, 'products')} className={`${styles.navLink} ${activeTab === 'products' ? styles.activeLink : ''}`}>Products</li>
          <li onClick={() => scrollToSection(farmsRef, 'farms')} className={`${styles.navLink} ${activeTab === 'farms' ? styles.activeLink : ''}`}>Farms</li>
          <li onClick={() => scrollToSection(livestockRef, 'livestock')} className={`${styles.navLink} ${activeTab === 'livestock' ? styles.activeLink : ''}`}>Livestock</li>
          <li onClick={() => scrollToSection(impactRef, 'impact')} className={`${styles.navLink} ${activeTab === 'impact' ? styles.activeLink : ''}`}>Impact</li>
          <li onClick={() => scrollToSection(partnersRef, 'partners')} className={`${styles.navLink} ${activeTab === 'partners' ? styles.activeLink : ''}`}>Partners</li>
          <li onClick={() => scrollToSection(contactRef, 'contact')} className={`${styles.navLink} ${activeTab === 'contact' ? styles.activeLink : ''}`}>Contact</li>
        </ul>
      </nav>

    
      <motion.div
        id="home"
        ref={homeRef}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className={styles.heroSection}
        style={{ '--nav-height': `${navHeight}px` }}
      >
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster="/cover2.jpg"
        >
          <source src="/farmer.mp4" type="video/mp4" />
        </video>

        <div className={styles.heroOverlay} />

       
        <AgriIcon type="coffeeBean" style={{ top: '18%', left: '8%', zIndex: 1 }} />
        <AgriIcon type="avocado" style={{ top: '65%', left: '12%', zIndex: 1 }} />
        <AgriIcon type="maize" style={{ top: '22%', right: '10%', zIndex: 1 }} />
        <AgriIcon type="tomato" style={{ top: '68%', right: '14%', zIndex: 1 }} />
        <AgriIcon type="cow" style={{ bottom: '14%', left: '6%', zIndex: 1 }} />

      
        <span className={`${styles.imigongoBit} ${styles.imigongoBitLg}`} />
        <span className={`${styles.imigongoBit} ${styles.imigongoBitSm}`} />

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.h1 className={styles.heroTitle}>
            {"Growing today, sustaining tomorrow.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                style={{ display: 'inline-block', marginRight: '0.28em' }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.button
            onClick={() => scrollToSection(aboutRef, 'about')}
            className={styles.heroButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            Learn More About Us &rarr;
          </motion.button>
        </motion.div>
        
      </motion.div>
      <div className={styles.imigongoStrip} />

    
      <motion.div
        id="about"
        ref={aboutRef}
        variants={sectionHeaderContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.diagonalSection} ${styles.diagonal1}`}
        style={{ padding: '100px 10px 140px', backgroundColor: '#eaf6ec' }}
      >
        <div className={styles.mainContainer}>
          <motion.span className={styles.sectionTag} variants={fadeInUp}>
            About Zoe Farming Ltd
          </motion.span>

          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
            Who We Are
          </motion.h2>

          <motion.p className={styles.sectionDescription} variants={fadeInUp}>
            Zoe Farming Ltd is a leading agricultural business dedicated to sustainable farming and premium livestock production. We merge modern technology with eco-friendly methods to deliver raw nutritional quality.
          </motion.p>
          

          <motion.div
            className={styles.pillarsGrid}
            variants={gridStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { title: 'Our Vision', text: 'To become a leading agricultural model benchmarked on sustainability.' },
              { title: 'Our Mission', text: 'Cultivating premium agricultural ecosystems and empowering farmers.' },
              { title: 'Our Values', text: 'Integrity, eco-innovation, quality consistency, and transparency.' }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                className={styles.pillarCard}
                variants={scaleUp}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      
     
      <motion.div
        id="products"
        ref={productsRef}
        variants={sectionHeaderContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.diagonalSection} ${styles.diagonal2}`}
        style={{ padding: '120px 20px 140px', backgroundColor: '#a9d6ab' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        
          <motion.span className={styles.sectionTag} variants={fadeInUp}>
            Our Products
          </motion.span>

          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
            Quality Agricultural Products
          </motion.h2>

          <motion.p className={styles.sectionDescription} variants={fadeInUp}>
            From fresh vegetables and fruit to export-grade Arabica coffee, every product leaving our farms is grown, harvested, and handled to meet both local demand and international quality standards — supporting our commitment to consistent, traceable, and sustainably farmed produce.
          </motion.p>
        </div>

        <motion.div
          className={styles.productsGrid}
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className={styles.productCard}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.productImage}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 220px"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/cover.jpg';
                  }}
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <span className={styles.productCategory}>{product.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    
      
      <motion.div
        id="farms"
        ref={farmsRef}
        variants={sectionHeaderContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.diagonalSection} ${styles.diagonal3}`}
        style={{ padding: '120px 20px 140px', backgroundColor: '#eaf6ec' }}
        
      >
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        
          <motion.span className={styles.sectionTag} variants={fadeInUp}>
            Our Farms
          </motion.span>

          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
            Our Farms & Crops
          </motion.h2>

          <motion.p className={styles.sectionDescription} variants={fadeInUp}>
            Take a look inside our primary agricultural grounds
          </motion.p>
        </div>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.imageWrapper}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/cover.jpg"
              alt="Livestock Operations"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.sectionImage}
              loading="lazy"
              onError={(e) => { e.target.src = '/cover2.jpg'; }}
            />
          </motion.div>

          <motion.div
            className={styles.contentCard}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
          >
            <h3 className={styles.cardTitle}>Organic Crop Farming Initiative</h3>
            <p className={styles.cardText}>
              We cultivate organic vegetables, fruits, and Arabica coffee across 20+ hectares of land in the Eastern Province. Our crops are 100% pesticide-free and grown using sustainable irrigation methods, with each plot rotated seasonally to protect long-term soil health. From seedling to harvest, our agronomy team monitors every stage to keep yields consistent and quality export-ready.
            </p>
          </motion.div>
        </div>
      </motion.div>

     
      
      <motion.div
        id="livestock"
        ref={livestockRef}
        variants={sectionHeaderContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.diagonalSection} ${styles.diagonal4}`}
        style={{ padding: '120px 20px 140px', backgroundColor: '#a9d6ab' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        
          <motion.span className={styles.sectionTag} variants={fadeInUp}>
            Livestock
          </motion.span>

          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
         
            Livestock Operations
          </motion.h2>

          <motion.p className={styles.sectionDescription} variants={fadeInUp}>
            Optimal veterinarian practices and localized production
          </motion.p>
        </div>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.contentCard}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
          >
            <h3 className={styles.cardTitle}>Ecosystem Management</h3>
            <p className={styles.cardText}>
              We support localized ecosystems with optimal veterinarian practices for cows, goats, and poultry production. Our structural training workflows empower over 100 regional family smallholders directly.
            </p>
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/livestock.jpg"
              alt="Livestock Operations"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.sectionImage}
              loading="lazy"
              onError={(e) => { e.target.src = '/cover3.jpg'; }}
            />
          </motion.div>
        </div>
      </motion.div>

      
      <motion.div
        id="impact"
        ref={impactRef}
        variants={sectionHeaderContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.diagonalSection} ${styles.diagonal5}`}
        style={{ padding: '120px 20px 140px', backgroundColor: '#eaf6ec' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <motion.span className={styles.sectionTag} variants={fadeInUp}>
            Impact
          </motion.span>

          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
            Our Community Impact
          </motion.h2>

          <motion.p className={styles.sectionDescription} variants={fadeInUp}>
            Driving concrete regional economic growth
          </motion.p>
        </div>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.imageWrapper}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/community.jpg"
              alt="Community Impact"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.sectionImage}
              loading="lazy"
              onError={(e) => { e.target.src = '/cover2.jpg'; }}
            />
          </motion.div>

          <motion.div
            className={styles.contentCard}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
          >
            <h3 className={styles.cardTitle}>Sustainable Methods</h3>
            <p className={styles.cardText}>
              Through eco-friendly modern agro-processing methodologies, greenhouse engineering setups, and women/youth business accelerator programs, we drive concrete economic growth.
            </p>
          </motion.div>
        </div>

        <div className={styles.statsGrid}>
          <StatCounter to={20} suffix="+" label="Hectares Under Cultivation" />
          <StatCounter to={100} suffix="+" label="Smallholder Families Empowered" />
          <StatCounter to={6} suffix="" label="Partner Distributors" />
          <StatCounter to={10} suffix="+" label="Product Lines" />
        </div>
      </motion.div>

      
      <motion.div
        id="partners"
        ref={partnersRef}
        variants={sectionHeaderContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.diagonalSection} ${styles.diagonal6}`}
        style={{ padding: '120px 20px 140px', backgroundColor: '#a9d6ab' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <motion.span className={styles.sectionTag} variants={fadeInUp}>
            Partners
          </motion.span>

          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
            Our Customers & Partners
          </motion.h2>

          <motion.p className={styles.sectionDescription} variants={fadeInUp}>
            We work hand-in-hand with processors, retailers, and certification bodies across Rwanda to move produce efficiently from field to shelf. These partnerships help us maintain consistent supply, meet national quality standards, and reach both local markets and export buyers reliably.
          </motion.p>
        </div>

        <motion.div
          className={styles.partnersGrid}
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className={styles.partnerLogo}
              variants={scaleUp}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className={styles.partnerLogoBox}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="160px"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                  onError={(e) => { e.target.src = '/logo.png'; }}
                />
              </div>
              <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.9rem', color: '#333' }}>
                {partner.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      
      <motion.div
        id="contact"
        ref={contactRef}
        variants={sectionHeaderContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.diagonalSection} ${styles.diagonal7}`}
        style={{ padding: '120px 20px 80px', backgroundColor: '#eaf6ec' }}
      >
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <motion.h2 className={styles.contactTitle} variants={fadeInLeft}>
              Get in Touch
            </motion.h2>

            <motion.p className={styles.contactText} variants={fadeInLeft}>
              Have questions about our agricultural products or programs? Reach out to us directly.
            </motion.p>

            <motion.div className={styles.contactDetail} variants={fadeInLeft} whileHover={{ x: 5 }}>
              <MdEmail size={24} color="#4CAF50" />
              <span>info@zoefarming.com</span>
            </motion.div>

            <motion.div className={styles.contactDetail} variants={fadeInLeft} whileHover={{ x: 5 }}>
              <MdPhone size={24} color="#4CAF50" />
              <span>+250 788 889 999 / +250 788 309 491</span>
            </motion.div>

            <motion.div className={styles.contactDetail} variants={fadeInLeft} whileHover={{ x: 5 }}>
              <MdLocationOn size={24} color="#4CAF50" />
              <span>Eastern Province, Rwanda</span>
            </motion.div>

            <motion.div className={styles.socialIcons} variants={fadeInUp}>
              <motion.a href="https://wa.me/250788395089" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaWhatsapp size={30} color="#25D366" />
              </motion.a>
              <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaLinkedin size={30} color="#0077B5" />
              </motion.a>
              <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaFacebook size={30} color="#1877F2" />
              </motion.a>
              <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaInstagram size={30} color="#300519" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div className={styles.contactForm} variants={fadeInRight}>
            <h2 className={styles.contactTitle}>Send a Message</h2>
            <form className={styles.form} onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className={styles.formInput}
                value={formData.name}
                onChange={handleFormChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className={styles.formInput}
                value={formData.email}
                onChange={handleFormChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className={styles.formTextarea}
                value={formData.message}
                onChange={handleFormChange}
              />
              <motion.button
                type="submit"
                className={styles.formButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {formStatus === 'success' && (
                <p className={styles.formSuccess}>Thanks — your message has been sent. We'll get back to you soon.</p>
              )}
              {formStatus === 'error' && (
                <p className={styles.formError}>Something went wrong sending your message. Please try again or reach us directly on WhatsApp.</p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSocial}>
            <motion.a href="https://wa.me/250788395089" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaWhatsapp size={20} color="white" />
            </motion.a>
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaLinkedin size={20} color="white" />
            </motion.a>
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaFacebook size={20} color="white" />
            </motion.a>
          </div>
          <p className={styles.footerText}>
            Contact us: info@zoefarming.com | +250 788 889 999 / +250 788 309 491
          </p>
          <p className={styles.footerCopy}>&copy; 2024 Zoe Farming Ltd. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}