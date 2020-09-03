module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL
    || 'postgresql://dunder_mifflin@localhost/spaced-repetition',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL 
    || 'postgresql://dunder_mifflin@localhost/spaced-repetition-test',
  JWT_SECRET: process.env.JWT_SECRET || 'YV~B*&xq8WC=h]',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
};
