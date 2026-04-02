import styles from './Card.module.css';

/**
 * Card — container component with optional zones.
 *
 * Usage:
 *   <Card hoverable>
 *     <Card.Header title="My Card" />
 *     <Card.Body>…content…</Card.Body>
 *     <Card.Footer>…actions…</Card.Footer>
 *   </Card>
 *
 * Props (Card):
 *   hoverable — boolean, adds a lift shadow on hover
 *   className — extra class(es)
 *   ...rest   — forwarded to the wrapper <div>
 */
function Card({ hoverable = false, className = '', children, ...rest }) {
  const classes = [
    styles.card,
    hoverable ? styles.hoverable : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

/* ---- Sub-components ---- */

Card.Header = function CardHeader({ title, children, className = '', ...rest }) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(' ')} {...rest}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className = '', ...rest }) {
  return (
    <div className={[styles.body, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, className = '', ...rest }) {
  return (
    <div className={[styles.footer, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
};

export default Card;
