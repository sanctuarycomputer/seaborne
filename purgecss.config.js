module.exports = {
  content: ['src/**/*.html'],
  whitelist: [],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:]+/g) || [],
};
