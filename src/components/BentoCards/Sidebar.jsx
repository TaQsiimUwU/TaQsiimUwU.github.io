import React, { useState, useEffect } from 'react';
import { Moon, MapPin } from 'lucide-react';
import HoverCard from '../HoverCard';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const [location, setLocation] = useState('Alexandria, Egypt');

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('ar') ? 'en' : 'ar';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(res => res.json())
            .then(data => {
              if (data && data.address) {
                const city = data.address.city || data.address.town || data.address.village || data.address.state || '';
                const country = data.address.country || '';
                if (city && country) {
                  setLocation(`${city}, ${country}`);
                } else if (country) {
                  setLocation(country);
                }
              }
            })
            .catch(() => { });
        },
        () => { }
      );
    }
  }, []);

  return (
    <div className="bento-header" style={{ justifyContent: 'space-between', padding: '1.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'inherit', gap: '1.5rem', alignItems: 'center' }}>
        <Moon size={18} style={{ color: 'var(--color-text-secondary)', cursor: 'crosshair' }} />
        <div onClick={toggleLanguage} className="lang-toggle-btn" style={{ padding: '0.75rem', margin: '-0.75rem', display: 'flex', alignItems: 'center' }}>
          <span className="bento-header-status" style={{ fontWeight: 600, color: 'inherit' }}>
            {t('toggle_lang')}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'inherit', gap: '1.5rem', alignItems: 'center' }}>
        <span className="bento-header-status" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ position: 'relative', display: 'inline-flex', width: '8px', height: '8px' }}>
            <span style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', backgroundColor: 'var(--color-success)', opacity: 0.4, animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></span>
            <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-success)', borderRadius: '50%' }}></span>
          </span>
          {t('open_to_work')}
        </span>
        <span className="bento-header-status" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={14} style={{ transform: 'rotate(90deg)' }} />
          {location}
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
