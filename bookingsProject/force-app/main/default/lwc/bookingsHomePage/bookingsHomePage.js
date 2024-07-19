import { LightningElement, track ,wire } from 'lwc';
import flightServices from '@salesforce/apex/flightServices1Controller.getFlightDetails';

export default class BookingsHomePage extends LightningElement {
    //properties declaration
    fromVal;
    to ;
    travellingDate;
    serviceName;
    @track services = [];
    empDeatils = [{name : 'Dwarak' , age : 20 , email : 'darak@gmail.com', salary : 10000, gender : 'Male'} , 
        {name : 'Naga' , age : 30 , email : 'Naga@gmail.com', salary : 20000, gender : 'Male'},
        {name : 'Divya' , age : 20 , email : 'divya@gmail.com', salary : 30000,  gender : 'female'},
        {name : 'Yashoda' , age : 20 , email : 'yashoda@gmail.com', salary : 40000,  gender : 'female'}];
       
    @wire(flightServices)flightDetails;
    
    connectedCallback(){
        alert('flight data::'+  JSON.stringify(this.flightDetails) );
    }

    doAction1(event){        
        //value assignment to the variable "formVal";
        this.fromVal = event.target.value;
    }

    handleServiceNameChange(event){
        this.serviceName = event.target.value;
    }


    search(event){
        //accessing the formVal varible to print has alert
        
    }

    doAdd(event){
        //const serviceInputRef = this.template.querySelector('#servicNameInput');
        this.services.push(this.serviceName);
       
    }

    hanldeShowAllServices(event){

    }
   

}