tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1F3A', deep: '#081628', soft: '#13294B' },
        sage: { DEFAULT: '#7A9E7E', soft: '#A8C0AB', deep: '#5A7E5E' },
        gold: { DEFAULT: '#D4AF37', soft: '#E8CB6E', deep: '#A8881F' },
        ivory: { DEFAULT: '#F8F7F2', soft: '#FCFBF7' },
        charcoal: '#1F2937',
        mist: '#E5E7EB',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -8px rgba(11, 31, 58, 0.12)',
        'lift': '0 24px 48px -16px rgba(11, 31, 58, 0.18)',
        'gold': '0 0 0 1px rgba(212, 175, 55, 0.3), 0 8px 28px -6px rgba(212, 175, 55, 0.25)',
        'inset-gold': 'inset 0 0 0 1px rgba(212, 175, 55, 0.4)',
      },
    }
  }
}