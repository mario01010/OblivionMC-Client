import './link.css';
import Icon from '@mdi/react';

function Link({ icon, text, text2 }) {
  const IconComponent = typeof icon === "string" ? null : icon;

  return (
    <div className="link">
      {typeof icon === "string" ? (
        <Icon
          path={icon}
          size={4}
          color="var(--primary)"
          className="link-icon"
        />
      ) : (
        <IconComponent
          size={90}
          color="var(--primary)"
          className="link-icon"
        />
      )}

      <div className="link-text">
        <h2>{text}</h2>
        <p>{text2}</p>
      </div>
    </div>
  );
}

export default Link;
