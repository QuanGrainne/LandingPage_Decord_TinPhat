import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '../components/ui/Button'
import { company } from '../data/company'
import styles from './Hero.module.css'


const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function Hero() {
  const handleScrollDown = () => {
    const about = document.querySelector('#about')
    if (about) {
      const navHeight = 72
      window.scrollTo({
        top: about.getBoundingClientRect().top + window.scrollY - navHeight,
        behavior: 'smooth',
      })
    }
  }

  const handleProductsClick = (e) => {
    e.preventDefault()
    const section = document.querySelector('#products')
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 72,
        behavior: 'smooth',
      })
    }
  }

  const handleContactClick = (e) => {
    e.preventDefault()
    const section = document.querySelector('#contact')
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 72,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="hero" className={styles.hero} aria-label="Trang chủ">
      {/* Background decorative elements */}
      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
        <div className={styles.bgGrid} />
      </div>

      <div className={[styles.inner, 'container'].join(' ')}>
        {/* Left content */}
        <div className={styles.content}>
          {/* Eyebrow label */}
          <motion.div
            className={styles.eyebrow}
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
          >
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Sản xuất & Phân phối</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className={styles.headline}
            initial="hidden"
            animate="show"
            custom={0.25}
            variants={fadeUp}
          >
            Decor
            <br />
            <em>cho mọi</em>
            <br />
            mùa.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className={styles.subheadline}
            initial="hidden"
            animate="show"
            custom={0.45}
            variants={fadeUp}
          >
            TIN PHÁT DECOR chuyên sản xuất và phân phối các sản phẩm trang
            trí theo mùa và quanh năm — phục vụ cửa hàng, đại lý và khách
            hàng nhập số lượng lớn.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className={styles.ctas}
            initial="hidden"
            animate="show"
            custom={0.6}
            variants={fadeUp}
          >
            <Button size="lg" onClick={handleProductsClick} href="#products">
              Khám phá sản phẩm
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={handleContactClick}
              href="#contact"
            >
              Liên hệ hợp tác
            </Button>
          </motion.div>

          {/* Scroll down */}
          <motion.button
            className={styles.scrollDown}
            onClick={handleScrollDown}
            aria-label="Cuộn xuống"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <ArrowDown size={16} />
            <span>Khám phá</span>
          </motion.button>
        </div>

        {/* Right visual — Product Collage */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          aria-hidden="true"
        >
          {/* Main large visual / image */}
          <div className={styles.mainImageWrapper}>
            <div className={styles.mainImage}>
              {company.images?.hero ? (
                <img src={company.images.hero} alt={company.name} className={styles.heroRealImg} />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <span className={styles.placeholderEmoji}>🎪</span>
                  <span className={styles.placeholderText}>Ảnh Banner Hero</span>
                  <span className={styles.placeholderHint}>Thêm ảnh tại: public/images/hero/</span>
                </div>
              )}
            </div>
            {/* Floating small images */}
            <div className={[styles.floatCard, styles.floatCard1].join(' ')}>
              <span>🎄</span>
              <span>Noel</span>
            </div>
            <div className={[styles.floatCard, styles.floatCard2].join(' ')}>
              <span>🏮</span>
              <span>Trung Thu</span>
            </div>
            <div className={[styles.floatCard, styles.floatCard3].join(' ')}>
              <span>🧧</span>
              <span>Tết</span>
            </div>
            <div className={[styles.floatCard, styles.floatCard4].join(' ')}>
              <span>🎉</span>
              <span>Sinh nhật</span>
            </div>
            <div className={[styles.floatCard, styles.floatCard5].join(' ')}>
              <span>💒</span>
              <span>Đám cưới</span>
            </div>
            <div className={[styles.floatCard, styles.floatCard6].join(' ')}>
              <span>🎀</span>
              <span>Decor mùa vụ</span>
            </div>
          </div>

          {/* Decorative text */}
          <div className={styles.decoText} aria-hidden="true">
            DECOR
          </div>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <motion.div
        className={styles.bottomStrip}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="container">
          <div className={styles.stripInner}>
            {['Noel', 'Trung Thu', 'Tết', 'Sinh nhật', 'Đồ chơi', 'Decor quanh năm'].map(
              (item, i) => (
                <span key={item} className={styles.stripItem}>
                  {item}
                  {i < 5 && <span className={styles.stripDot}>·</span>}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
