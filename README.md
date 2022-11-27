# Vue 3 + TypeScript + Vite + Unocss

> https://github.com/arnosolo/vite-vue3-ts-unocss

- Check code on git commit using [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) 

## Get Start

1. You may want to delete `.git` folder first
2. Install dep
   ```bash
   npm i
   ```
3. Start
   ```bash
   npm run dev
   ```


## How to use

### css

[unocss](https://uno.antfu.me/)

### Icons

1. Open https://icones.js.org/collection/ic find icon you need
   
2. Install icon set
   
   ```bash
   yarn add -D @iconify-json/ic
   ```

3. Use in template
   
   ```html
   <span i-ic-baseline-add-circle text-gray-500></span>
   ```

### Code format

- [Code format - @antfu/eslint-config](https://github.com/antfu/eslint-config)
  
- [eslint-plugin-vue](https://eslint.vuejs.org/rules/multi-word-component-names.html)

- [TypeScript ESLint](https://typescript-eslint.io/)

## How to build a template like this

### Check code style on git commit

> [husky](https://github.com/typicode/husky) 
> [lint-staged](https://github.com/okonet/lint-staged) 

1. Setup husky
   > https://typicode.github.io/husky/#/
   ```bash
   npx husky-init && npm install
   ```

2. You will realize a new file `.husky/pre-commit` was created. And commons in it will be executed on each git commit. Now annotate the `npm test` cmd in it, since we will use lint-stage to check code style. 
   ```bash
   # .husky/pre-commit
   # npm test
   ```
   
3. Install lint-stage
   ```bash
   npm i -D lint-staged
   ```

4. Setup lint-stage
   ```bash
   npx husky add .husky/pre-commit "npx lint-staged"
   ```
   ```js
   // lint-staged.config.mjs
   export default {
     '*.ts': 'eslint',
     '*.vue': 'eslint',
   }
   ```

5. Now this auto check method should work, we just need verify it. Add a new file and make a commit see if it works.
   ```ts
   // src/hello.ts
   const hello: number = 'abc'
   ```
   ```bash
   git add ./src/hello.ts
   git commit -m "try lint-staged"
   ```
6. If it works then we some error warning was printed by terminal, and this commit was not success.
   ```bash
   1:7  error  'hello' is assigned a value but never used  @typescript-eslint/no-unused-vars
   ✖ 1 problem (1 error, 0 warnings)
   ```
