import styles from './PlaceholderImage.module.css'

/**
 * PlaceholderImage — hiển thị khi chưa có ảnh thật
 * Thay bằng <img src={realImagePath} alt={alt} /> khi có ảnh thật
 *
 * @param {string} label - Tên sản phẩm/danh mục
 * @param {string} imagePath - Đường dẫn sẽ dùng sau (chỉ hiển thị trong UI)
 * @param {string} accentColor - Màu chủ đạo của placeholder
 * @param {string} bgColor - Màu nền của placeholder
 * @param {string} emoji - Emoji đại diện
 * @param {string} aspectRatio - CSS aspect-ratio value
 * @param {string} className - Extra class
 */
export default function PlaceholderImage({
  label = 'Hình ảnh',
  imagePath = '',
  accentColor = '#C8632A',
  bgColor = '#F5E6DC',
  emoji = '📷',
  aspectRatio = '4/3',
  className = '',
  alt = '',
}) {
  return (
    <div
      className={[styles.placeholder, className].filter(Boolean).join(' ')}
      style={{
        '--ph-bg': bgColor,
        '--ph-accent': accentColor,
        '--ph-ratio': aspectRatio,
      }}
      role="img"
      aria-label={alt || label}
    >
      <div className={styles.inner}>
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.label}>{label}</span>
        {imagePath && (
          <span className={styles.path}>📁 {imagePath}</span>
        )}
      </div>
    </div>
  )
}
