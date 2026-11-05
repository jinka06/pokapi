import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['default', 'junit'],
    outputFile: { junit: 'test-results.xml' },
    coverage: {
      provide: 'v8',
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage',
    },
  },
});
