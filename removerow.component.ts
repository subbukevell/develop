import { Component, OnInit, Inject  } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-removerow',
  templateUrl: './removerow.component.html',
  styleUrls: ['./removerow.component.css']
})
export class RemoverowComponent implements OnInit {

  removedata:any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialogref: MatDialogRef<RemoverowComponent>) { 
    this.removedata = data
  }

  ngOnInit(): void {
  }

  save(){
    this.dialogref.close({data: this.removedata});
  }

  close(){
    this.dialogref.close();
  }

}
