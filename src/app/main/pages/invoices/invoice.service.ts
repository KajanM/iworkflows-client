import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class InvoiceService implements Resolve<any>
{
    invoice: any;

    invoiceOnChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(private http: Http)
    {
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getInvoice()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get invoice
     */
    getInvoice(): Promise<any[]>
    {
        return new Promise((resolve, reject) => {

            this.http.get('api/invoice')
                .subscribe(timeline => {
                    this.invoice = timeline.json().data;
                    this.invoiceOnChanged.next(this.invoice);
                    resolve(this.invoice);
                }, reject);
        });
    }
}
