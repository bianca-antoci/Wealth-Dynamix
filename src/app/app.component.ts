import { Component, OnInit } from '@angular/core';
import { RequestsService } from './requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private service: RequestsService,
  ) { }

  ngOnInit(): void {
    this.getListOfFilms();
  }
  /**
   * this function fetch films
   */
  getListOfFilms() {
    this.service.getListFilms().subscribe(
      (data: any) => {
        console.log(data);
      },

    );
  }
}
