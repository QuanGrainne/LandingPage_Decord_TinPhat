import styles from './Button.module.css'

/**
 * Button component
 * @param {'primary' | 'secondary' | 'ghost' | 'outline'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const cls = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
