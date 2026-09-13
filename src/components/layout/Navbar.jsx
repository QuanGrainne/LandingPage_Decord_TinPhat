import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Trang chủ', href: '#hero', sectionId: 'hero' },
  { label: 'Về chúng tôi', href: '#about', sectionId: 'about' },
  { label: 'Sản phẩm', href: '#products', sectionId: 'products' },
  { label: 'Mùa lễ hội', href: '#seasons', sectionId: 'seasons' },
  { label: 'Năng lực', href: '#capability', sectionId: 'capability' },
  { label: 'Liên hệ', href: '#contact', sectionId: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Scroll: sticky effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy: detect active section
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId)
    const navHeight = 80

    const observe = () => {
      const scrollY = window.scrollY + navHeight + 40

      // Find the last section whose top is above the current scroll position
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', observe, { passive: true })
    observe() // run once on mount
    return () => window.removeEventListener('scroll', observe)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollToSection = (href) => {
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 72
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <>
      <header
        className={[styles.navbar, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}
        id="navbar"
      >
        <div className={[styles.inner, 'container'].join(' ')}>
          {/* Logo */}
          <a
            href="#hero"
            className={styles.logo}
            onClick={(e) => handleLinkClick(e, '#hero')}
            aria-label="TIN PHÁT DECOR - Trang chủ"
          >
            <span className={styles.logoMark}>T</span>
            <span className={styles.logoText}>
              <span className={styles.logoName}>TIN PHÁT</span>
              <span className={styles.logoSub}>DECOR</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Menu chính">
            <ul className={styles.navList}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={[
                        styles.navLink,
                        isActive ? styles.navLinkActive : '',
                      ].filter(Boolean).join(' ')}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                      <span className={styles.navLinkUnderline} aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className={styles.desktopCta}>
            <Button
              href="#contact"
              size="sm"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Liên hệ ngay
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={[styles.mobileOverlay, mobileOpen ? styles.mobileOverlayOpen : ''].filter(Boolean).join(' ')}
        aria-hidden={!mobileOpen}
      >
        <nav className={styles.mobileNav} aria-label="Menu mobile">
          <ul className={styles.mobileNavList}>
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.sectionId
              return (
                <li
                  key={link.href}
                  className={styles.mobileNavItem}
                  style={{ '--delay': `${i * 0.06}s` }}
                >
                  <a
                    href={link.href}
                    className={[
                      styles.mobileNavLink,
                      isActive ? styles.mobileNavLinkActive : '',
                    ].filter(Boolean).join(' ')}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {isActive && <span className={styles.mobileActiveDot} aria-hidden="true" />}
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className={styles.mobileCta}>
            <Button
              href="#contact"
              size="lg"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Liên hệ ngay
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
