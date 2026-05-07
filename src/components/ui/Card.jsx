export default function Card({ children, className = '' }) {
  return <div className={`glass-panel rounded-2xl p-6 shadow-insetSoft ${className}`}>{children}</div>;
}
