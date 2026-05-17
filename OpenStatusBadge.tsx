import { useBusinessHours } from '../../hooks/useBusinessHours';
import './OpenStatusBadge.css';

interface Props {
  compact?: boolean;
}

export function OpenStatusBadge({ compact }: Props) {
  const { status, label, nextInfo } = useBusinessHours();

  return (
    <div className={`open-badge open-badge--${status} ${compact ? 'open-badge--compact' : ''}`}>
      <span className="open-badge__dot" />
      <span className="open-badge__label">{label}</span>
      {!compact && nextInfo && (
        <span className="open-badge__next">{nextInfo}</span>
      )}
    </div>
  );
}
