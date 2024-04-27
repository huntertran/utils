import { ChangeDetectorRef, Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dynamic-iframe',
    standalone: true,
    imports: [],
    templateUrl: './dynamic-iframe.component.html',
    styleUrl: './dynamic-iframe.component.scss'
})
export class DynamicIframeComponent implements OnInit {
    public toolLink: string | undefined;
    constructor(
        private readonly domSanitizer: DomSanitizer,
        private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.toolLink = this.route.snapshot.data['uri'];
    }

    public dynamicLink() {
        if (this.toolLink) {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(this.toolLink);
        }
        return "";
    }
}
