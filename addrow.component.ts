import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-addrow',
  templateUrl: './addrow.component.html',
  styleUrls: ['./addrow.component.css']
})
export class AddrowComponent implements OnInit {

  constructor(public fb:FormBuilder,  private dialogref: MatDialogRef<AddrowComponent>, @Inject(MAT_DIALOG_DATA) data: any) { }

  addform = this.fb.group({
    thumbnail:[''],
    albumid:[],
    id:[],
    title:[''],
    url:['']
  });

  ngOnInit(): void {
  }

  formval:any;
  addrow(){
     console.log(this.addform.value);
     this.formval = this.addform.value;
     this.dialogref.close({ event: 'submit', data: this.formval });
  }

  close(){
    this.dialogref.close();
  }

}
