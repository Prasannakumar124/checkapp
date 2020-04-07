import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit{
  changedvaluebutton:string='all';
  employee=[];
  constructor() {
    this.employee=[
     {empId:'Dev0001',name:'prasanna',age:'27',salary:70000,gender:'male'},
     {empId:'Dev0002',name:'kumar',age:'25',salary:50000,gender:'male'},
     {empId:'Dev0003',name:'BensonNeal',age:'28',salary:80000,gender:'male'},
     {empId:'Dev0004',name:'benson',age:'30',salary:90000,gender:'male'},
     {empId:'Dev0005',name:'willam smith',age:'35',salary:100000,gender:'male'},
     {empId:'Dev0006',name:'yashu',age:'35',salary:100000,gender:'female'},
     {empId:'Dev0007',name:'ammu',age:'25',salary:60000,gender:'female'},
    ]
   }

  ngOnInit() {
  }

  allemployeeData(){
    return this.employee.length;
  } 
 
  maleLength(){  
    // for(var z=0;z<=this.employee.length;z++){
    //   if(this.employee[z].gender=='male'){
    //     this.Female.push('male')
    //     console.log(this.male)
    //     return this.male.length-1 ;
    //    }
    //   }
    //differ bw map and filter 
    // return this.employee.map((e)=>e.gender==='male').length//7
  return this.employee.filter((e)=>e.gender==='male').length//5
}

femaleLength(){

  return this.employee.filter((e)=>e.gender==='female').length;

  // for(var z=0;z<=this.employee.length;z++){
  //   if(this.employee[z].gender=='female'){
  //     this.Female.push('female')
  //     console.log(this.Female)
  //     return this.Female.length-1 ;
  //    }
  //   }
}
onbuttonClick(value){
  this.changedvaluebutton=value;
  console.log(this.changedvaluebutton);
}
}
