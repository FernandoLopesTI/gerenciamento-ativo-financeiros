import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() year: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

}
