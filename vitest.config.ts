import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['**/*.test.ts'],
        globals: true,
        coverage: {
            include: ['demo2/**/*.ts'],
        },
    },
});
