import { motion } from 'framer-motion'
import { Factory, Network, Boxes, PackageCheck, BarChart3 } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from '../components/ui/SectionLabel'
import { capabilities } from '../data/process'
import { company } from '../data/company'
import styles from './Capability.module.css'

const iconMap = {
  Factory,
  Network,
  Boxes,
  PackageCheck,
  BarChart3,
}

export default function Capability() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="capability" className={[styles.section, 'section'].join(' ')} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Năng lực</SectionLabel>
          <div className={styles.headerContent}>
            <h2 className={styles.heading}>
              Đằng sau
              <br />
              <em>mỗi sản phẩm.</em>
            </h2>
            <p className={styles.subheading}>
              TIN PHÁT DECOR tham gia trực tiếp vào nhiều công đoạn của chuỗi
              cung ứng — từ sản xuất đến tay khách hàng.
            </p>
          </div>
        </motion.div>

        {/* Main layout: large placeholder left + capabilities right */}
        <div className={styles.layout}>
          {/* Left: Company image / warehouse */}
          <motion.div
            className={styles.imageBlock}
            initial={{ opacity: 0, x: -32 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {company.images?.warehouse ? (
              <img
                src={company.images.warehouse}
                alt="Xưởng sản xuất TIN PHÁT DECOR"
                className={styles.mainRealImage}
              />
            ) : (
              <div className={styles.mainImagePlaceholder}>
                <span className={styles.mainEmoji}>🏭</span>
                <span className={styles.mainLabel}>Xưởng sản xuất / Kho hàng</span>
                <span className={styles.mainHint}>Thêm ảnh tại: public/images/company/</span>
              </div>
            )}

            {/* Small secondary placeholder */}
            <div className={styles.secondaryImage}>
              {company.images?.packing ? (
                <img
                  src={company.images.packing}
                  alt="Đóng hàng TIN PHÁT DECOR"
                  className={styles.secondaryRealImage}
                />
              ) : (
                <div className={styles.secondaryPlaceholder}>
                  <span>📦</span>
                  <span>Đóng hàng</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Capability cards */}
          <div className={styles.capabilityList}>
            {capabilities.map((cap, i) => {
              const Icon = iconMap[cap.icon] || Factory
              return (
                <motion.div
                  key={cap.id}
                  className={styles.capCard}
                  initial={{ opacity: 0, x: 24 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={styles.capIcon}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className={styles.capContent}>
                    <h3 className={styles.capTitle}>{cap.title}</h3>
                    <p className={styles.capDesc}>{cap.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
