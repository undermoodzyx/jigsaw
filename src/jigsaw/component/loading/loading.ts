import {Component, ElementRef, EventEmitter, Input, NgModule, OnInit, Renderer2} from "@angular/core";
import {IPopupable} from "../../service/popup.service";
import {CommonModule} from "@angular/common";
import {AbstractJigsawComponent} from "../core";
import {JigsawBlock, JigsawBlockModule} from "../block/block";

export class JigsawLoadingBase extends AbstractJigsawComponent implements IPopupable {
    public initData: any;
    public answer: EventEmitter<any>;
    public popupElement: HTMLElement;

    constructor(private _renderer: Renderer2, private _elementRef: ElementRef){
        super();
    }

    protected getColorElement() : NodeListOf<Element>{
        return undefined;
    }

    private _color:string;

    @Input()
    public get color():string {
        return this._color;
    }

    public set color(rgb:string) {
        this._color = rgb;
        this.setElementsStyle(this.getColorElement(),'backgroundColor',rgb);
    }

    protected getPopupElement(): HTMLElement {
        return this._elementRef.nativeElement;
    }

    public setElementSize(selector: string, width: number | string , height: number | string) {
        this.popupElement = this.getPopupElement();

        if(width && height){
            this._renderer.setStyle(this.popupElement, 'width', width);
            this._renderer.setStyle(this.popupElement, 'height', height);
            this._renderer.setStyle(this.popupElement.querySelector(selector), 'width', width);
            this._renderer.setStyle(this.popupElement.querySelector(selector), 'height', height);
            this._renderer.setStyle(this.popupElement.querySelector(selector), 'margin-left', '-' + this.popupElement.offsetWidth / 2 + 'px');
            this._renderer.setStyle(this.popupElement.querySelector(selector), 'margin-top', '-' + this.popupElement.offsetHeight / 2 + 'px');
        }
    }

    public setElementsStyle(elements:NodeListOf<Element>, props:string, val:string | boolean | number) {
        for (let index = 0; index < elements.length; ++index) {
            this._renderer.setStyle(elements[index],props,val);
        }
    }

}

@Component({
    selector: 'jigsaw-loading',
    templateUrl: 'loading.html',
    styleUrls: ['loading.scss']
})
export class JigsawLoading extends JigsawLoadingBase implements OnInit{

    constructor(private renderer: Renderer2, private elementRef: ElementRef){
        super(renderer,elementRef);
    }

    ngOnInit(){
        super.setElementSize('.spinner',this.width,this.height);
    }


    protected getColorElement() : NodeListOf<Element>{
        return this.getPopupElement().querySelectorAll('.spinner-container > div');
    }

}

@Component({
    selector: 'jigsaw-ball-loading',
    templateUrl: 'loading-ball.html',
    styleUrls: ['loading-ball.scss']
})
export class JigsawBallLoading extends JigsawLoadingBase {
    constructor(private renderer: Renderer2, private elementRef: ElementRef){
        super(renderer,elementRef);
    }

    protected getColorElement() : NodeListOf<Element>{
        return this.getPopupElement().querySelectorAll('.jigsaw-loading-content > div');
    }

}

@NgModule({
    imports: [CommonModule, JigsawBlockModule],
    declarations: [JigsawLoading, JigsawBallLoading],
    exports: [JigsawLoading, JigsawBallLoading],
    entryComponents: [JigsawBlock, JigsawLoading, JigsawBallLoading]
})
export class JigsawLoadingModule {

}

