import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from './services/login.service';
import { ICredentials } from './interfaces/ICredentials';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	private _validateForm!: FormGroup;

	constructor(private translate: TranslateService, private loginService: LoginService) {}

	ngOnInit(): void {
		this.translate.addLangs(['en', 'pl']);

		const browserLanguage: string = this.translate.getBrowserLang();
		const supportedLanguage: string[] = this.translate.getLangs();
		const defaultLanguage: string =	this.translate.getDefaultLang();

		if(supportedLanguage.includes(browserLanguage)){
			this.translate.use(browserLanguage);
		} else {
			this.translate.use(defaultLanguage);
		}

		this.validateForm = new FormGroup({
			login: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required, Validators.pattern(/\d+/)]),
			remember: new FormControl(false)
		});
	}

	get validateForm(): FormGroup {
		return this._validateForm;
	}

	set validateForm(value: FormGroup) {
		this._validateForm = value;
	}

	onLogIn(): void {
		const credentials: ICredentials = {
			login: this.validateForm.get('login')?.value,
			password: this.validateForm.get('password')?.value
		};
		this.loginService.postCredentials(credentials).pipe(
			tap()
		).subscribe();
	}
}
