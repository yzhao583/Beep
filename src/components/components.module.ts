import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { RegisterFormComponent } from './register-form/register-form';
@NgModule({
	declarations: [RegisterFormComponent],
	imports: [IonicModule],
	exports: [RegisterFormComponent]
})
export class ComponentsModule {}
