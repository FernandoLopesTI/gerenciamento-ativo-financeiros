
import { Component, OnInit, ViewChild ,ElementRef, AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , AfterViewInit{
  @ViewChild('mobile') sideNav?: ElementRef;
  @Input() title: string = "";




  constructor() { }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);

  }

}
