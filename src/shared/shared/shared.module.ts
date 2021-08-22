import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import { TranslateModule } from '@ngx-translate/core';
>>>>>>> master
import { ZorroModule } from '../zorro/zorro.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
<<<<<<< HEAD
		ZorroModule
	],
	exports: [ZorroModule]
})
export class SharedModule {}
=======
		ZorroModule,
		TranslateModule
	],
	exports: [TranslateModule, ZorroModule]
})
export class SharedModule { }
>>>>>>> master
