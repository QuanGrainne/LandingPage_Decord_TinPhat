import { motion } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from '../components/ui/SectionLabel'
import { categories } from '../data/categories'
import styles from './ProductCategories.module.css'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function CategoryCard({ category }) {
  const handleClick = (e) => {
    e.preventDefault()
    const section = document.querySelector('#showcase')
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 72,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.article
      className={[styles.card, styles[`card--${category.size}`]].filter(Boolean).join(' ')}
      variants={cardVariants}
      style={{ '--cat-accent': category.accentColor, '--cat-bg': category.bgColor }}
    >
      <a href="#showcase" className={styles.cardLink} onClick={handleClick} aria-label={`Xem sản phẩm ${category.name}`}>
        {/* Image area */}
        <div className={styles.cardImage}>
          {category.image ? (
            <img src={category.image} alt={category.name} className={styles.realImage} />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderEmoji}>{category.emoji}</span>
            </div>
          )}
          {/* Overlay on hover */}
          <div className={styles.overlay} />
        </div>

        {/* Content */}
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <span className={styles.cardEmoji}>{category.emoji}</span>
            <h3 className={styles.cardTitle}>{category.name}</h3>
          </div>
          <p className={styles.cardDesc}>{category.shortDesc}</p>
          <span className={styles.cardCta}>
            Xem sản phẩm
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </a>
    </motion.article>
  )
}

export default function ProductCategories() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="products" className={[styles.section, 'section'].join(' ')} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Danh mục sản phẩm</SectionLabel>
          <h2 className={styles.heading}>
            Sản phẩm cho
            <em> từng mùa.</em>
          </h2>
          <p className={styles.subheading}>
            Từ trang trí theo mùa đến decor quanh năm — TIN PHÁT DECOR cung
            cấp đa dạng sản phẩm cho mọi nhu cầu.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'show' : 'hidden'}
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
