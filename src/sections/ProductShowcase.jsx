import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from '../components/ui/SectionLabel'
import { products, getProductsByCategory } from '../data/products'
import { categories } from '../data/categories'
import styles from './ProductShowcase.module.css'

const allFilter = { id: 'all', name: 'Tất cả', emoji: '◈' }
const filters = [allFilter, ...categories.map((c) => ({ id: c.id, name: c.name, emoji: c.emoji }))]

// Masonry layout - assign different sizes for visual rhythm
const sizePattern = ['tall', 'wide', 'sq', 'sq', 'wide', 'tall', 'sq', 'sq', 'tall', 'sq']

function ProductCard({ product, index, category }) {
  const cat = categories.find((c) => c.id === product.category)
  const size = sizePattern[index % sizePattern.length]

  return (
    <motion.article
      className={[styles.productCard, styles[`card--${size}`]].join(' ')}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ '--cat-color': cat?.accentColor || 'var(--color-accent)', '--cat-bg': cat?.bgColor || '#F5E6DC' }}
    >
      <div className={styles.cardImageWrap}>
        {product.image ? (
          <img src={product.image} alt={product.name} className={styles.productImg} />
        ) : (
          <div className={styles.productPlaceholder}>
            <span className={styles.productEmoji}>{cat?.emoji || '📦'}</span>
          </div>
        )}
        {/* Hover overlay */}
        <div className={styles.hoverOverlay}>
          <div className={styles.hoverContent}>
            <span className={styles.hoverCategory}>{cat?.name}</span>
            <h3 className={styles.hoverName}>{product.name}</h3>
            <p className={styles.hoverDesc}>{product.description}</p>
          </div>
        </div>
        {/* Category dot */}
        <span className={styles.catDot} style={{ background: cat?.accentColor }} aria-hidden="true" />
      </div>
      <div className={styles.cardFooter}>
        <h3 className={styles.productName}>{product.name}</h3>
        <span className={styles.productCat}>{cat?.name}</span>
      </div>
    </motion.article>
  )
}

export default function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { ref, isVisible } = useScrollReveal()

  const displayed = getProductsByCategory(activeFilter)

  return (
    <section id="showcase" className={[styles.section, 'section'].join(' ')} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Showcase</SectionLabel>
          <h2 className={styles.heading}>
            Khám phá <em>sản phẩm.</em>
          </h2>
          <p className={styles.subheading}>
            Dưới đây là một số sản phẩm tiêu biểu của TIN PHÁT DECOR. Chúng tôi còn rất nhiều sản phẩm và mẫu mã đa dạng khác theo từng mùa vụ — Quý khách muốn biết thêm thông tin hoặc đặt mẫu theo yêu cầu, hãy liên hệ với chúng tôi để được tư vấn và nhận báo giá tốt nhất!
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          role="tablist"
          aria-label="Lọc sản phẩm theo danh mục"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              className={[styles.filterBtn, activeFilter === f.id ? styles.filterActive : ''].join(' ')}
              onClick={() => setActiveFilter(f.id)}
              role="tab"
              aria-selected={activeFilter === f.id}
              aria-label={`Lọc: ${f.name}`}
            >
              <span className={styles.filterEmoji}>{f.emoji}</span>
              <span>{f.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div className={styles.grid} layout>
            {displayed.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note & More Products Callout */}
        <motion.div
          className={styles.moreBanner}
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.moreBannerInfo}>
            <h4 className={styles.moreBannerTitle}>
              ✨ Và còn rất nhiều sản phẩm trang trí phong phú khác!
            </h4>
            <p className={styles.moreBannerText}>
              Do danh mục hàng hóa lớn và liên tục cập nhật theo từng mùa lễ hội, website chỉ giới thiệu một số mẫu tiêu biểu. Hãy liên hệ với TIN PHÁT DECOR để nhận danh sách đầy đủ và tư vấn chi tiết cho đại lý & cửa hàng.
            </p>
          </div>
          <a href="#contact" className={styles.moreBannerBtn}>
            Liên hệ nhận mẫu & báo giá →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
