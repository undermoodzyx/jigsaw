import {Component, Renderer2, ViewContainerRef} from "@angular/core";
import {Http} from "@angular/http";
import {TableData} from "jigsaw/core/data/table-data";
import {ColumnDefine} from "jigsaw/component/table/table-api";
import {DefaultCellRenderer} from "jigsaw/component/table/table-renderer";

@Component({
  templateUrl: './app.component.html'
})
export class TableDataChangeDemoComponent {
    tableData: TableData;

    constructor(public viewContainerRef: ViewContainerRef,
                public renderer: Renderer2, http: Http) {
        this.tableData = new TableData();
        this.tableData.http = http;
        this.tableData.fromAjax('mock-data/table/data.json');
    }

    columns: ColumnDefine[] = [
        {
            target: 'name',
            width: '15%',
            cell: {
                renderer: DefaultCellRenderer,
            }
        },
    ];

    dataChange(){
        this.tableData = new TableData(this.tableData.data.slice(0,3),this.tableData.field,this.tableData.header);
        console.log(this.tableData.data)
    }

    columnsChange(){
        this.columns = [
            {
                target: 'position',
                width: '50%',
                cell: {
                    renderer: DefaultCellRenderer,
                }
            },
        ];

        //暂不支持修改数组
        /*this.columnDefines.push({
            target: 'position',
            width: '20%',
            cell: {
                renderer: TableCellDefault,
            }
        },)*/
    }
}

