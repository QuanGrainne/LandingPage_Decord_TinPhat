import { company } from '../../data/company'
import styles from './Footer.module.css'

const footerLinks = {
  company: [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Về chúng tôi', href: '#about' },
    { label: 'Năng lực', href: '#capability' },
  ],
  products: [
    { label: 'Noel', href: '#products' },
    { label: 'Trung Thu', href: '#products' },
    { label: 'Tết', href: '#products' },
    { label: 'Sinh nhật & Party', href: '#products' },
    { label: 'Đồ chơi trẻ em', href: '#products' },
    { label: 'Decor quanh năm', href: '#products' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 72,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand column */}
            <div className={styles.brandCol}>
              <div className={styles.logo}>
                <div className={styles.logoMark}>T</div>
                <div className={styles.logoText}>
                  <span className={styles.logoName}>TIN PHÁT</span>
                  <span className={styles.logoSub}>DECOR</span>
                </div>
              </div>
              <p className={styles.tagline}>
                Decor cho mọi mùa.
              </p>
              <p className={styles.brandDesc}>
                Sản xuất và phân phối các sản phẩm trang trí theo mùa và quanh
                năm — phục vụ cửa hàng, đại lý và khách hàng nhập số lượng lớn.
              </p>
            </div>

            {/* Links: Company */}
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Công ty</h4>
              <ul className={styles.linkList}>
                {footerLinks.company.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={styles.link}
                      onClick={(e) => handleLinkClick(e, l.href)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#contact" className={styles.link} onClick={(e) => handleLinkClick(e, '#contact')}>
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Links: Products */}
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Sản phẩm</h4>
              <ul className={styles.linkList}>
                {footerLinks.products.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={styles.link}
                      onClick={(e) => handleLinkClick(e, l.href)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>Liên hệ</h4>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Hotline</span>
                  <span className={[styles.contactValue, company.contact.hotline.startsWith('[') ? styles.placeholder : ''].filter(Boolean).join(' ')}>
                    {company.contact.hotline}
                  </span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Zalo</span>
                  <span className={[styles.contactValue, company.contact.zalo.startsWith('[') ? styles.placeholder : ''].filter(Boolean).join(' ')}>
                    {company.contact.zalo}
                  </span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={[styles.contactValue, company.contact.email.startsWith('[') ? styles.placeholder : ''].filter(Boolean).join(' ')}>
                    {company.contact.email}
                  </span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactLabel}>Địa chỉ</span>
                  <span className={[styles.contactValue, company.contact.address.startsWith('[') ? styles.placeholder : ''].filter(Boolean).join(' ')}>
                    {company.contact.address}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {currentYear} TIN PHÁT DECOR. All rights reserved.
            </p>
            <p className={styles.credit}>
              Sản xuất &amp; Phân phối sản phẩm Decor
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
