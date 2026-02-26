(() => {
  const body = document.body;
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    const setState = (open) => {
      body.classList.toggle('nav-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.addEventListener('click', () => {
      setState(!body.classList.contains('nav-open'));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setState(false));
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1100 && body.classList.contains('nav-open')) {
        setState(false);
      }
    });
  }

  const endpoint = 'https://script.google.com/macros/s/AKfycbwFDIUZz5MeJ0S6ZXxwboCRU9VdYgB6BNreIXUWwmrWhEpvqPmtPq9YOjWf5OoK3f43tA/exec';
  const safe = (value) => value || '';

  const payload = {
    datetime: new Date().toISOString(),
    url: safe(window.location.href),
    referrer: safe(document.referrer),
    useragent: safe(navigator.userAgent),
    language: safe(navigator.language),
    platform: safe(navigator.platform),
    cookies: navigator.cookieEnabled ? 'yes' : 'no',
    online: navigator.onLine ? 'yes' : 'no',
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    screen_width: screen.width,
    screen_height: screen.height,
    screen_colorDepth: screen.colorDepth,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    history_length: history.length,
    java_enabled: typeof navigator.javaEnabled === 'function' ? navigator.javaEnabled() : false,
    connection_type: (navigator.connection && navigator.connection.effectiveType) || '',
    hardware_concurrency: navigator.hardwareConcurrency || '',
    device_memory: navigator.deviceMemory || '',
    touch_support: 'ontouchstart' in window ? 'yes' : 'no'
  };

  fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(() => {
    // Ignore analytics transport errors.
  });
})();
