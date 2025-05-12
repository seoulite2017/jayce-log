'use client';

const ToggleButton = () => {
  const toggleTheme = () => {
    const currentTheme = document.body.getAttribute('data-theme') ?? 'light';
    const next = currentTheme === 'light' ? 'dark' : 'light';

    document.body.setAttribute('data-theme', next);

    document.cookie = `theme=${next}; path=/; max-age=31536000`;
  };

  return <button onClick={toggleTheme}>Toggle</button>;
};

export default ToggleButton;
