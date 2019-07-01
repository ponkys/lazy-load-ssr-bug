# MyLazyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

commands that I used to generate this code:

```bash
# 1. Create angular app
ng new myLazyApp
# 2. Add Angular universal
ng add @nguniversal/express-engine --clientProject myLazyApp
# 3.
ng generate module customers --routing
# 5. add lazy load route to this new module in ./app/app-routing.module.ts
# Doesn't work with 'src/app/customers/customers.module' either
{
    path: 'orders',
    loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule)
},
# 6. add test component and add it to the customer's module routes.
ng g component test
```

## Start the project

```bash
  npm install
  npm run build:ssr && npm run serve:ssr
```

go to `localhost:3000`

## Hack

You can play with the old way to import the lazy loaded modules but it has it's downsides. Check `src/app/app-routing.module.ts`

## Error in server-side

```ts
ERROR { Error: Uncaught (in promise): TypeError: Cannot read property 'call' of undefined
TypeError: Cannot read property 'call' of undefined
```

## Issues found

I found this thread regarding similar issues it doesn't talk about angular v8

`https://github.com/angular/angular/issues/27023`
