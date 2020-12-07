import * as Assert from 'assert';
import * as s from './factory.js';

export const testFactory = () => {
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

  Assert.deepStrictEqual(
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
};
