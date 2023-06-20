import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap-example';

  @ViewChild('emailAddress') emailAddress : ElementRef | undefined;
  @ViewChild('emailBody') emailBody: ElementRef | undefined;
 onSubmitHandler():void{
  const emailAddressValue=this.emailAddress?.nativeElement.value;
  const emailBodyValue=this.emailBody?.nativeElement.value;
  console.log(emailAddressValue);
  console.log(emailBodyValue);
 }

 
}