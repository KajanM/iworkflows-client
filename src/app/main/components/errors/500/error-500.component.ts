import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector: 'error-500',
    templateUrl: './error-500.component.html',
    styleUrls: ['./error-500.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Error500Component implements OnInit {
    /**
     * Constructor
     */
    constructor(private _fuseConfigService: FuseConfigService) {}

    ngOnInit(): void {
        this.hideComponents();
    }

    private hideComponents(): void {
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
}
