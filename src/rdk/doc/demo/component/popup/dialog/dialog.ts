import {Component} from "@angular/core";

import {UseDialogComponent} from './use-dialog/use-dialog';
import {UseDialog2Component} from './use-dialog2/use-dialog';

import {
    PopupService, PopupOptions, PopupPositionType, PopupPoint, PopupDisposer
} from '../../../../../service/popup.service';

@Component({
    templateUrl: 'dialog.html',
    styleUrls: ['dialog.scss']
})
export class DialogDemoComponent {

    private _disposer: PopupDisposer;

    constructor(private _popupService: PopupService) {
    }

    popup() {
        this._popupService.popup(UseDialogComponent, this._getDialogOptions());
    }

    popupAtPoint(event) {
        this._popupService.popup(UseDialog2Component, this._getDialogOptionsTwo(event));
    }

    popupTemplate(tp){
        this._disposer = this._popupService.popup(tp);
    }

    closeTemplate(){
        this._disposer();
    }

    private _getDialogOptions(): PopupOptions {
        return {
            modal: true //是否模态
        };
    }

    private _getDialogOptionsTwo(event): PopupOptions {
        return {
            modal: false, //是否模态
            pos: {x: event.clientX, y: event.clientY}, //插入点
            posOffset: { //偏移位置
                top: -10,
                left: 10,
            },
            posType: PopupPositionType.absolute, //定位类型
        };
    }
}

