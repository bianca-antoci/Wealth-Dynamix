import { Component, OnInit } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";


@Component({
	selector: "ngx-navigation",
	styleUrls: ["./navigation.component.scss"],
	templateUrl: "./navigation.component.html",
})
export class NavigationComponent implements OnInit {

	menuItems = [{
		label: 'People',
		icon: 'assets/multiple-11-outline-48.svg',
		path: '/people',
		selected: true,
	}, {
		label: 'Films',
		icon: 'assets/animation-31-outline-64.svg',
		path: '/films',
		selected: false,
	}, {
		label: 'Vehicles',
		icon: 'assets/spaceship-outline-64.svg',
		path: '/vehicles',
		selected: false,
	}, {
		label: 'Planets',
		icon: 'assets/planet-outline-48.svg',
		path: '/planets',
		selected: false,
	}];

	constructor(router: Router) {
		router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.updateNavItemsSelection(event);
			}
		});
	}

	ngOnInit() { }

	/**
	 * Will update the 'selected' parameter in the navigation item
	 * 
	 * @param event
	 */
	private updateNavItemsSelection(event: NavigationStart) {
		for (const item of this.menuItems) {
			item.selected = event.url.indexOf(item.path) > -1;
		}
	}

}
