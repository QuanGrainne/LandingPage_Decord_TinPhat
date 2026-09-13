import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, CheckCircle, Package, Truck } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from '../components/ui/SectionLabel'
import { processSteps } from '../data/process'
import styles from './Process.module.css'

const iconMap = {
  MessageSquare,
  Lightbulb,
  CheckCircle,
  Package,
  Truck,
}

export default function Process() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="process" className={[styles.section, 'section'].join(' ')} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Quy trình</SectionLabel>
          <h2 className={styles.heading}>
            Quy trình
            <em> hợp tác.</em>
          </h2>
          <p className={styles.subheading}>
            Đơn giản, minh bạch và thuận tiện — từ lần liên hệ đầu tiên đến khi hàng về tay bạn.
          </p>
        </motion.div>

        {/* Desktop: horizontal steps */}
        <div className={styles.stepsDesktop}>
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle
            return (
              <motion.div
                key={step.id}
                className={styles.step}
                initial={{ opacity: 0, y: 32 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Connector line (between steps) */}
                {i < processSteps.length - 1 && (
                  <div className={styles.stepConnector} aria-hidden="true" />
                )}

                {/* Number + Icon */}
                <div className={styles.stepTop}>
                  <div className={styles.stepIconWrap}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>

                {/* Content */}
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile: vertical */}
        <div className={styles.stepsMobile}>
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle
            return (
              <motion.div
                key={step.id}
                className={styles.stepMobile}
                initial={{ opacity: 0, x: -24 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={styles.stepMobileLeft}>
                  <div className={styles.stepMobileIcon}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className={styles.stepMobileLine} aria-hidden="true" />
                  )}
                </div>
                <div className={styles.stepMobileContent}>
                  <span className={styles.stepMobileNum}>{step.number}</span>
                  <h3 className={styles.stepMobileTitle}>{step.title}</h3>
                  <p className={styles.stepMobileDesc}>{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
