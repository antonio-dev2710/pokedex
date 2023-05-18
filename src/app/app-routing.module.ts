import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
//criar um lazy load
//A principal função do Lazy Loading é melhorar o desempenho da aplicação, já que reduz o tempo de carregamento inicial e diminui o uso de recursos do sistema. Outra vantagem do Lazy Loading é que ele permite dividir a aplicação em módulos menores e mais gerenciáveis
const routes: Routes = [
{
  //inidca q sempre vai arrregar as paginas desse PagesMdule
  path:'',
  loadChildren:()=> import('./pages/pages.module').then(p=>PagesModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
