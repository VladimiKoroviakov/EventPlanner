import styles from './Button.module.css';

/**
 * Button — universal UI button component.
 *
 * Props:
 *   variant  — 'primary' | 'secondary' | 'danger'  (default: 'primary')
 *   size     — 'sm' | 'md' | 'lg'                  (default: 'md')
 *   disabled — boolean
 *   onClick  — click handler
 *   ...rest  — forwarded to the underlying <button>
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  ...rest
}) {
  const variantClass = styles[variant] ?? styles.primary;
  const sizeClass    = size !== 'md' ? (styles[size] ?? '') : '';

  const className = [styles.button, variantClass, sizeClass]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
