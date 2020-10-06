module.exports = {
  content: ['src/**/*.html'],
  whitelist: ['opacity-1', 'opacity-0', 'events-none', 'none', 'events-all', 'visible'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:]+/g) || [],
};
