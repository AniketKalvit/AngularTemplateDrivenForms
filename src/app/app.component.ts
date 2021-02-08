import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public topics=['Angular','React','Node'];
  topicHasError=true;
  user=new User('','',0,'default','',false);
  validateTopic(value)
  {
    if(value==='default')
    {
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }
  }
  isShow:boolean=false;
  onSubmit(){
    // if(this.user.time==''){
    //   this.isShow=true;
    //   return;
    // }
    // else{
    //   this.isShow=false;
    // }
    console.log(this.user);
  }
}
