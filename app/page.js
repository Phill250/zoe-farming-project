"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import styles from './layout.module.css';
import Navbar from './Navbar'; 


export default function CompleteSinglePageWebsite() {
  
  const [activeTab, setActiveTab] = useState('home');
  const [farmIndex, setFarmIndex] = useState(0);

  

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const farmsRef = useRef(null);
  const livestockRef = useRef(null);
  const impactRef = useRef(null);
  const partnersRef = useRef(null);
  const contactRef = useRef(null);

  

  

  const scrollToSection = (elementRef, tabName) => {
    setActiveTab(tabName); 
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 85, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      
      
      <nav className={styles.nav}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <ul className={styles.navList}>
          <li onClick={() => scrollToSection(homeRef, 'home')} className={`${styles.navLink} ${activeTab === 'home' ? styles.activeLink : ''}`}>Home</li>
          <li onClick={() => scrollToSection(aboutRef, 'about')} className={`${styles.navLink} ${activeTab === 'about' ? styles.activeLink : ''}`}>About us </li>
          <li onClick={() => scrollToSection(farmsRef, 'farms')} className={`${styles.navLink} ${activeTab === 'farms' ? styles.activeLink : ''}`}>Farms</li>
          <li onClick={() => scrollToSection(livestockRef, 'livestock')} className={`${styles.navLink} ${activeTab === 'livestock' ? styles.activeLink : ''}`}>Livestock </li>
          <li onClick={() => scrollToSection(impactRef, 'impact')} className={`${styles.navLink} ${activeTab === 'impact' ? styles.activeLink : ''}`}>Impact</li>
          <li onClick={() => scrollToSection(partnersRef, 'partners')} className={`${styles.navLink} ${activeTab === 'partners' ? styles.activeLink : ''}`}>Our customers & partners </li>
          <li onClick={() => scrollToSection(contactRef, 'contact')} className={`${styles.navLink} ${activeTab === 'contact' ? styles.activeLink : ''}`}>Contact Us </li>
        </ul>
      </nav>

    
      <div 
        ref={homeRef}
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url('/cover2.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          width: '100%',
          height: 'calc(100vh - 85px)', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          
          padding: '0 20px',
          boxSizing: 'border-box'
        }}
      >
    
        <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1024px',
            margin: '0 auto',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
            padding: '64px 32px',
            textAlign: 'center',
            borderStyle: 'dotted',
            borderWidth: '2px',
            borderColor: 'white',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 25px 50px -12px rgba(116, 115, 115, 0.5)'
      }}>
        <h1 style={{ 
          margin: '0 auto', 
          maxWidth: '896px', 
          fontSize: '4.5rem', 
          fontWeight: '800', 
          color: 'white',
          lineHeight: '1.2' 
        }}>
          Cultivating Quality, Growing Opportunities.
        </h1>
        
        <button 
          onClick={() => scrollToSection(aboutRef, 'about')}
          style={{
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            marginTop: '40px', 
            padding: '14px 35px', 
            borderRadius: '50px', 
            fontSize: '1.1rem', 
            fontWeight: 'bold', 
            cursor: 'pointer', 
            transition: 'transform 0.2s ease, background-color 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Learn More About Us &rarr;
        </button>
        </div>
        </div>

      
      <div ref={aboutRef} style={{ padding: '100px 20px', backgroundColor: '#f2f2f2' }}>
        <div 
          className={styles.mainContainer} 
          style={{ 
            textAlign: 'center', 
            backgroundColor: '#0c350d', 
            color: 'white', 
            padding: '60px 40px', 
            borderRadius: '16px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}
        >
          <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 'bold', color: '#a5d6a7', display: 'block', marginBottom: '10px' }}>
            About Zoe Farming Ltd
          </span>
          <h2 style={{ color: '#ffffff', fontSize: '2.8rem', margin: '0 0 20px 0', fontWeight: '800' }}>
            Who We Are
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '850px', margin: '0 auto 40px auto', color: '#e8f5e9', fontWeight: '300' }}>
            Zoe Farming Ltd is a leading agricultural business dedicated to sustainable farming and premium livestock production. We merge modern technology with eco-friendly methods to deliver raw nutritional quality.
          </p>

          
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
             
              <h3 className={styles.pillarTitle}>Our Vision</h3>
              <p className={styles.pillarText}>To become a leading agricultural model benchmarked on sustainability.</p>
            </div>
            <div className={styles.pillarCard}>
              
              <h3 className={styles.pillarTitle}>Our Mission</h3>
              <p className={styles.pillarText}>Cultivating premium agricultural ecosystems and empowering farmers.</p>
            </div>
            <div className={styles.pillarCard}>
             
              <h3 className={styles.pillarTitle}>Our Values</h3>
              <p className={styles.pillarText}>Integrity, eco-innovation, quality consistency, and transparency.</p>
            </div>
          </div>
        </div>
      </div>

      
    
      <div ref={farmsRef} style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        
      
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#1b5e20', margin: 0 }}>Our Farms & Crops</h2>
          <p style={{ color: '#666', fontSize: '1.2rem', marginTop: '10px' }}>Take a look inside our primary agricultural grounds</p>
        </div>

        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '70px', 
          maxWidth: '1500px', 
          margin: '0 auto',
          alignItems: 'center',
          
        }}>
          
          
          <div style={{
            width: '100%',
            height: '420px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 15px 30px rgba(0,0,0,0.12)'
          }}>
             <img 
        src="/cover.jpg" 
        alt="Livestock Operations" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
          </div>

        
          <div style={{
            padding: '50px',
            backgroundColor: '#f9fbf9',
            borderRadius: '16px',
            borderLeft: '6px solid #4CAF50',
            borderRight: '6px solid #4CAF50',

            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
           
            
           <h3 style={{ fontSize: '2rem', color: '#1b5e20', margin: '0 0 15px 0', fontWeight: '700' }}>
           Organic Crop Farming Initiative
      </h3>
      <p style={{ color: '#444', lineHeight: '1.7', fontSize: '1.15rem', margin: 0 }}>
      We cultivate organic vegetables and fruits across 20+ hectares of land in the Eastern Province. Our crops are 100% pesticide-free and grown using sustainable irrigation methods.
      </p>
            
           
          </div>


        </div>

      </div>


      
      <div ref={livestockRef} style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
  

  <div style={{ textAlign: 'center', marginBottom: '50px' }}>
    <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#1b5e20', margin: 0 }}>Livestock Operations</h2>
    <p style={{ color: '#666', fontSize: '1.2rem', marginTop: '10px' }}>Optimal veterinarian practices and localized production</p>
  </div>

  
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    gap: '70px', 
    maxWidth: '1500px', 
    margin: '0 auto',
    alignItems: 'center'
  }}>
    
   
    <div style={{
      padding: '50px',
      backgroundColor: '#f9fbf9',
      borderRadius: '16px',
      borderLeft: '6px solid #4CAF50', 
      boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
      minHeight: '260px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h3 style={{ fontSize: '2rem', color: '#1b5e20', margin: '0 0 15px 0', fontWeight: '700' }}>
        Ecosystem Management
      </h3>
      <p style={{ color: '#444', lineHeight: '1.7', fontSize: '1.15rem', margin: 0 }}>
        We support localized ecosystems with optimal veterinarian practices for cows, goats, and poultry production. Our structural training workflows empower over 100 regional family smallholders directly.
      </p>
    </div>

   
    <div style={{
      width: '100%',
      height: '420px',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 15px 30px rgba(0,0,0,0.12)'
    }}>
      <img 
        src="/livestock.jpg" 
        alt="Livestock Operations" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>

  </div>
</div>


      
      <div ref={impactRef} style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
  
  {/* Section Heading */}
  <div style={{ textAlign: 'center', marginBottom: '50px' }}>
    <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#1b5e20', margin: 0 }}>Our Community Impact</h2>
    <p style={{ color: '#666', fontSize: '1.2rem', marginTop: '10px' }}>Driving concrete regional economic growth</p>
  </div>

  
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    gap: '70px', 
    maxWidth: '1500px', 
    margin: '0 auto',
    alignItems: 'center'
  }}>
    
   
    <div style={{
      width: '100%',
      height: '420px',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 15px 30px rgba(0,0,0,0.12)'
    }}>
      <img 
        src="/community.jpg" 
        alt="Community Impact" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>

    
    <div style={{
      padding: '50px',
      backgroundColor: '#f9fbf9',
      borderRadius: '16px',
      borderRight: '6px solid #4CAF50', 
      boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
      minHeight: '260px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h3 style={{ fontSize: '2rem', color: '#1b5e20', margin: '0 0 15px 0', fontWeight: '700' }}>
        Sustainable Methods
      </h3>
      <p style={{ color: '#444', lineHeight: '1.7', fontSize: '1.15rem', margin: 0 }}>
        Through eco-friendly modern agro-processing methodologies, greenhouse engineering setups, and women/youth business accelerator programs, we drive concrete economic growth.
      </p>
    </div>

  </div>
</div>


     
      <div ref={partnersRef} style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
  
  {/* Section Heading */}
  <div style={{ textAlign: 'center', marginBottom: '50px' }}>
    <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#1b5e20', margin: 0 }}>Our Customers & Partners</h2>
    <p style={{ color: '#666', fontSize: '1.2rem', marginTop: '10px' }}>Building stable food distribution pipelines</p>
  </div>

  
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    gap: '70px', 
    maxWidth: '1500px', 
    margin: '0 auto',
    alignItems: 'center'
  }}>
    

    <div style={{
      padding: '50px',
      backgroundColor: '#f9fbf9',
      borderRadius: '16px',
      borderLeft: '6px solid #4CAF50', /* Placed back on the left side */
      boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
      minHeight: '260px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h3 style={{ fontSize: '2rem', color: '#1b5e20', margin: '0 0 15px 0', fontWeight: '700' }}>
        Supply Infrastructure
      </h3>
      <p style={{ color: '#444', lineHeight: '1.7', fontSize: '1.15rem', margin: 0 }}>
        We collaborate with industry leaders, regional supply chains, and domestic retailers to build secure food networks across the Eastern Province.
      </p>
    </div>

   
    <div style={{
      width: '100%',
      height: '420px',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 15px 30px rgba(0,0,0,0.12)'
    }}>
      <img 
        src="/partners.jpg" 
        alt="Our Partners" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>

  </div>
</div>



      
      <div ref={contactRef} style={{ padding: '80px 20px', backgroundColor: '#f2f2f2' }}>
        <div 
          className={styles.mainContainer} 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '70px', 
            maxWidth: '1500px', 
            margin: '0 auto',
            borderRadius: '16px' 
          }}
        >
        
          <div>
            <h2 style={{ color: '#4CAF50', marginTop: 0, fontSize: '2.2rem' }}>Get in Touch</h2>
            <p style={{ lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
              Have questions about our agricultural products or programs? Reach out to us directly.
            </p>
            <p style={{ margin: '8px 0' }}><strong>📧 Email:</strong> info@zoefarming.com</p>
            <p style={{ margin: '8px 0' }}><strong>📞 Phone:</strong> +250 788 889 999 / +250 788 309 491</p>
            <p style={{ margin: '8px 0' }}><strong>📍 Location:</strong> Eastern Province, Rwanda</p>
          </div>

          
          <div>
            <h2 style={{ color: '#4CAF50', marginTop: 0, fontSize: '2.2rem' }}>Send a Message</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Full Name" required style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }} />
              <input type="email" placeholder="Email Address" required style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }} />
              <textarea placeholder="Your Message" rows="4" required style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px', fontFamily: 'sans-serif' }} />
              <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '14px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p style={{ margin: 0 }}>
          Contact us: zoefarming@gmail.com | +250 788 889 999 / +250 788 309 491
        </p>
      </footer>

    </div>
  );
}
