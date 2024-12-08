import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor( private apiService: ApiService){

  }

  ngOnInit() {
    this.testApi()
  }

  testApi(){
    this.apiService.testGetApi().subscribe((res: any) => {
      console.log(res, 9878);
    }, (err: any) => {
      console.log(err, 5676);
    })
  }
}
