import { describe, equal, it } from '@robinblomberg/test';
import * as s from '../lib/factory.js';

export const testFactory = () => describe('factory', () => {
  it('should validate values correctly', () => {
    const config = s.object({
      ignorePatterns: s.array(s.string()),
      rules: s.object({
        indent: s.array([
          s.number(),
          s.number(),
          s.object({
            SwitchCase: s.number()
          })
        ])
      })
    });

    equal(
      config.validate({
        ignorePatterns: ['**/.*/**'],
        rules: {
          indent: [1, 2, {
            SwitchCase: 1
          }]
        }
      }),
      null
    );
  });
});
