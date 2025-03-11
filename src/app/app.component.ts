import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rockpaper';
  computer:string=''
  result:string=''
  num=0
  user_score=0
  computer_score=0

   Myfunc(user:any){
    this.num=Math.random()
    this.num=this.num*100

    if(this.num>=0 && this.num<=30){
      this.computer='paper'
   }
    else if (this.num>=30 && this.num<=65){
      this.computer="rock"
    }
    else{
      this.computer="scissor"
    }
    if(user==this.computer){
      this.result="game has been drawn"
    }
    else if(user=='rock'&&this.computer=='paper'){
      this.result="Computer has won"
      this.computer_score=this.computer_score+1
    }
    else if(user=='rock'&& this.computer=='scissor'){
      this.result="You have won"
      this.user_score=this.user_score+1
    }

    else if(user=='paper' && this.computer=='scissor'){
      this.result="Computer has won"
      this.computer_score=this.computer_score+1
    }

    else if(user=='paper' && this.computer=='rock'){
      this.result="You have won"
      this.user_score=this.user_score+1
    }

    else if(user=='scissor' && this.computer=='rock'){
      this.result="Computer has won"
      this.computer_score=this.computer_score+1
    }

    else if(user=='scissor' && this.computer=='paper'){
      this.result="You have won"
      this.user_score=this.user_score+1
    }
  }

    ResetGame(){
      window.location.reload()
    }
}

