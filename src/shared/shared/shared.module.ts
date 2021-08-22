import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ZorroModule } from '../zorro/zorro.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		ZorroModule,
		TranslateModule
	],
	exports: [TranslateModule, ZorroModule]
})
export class SharedModule { }
