import Route from '@ioc:Adonis/Core/Route'
import "App/Modules/Users/routes"


Route.get('/routes',()=>{
    return 'this is routes'
})