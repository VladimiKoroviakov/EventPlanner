import styles from './Input.module.css';

/**
 * Input — labelled text input component.
 *
 * Props:
 *   label       — string, rendered above the input
 *   placeholder — string, forwarded to the <input>
 *   disabled    — boolean
 *   icon        — optional ReactNode prepended inside the input wrapper
 *   ...rest     — forwarded to the underlying <input> element
 */
export default function Input({
  label,
  placeholder,
  disabled = false,
  icon,
  id,
  ...rest
}) {
  const wrapperClass = [styles.wrapper, disabled ? styles.disabled : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {icon && icon}
        <input
          id={id}
          className={styles.input}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
      </div>
    </div>
  );
}
