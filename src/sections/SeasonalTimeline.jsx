import { useRef } from 'react'
import { motion } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from '../components/ui/SectionLabel'
import { seasons } from '../data/process'
import styles from './SeasonalTimeline.module.css'

export default function SeasonalTimeline() {
  const { ref, isVisible } = useScrollReveal()
  const trackRef = useRef(null)

  return (
    <section id="seasons" className={[styles.section, 'section'].join(' ')} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Lịch mùa vụ</SectionLabel>
          <div className={styles.headerRow}>
            <h2 className={styles.heading}>
              Một năm,
              <br />
              <em>nhiều mùa decor.</em>
            </h2>
            <p className={styles.subheading}>
              TIN PHÁT DECOR đồng hành cùng bạn qua từng mùa lễ hội — từ Tết
              đến Trung Thu, Noel và quanh năm.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scrollable timeline */}
      <div className={styles.timelineOuter} ref={trackRef}>
        <div className={styles.timelineTrack}>
          {seasons.map((season, i) => (
            <motion.div
              key={season.id}
              className={styles.seasonCard}
              style={{ '--s-accent': season.accentColor, '--s-bg': season.bgColor }}
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Card */}
              <div className={styles.card}>
                {/* Image area */}
                <div className={styles.cardImage}>
                  {season.image ? (
                    <img src={season.image} alt={season.name} className={styles.realImg} />
                  ) : (
                    <div className={styles.imgPlaceholder}>
                      <span className={styles.bigEmoji}>{season.emoji}</span>
                    </div>
                  )}
                  {/* Period badge */}
                  <span className={styles.periodBadge}>{season.period}</span>
                </div>

                {/* Text */}
                <div className={styles.cardBody}>
                  <div className={styles.cardIndex}>{String(i + 1).padStart(2, '0')}</div>
                  <h3 className={styles.seasonName}>{season.name}</h3>
                  <p className={styles.seasonDesc}>{season.description}</p>
                </div>
              </div>

              {/* Connector line between cards */}
              {i < seasons.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <div className={styles.connectorLine} />
                  <div className={styles.connectorArrow}>→</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className={styles.mobileTimeline}>
        <div className="container">
          {seasons.map((season, i) => (
            <motion.div
              key={season.id}
              className={styles.mobileItem}
              style={{ '--s-accent': season.accentColor, '--s-bg': season.bgColor }}
              initial={{ opacity: 0, x: -24 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.mobileIndex}>{season.emoji}</div>
              <div className={styles.mobileContent}>
                <div className={styles.mobileMeta}>
                  <span className={styles.mobilePeriod}>{season.period}</span>
                </div>
                <h3 className={styles.mobileName}>{season.name}</h3>
                <p className={styles.mobileDesc}>{season.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
