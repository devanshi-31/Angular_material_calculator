import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  result: string = '';
  longButtons: string[] = ['AC', 'CE'];
  buttons: string[] = ['7','8', '9','/','4','5','6','*','1','2','3','-','.','0','=','+'];
  longButtons1: string[] = ['Prime', 'Factorial'];

  private prevValue: string = '';
  private curValue: string = '';

  addToExpression(value: string) {

    if (this.result != "") {
      this.prevValue = this.curValue;
      this.curValue = value;
    }


    if (value == 'AC') {
      this.result = '';
    } else if (value == 'CE'){
      this.result = this.prevValue != "=" ? this.result.slice(0, -1) : this.result;
    } else if (value == '=') {
      this.result = eval(this.result);
    }else if (value == 'Prime') {

        var c=0;
        var n=parseInt(this.result);
        for(let i=2; i<n;i++ )
        {
            if(n%i==0){
              c=c+1;
              break;
            }

        }
        if(c==1)
        {
          this.result='Composite';
        }
        else{
          this.result='Prime';
        }
    }else if(value=='Factorial'){
        var f=1;
        var n=parseInt(this.result);
        for(let i=1;i<=n;i++)
        {
          f=f*i;
        }
        this.result=f.toString();
    }
    else {
      this.result += value;
    }
  }
}
