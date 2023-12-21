/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async ({ view}) => {
//   // return "Hello adonis"
//   return view.render('welcome')
// })

Route.get('/',  () => {
  return "this is get route"
})


Route.post('/', ()=>{
  return 'this is post route'
})

Route.put('/', ()=>{
  return 'this is put route'
})

// group route

Route.group(()=>{

  Route.get('/test',()=>{
    return 'this is test route'
  })
  Route.post('/test-1',()=>{
    return 'this is test-1 route'
  })
}).prefix('/api')

Route.group(()=>{

  Route.group(()=>{

    Route.get('/findall',()=>{
      return 'this is find all route'
    })
    Route.post('/findall-1',()=>{
      return 'this is findall-1 route'
    })

  }).prefix('/user')

}).prefix('/api')


// route params
// /:id? {?} optional route params 

Route.get('/users/:id?',({ params })=>{
  return `this is the user ID: ${params.id}`
})

// wild card route
// /book/* {/*}  hoy to / pachi game te value hoy tene return karvadese
Route.get('/book/*',()=>{
  return 'this is wild card books'
})