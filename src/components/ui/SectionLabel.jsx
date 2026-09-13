import styles from './SectionLabel.module.css'

export default function SectionLabel({ children, light = false }) {
  return (
    <span className={[styles.label, light ? styles.light : ''].filter(Boolean).join(' ')}>
      {children}
    </span>
  )
}
