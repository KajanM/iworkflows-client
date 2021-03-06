import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import BpmnViewer from 'bpmn-js/lib/NavigatedViewer.js';
import {RequestHistoryService} from '../request-history.service';
import {BpmnDiagramModel} from '../bpmn-diagram.model';

@Component({
    selector: 'app-request-details',
    templateUrl: './request-details.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./request-details.component.scss',
        '../../../../../../node_modules/bpmn-js/dist/assets/diagram-js.css',
        '../../../../../../node_modules/bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css']
})
export class RequestDetailsComponent implements OnInit {
    processInstanceId: string;
    status: string;
    bpmnDiagram: BpmnDiagramModel;
    requestDetails = {};
    requestAvailability = true;

    @ViewChild('canvas') canvas;

    constructor(
        private route: ActivatedRoute,
        private requestHistoryService: RequestHistoryService) {
    }

    ngOnInit(): void {
        this.processInstanceId = this.route.snapshot.paramMap.get('processInstanceId');
        this.status = this.route.snapshot.paramMap.get('status');

        this.requestHistoryService.getBpmnDiagram(this.processInstanceId).subscribe(
            diagram => {
                this.bpmnDiagram = diagram;
                this.renderBpmnDiagram(this.bpmnDiagram.xml, this.bpmnDiagram.taskDefinitionKey, this.status);
            },
            error => console.error(error)
        );
    }

    private renderBpmnDiagram(bpmnXml: string, taskDefinitionKey: string, status: string): void {
        const viewer = new BpmnViewer({
            container: this.canvas.nativeElement,
            width: '100%',
            height: '100%'
        });

        // noinspection TypeScriptUnresolvedFunction
        viewer.importXML(bpmnXml, function (err): void {

            if (!err) {
                const canvas = viewer.get('canvas');
                // zoom to fit full viewport
                canvas.zoom('fit-viewport');
                if (status === 'approved') {

                    canvas.addMarker(taskDefinitionKey, 'highlight_green');
                }
                else if (status === 'rejected') {
                    canvas.addMarker(taskDefinitionKey, 'highlight_red');
                }
                else {
                    canvas.addMarker(taskDefinitionKey, 'highlight_blue');
                }
                // const overlays = viewer.get('overlays');
                // overlays.add(taskDefinitionKey, {
                //         position: {
                //             bottom: 0,
                //             right: 0
                //         },
                //         html: '<div><span matBadge="4" matBadgeOverlap="false">Text with a badge</span></div>'
                //     }
                // );
            } else {
                console.log('something went wrong:', err);
            }
        });


    }
}
