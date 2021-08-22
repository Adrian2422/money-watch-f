import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private _isCollapsed = false;
  private _languages!: string[];

  constructor() { }

  ngOnInit(): void {
  	this.languages = ['EN', 'PL'];
  }


  get isCollapsed(): boolean {
  	return this._isCollapsed;
  }
  set isCollapsed(value: boolean) {
  	this._isCollapsed = value;
  }
  get languages(): string[] {
  	return this._languages;
  }
  set languages(value: string[]) {
  	this._languages = value;
  }

  toggleSidebar(): void {
  	this.isCollapsed = !this.isCollapsed;
  }
}
