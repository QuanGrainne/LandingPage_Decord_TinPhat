import { motion } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from '../components/ui/SectionLabel'
import styles from './About.module.css'

const highlights = [
  {
    number: '01',
    title: 'Đa dạng sản phẩm',
    desc: 'Phủ đầy đủ các mùa lễ hội và nhu cầu trang trí quanh năm với danh mục sản phẩm phong phú.',
  },
  {
    number: '02',
    title: 'Nguồn hàng ổn định',
    desc: 'Nguồn cung đảm bảo, sẵn sàng đáp ứng mọi thời điểm trong năm, kể cả mùa cao điểm.',
  },
  {
    number: '03',
    title: 'Đơn hàng số lượng lớn',
    desc: 'Phù hợp cửa hàng, đại lý và doanh nghiệp cần nhập hàng số lượng lớn, giá tốt.',
  },
  {
    number: '04',
    title: 'Sản xuất & Phân phối',
    desc: 'Tham gia trực tiếp vào chuỗi cung ứng, đảm bảo chất lượng sản phẩm đến tay khách hàng.',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal()

  return (
    <section id="about" className={[styles.about, 'section'].join(' ')} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT — Main text */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -32 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Về chúng tôi</SectionLabel>

            <h2 className={styles.heading}>
              Không chỉ là
              <br />
              <em>sản phẩm decor.</em>
            </h2>

            <p className={styles.body}>
              TIN PHÁT DECOR cung cấp đa dạng các sản phẩm trang trí phục vụ
              nhiều mùa lễ hội và nhu cầu sử dụng quanh năm, hướng đến cửa
              hàng, đại lý và khách hàng nhập số lượng lớn.
            </p>

            {/* Decorative large text */}
            <div className={styles.decoLabel} aria-hidden="true">
              2025
            </div>
          </motion.div>

          {/* RIGHT — Highlight grid */}
          <motion.div
            className={styles.right}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'show' : 'hidden'}
          >
            {highlights.map((item) => (
              <motion.div
                key={item.number}
                className={styles.highlight}
                variants={itemVariants}
              >
                <span className={styles.number}>{item.number}</span>
                <div className={styles.highlightContent}>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
