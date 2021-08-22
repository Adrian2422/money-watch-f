import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import pl from '@angular/common/locales/pl';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared/shared.module';
import { MainComponent } from './main/main.component';
=======
import { LoginComponent } from './login/login.component';
import {
	TranslateLoader,
	TranslateModule
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
>>>>>>> master

registerLocaleData(en);
registerLocaleData(pl);

@NgModule({
<<<<<<< HEAD
	declarations: [
		AppComponent,
		MainComponent
	],
=======
	declarations: [AppComponent, LoginComponent],
>>>>>>> master
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
<<<<<<< HEAD
		SharedModule
=======
		SharedModule,
		ReactiveFormsModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		AppRoutingModule
>>>>>>> master
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
