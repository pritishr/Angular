import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
 isFavorite: any;
//  user : any;
  // @Input(message) messageFromParent ;
  @Input() parentMessage;
  // @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    // this.isFavorite = !this.isFavorite;
    // this.change.emit();
  }

}
