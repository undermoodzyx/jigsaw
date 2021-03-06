import {Component, Renderer2, ViewContainerRef} from "@angular/core";
import {ArrayCollection} from "jigsaw/core/data/array-collection";

@Component({
  templateUrl: './app.component.html'
})
export class TileselecItemsChangeComponent{
    public selectedCity: ArrayCollection<any>;
    citys = new ArrayCollection([
        {label: "北京"},
        {label: "上海"},
        {label: "南京"},
        {label: "深圳"},
        {label: "长沙"},
        {label: "西安"}
    ]);
    constructor(public viewContainerRef: ViewContainerRef,
                public renderer: Renderer2) {
    }
    public basicSelectChange(cityArr:ArrayCollection<any>){
        cityArr.forEach((city)=> console.log(`tileselect message is: ${city.label}`));
    }
}

