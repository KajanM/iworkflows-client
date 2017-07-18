import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class FuseMatchMedia
{
    activeMediaQuery: string;
    // onMediaChange: Observable<string>;
    onMediaChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(private observableMedia: ObservableMedia)
    {
        this.activeMediaQuery = '';

        /*this.onMediaChange = Observable.create((observer: Observer<string>) =>
        {
            this.observableMedia.subscribe((change: MediaChange) =>
            {
                if ( this.activeMediaQuery !== change.mqAlias )
                {
                    this.activeMediaQuery = change.mqAlias;
                    observer.next(this.activeMediaQuery);
                }
            });
        });*/

        /*this.onMediaChange = Observable.create((observer: Observer<string>) =>
        {

        });*/

        this.observableMedia.subscribe((change: MediaChange) =>
        {
            if ( this.activeMediaQuery !== change.mqAlias )
            {
                this.activeMediaQuery = change.mqAlias;
                this.onMediaChange.emit(change.mqAlias);
            }
        });
    }
}