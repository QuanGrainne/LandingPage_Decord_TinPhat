import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import Button from '../components/ui/Button'
import { company } from '../data/company'
import styles from './ContactCTA.module.css'

// Tọa độ: Cầu chợ trâu Hải Hưng, Ninh Bình
const MAP_LAT = 20.2148128
const MAP_LNG = 106.3205046
const MAP_ZOOM = 16
const MAPS_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d${3757}!2d${MAP_LNG}!3d${MAP_LAT}!3m2!1i1024!2i768!4f${MAP_ZOOM}.1!4m4!3e6!4m0!4m1!3e0!5e0!3m2!1svi!2svn!4v1694496000000!5m2!1svi!2svn`

export default function ContactCTA() {
  const { ref, isVisible } = useScrollReveal()

  const contactItems = [
    {
      id: 'hotline',
      icon: Phone,
      label: 'Hotline',
      value: company.contact.hotline,
      href: company.contact.hotline.startsWith('[')
        ? undefined
        : `tel:${company.contact.hotline.replace(/\s/g, '')}`,
    },
    {
      id: 'zalo',
      icon: MessageCircle,
      label: 'Zalo',
      value: company.contact.zalo,
      href: company.contact.zalo.startsWith('[') ? undefined : `https://zalo.me/${company.contact.zalo}`,
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: company.contact.email,
      href: company.contact.email.startsWith('[') ? undefined : `mailto:${company.contact.email}`,
    },
    {
      id: 'address',
      icon: MapPin,
      label: 'Địa chỉ',
      value: company.contact.address,
      href: company.contact.address.startsWith('[')
        ? undefined
        : `https://maps.app.goo.gl/sTq4fzmAe5UbG6Yt9`,
    },
  ]

  return (
    <section id="contact" className={styles.section} ref={ref}>
      {/* Background decoration */}
      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.bgShape1} />
        <div className={styles.bgShape2} />
      </div>

      <div className="container">
        {/* TOP: CTA content */}
        <div className={styles.topRow}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: -32 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.eyebrow}>Liên hệ hợp tác</span>
            <h2 className={styles.heading}>
              Bạn đang tìm
              <br />
              <em>nguồn hàng decor?</em>
            </h2>
            <p className={styles.body}>
              Liên hệ với TIN PHÁT DECOR để trao đổi về sản phẩm và nhu cầu
              hợp tác. Chúng tôi sẵn sàng tư vấn và hỗ trợ đơn hàng số lượng
              lớn cho cửa hàng và đại lý.
            </p>
            <div className={styles.ctaButtons}>
              <Button size="lg" href={`tel:${company.contact.hotline}`}>
                Liên hệ ngay
              </Button>
            </div>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            className={styles.contactCards}
            initial={{ opacity: 0, x: 32 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {contactItems.map((item) => {
              const Icon = item.icon
              const isPlaceholder = item.value.startsWith('[')
              return (
                <div key={item.id} className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    {isPlaceholder ? (
                      <span className={styles.contactValuePlaceholder}>{item.value}</span>
                    ) : item.href ? (
                      <a href={item.href} className={styles.contactValue} target={item.id === 'address' ? '_blank' : undefined} rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.contactValue}>{item.value}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* BOTTOM: Google Maps embed */}
        <motion.div
          className={styles.mapWrapper}
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.mapHeader}>
            <MapPin size={16} strokeWidth={2} />
            <span>{company.contact.address}</span>
            <a
              href="https://maps.app.goo.gl/sTq4fzmAe5UbG6Yt9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapDirections}
            >
              Xem đường đi →
            </a>
          </div>
          <div className={styles.mapFrame}>
            <iframe
              title="Bản đồ TIN PHÁT DECOR"
              src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3738.1917254143937!2d${MAP_LNG}!3d${MAP_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDEyJzUzLjMiTiAxMDbCsDE5JzEzLjgiRQ!5e0!3m2!1svi!2svn!4v1694496000000!5m2!1svi!2svn`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Bản đồ vị trí TIN PHÁT DECOR tại Hải Hưng, Ninh Bình"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
