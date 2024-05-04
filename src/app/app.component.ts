import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        RouterModule,
        CommonModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Developer Utils';
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;
    isMobile = true;
    isCollapsed = true;
    applicationName: string = '';

    constructor(
        private route: ActivatedRoute,
        public router: Router,
        private observer: BreakpointObserver) { }

    ngOnInit() {
        console.log(this.router.config);
        this.route.firstChild?.data.subscribe(
            data => {
                this.applicationName = data['name'];
            }
        );

        this.route.url.subscribe(() => {
            this.applicationName = this.route.snapshot.firstChild?.data['name'];
        });

        this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
            if (screenSize.matches) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        });
    }

    toggleMenu() {
        if (this.isMobile) {
            this.sidenav.toggle();
            this.isCollapsed = false;
        } else {
            this.sidenav.open();
            this.isCollapsed = !this.isCollapsed;
        }
    }

    onActivate(componentRef: any) {
        this.applicationName = componentRef.route.snapshot.data['name'];
    }
}
