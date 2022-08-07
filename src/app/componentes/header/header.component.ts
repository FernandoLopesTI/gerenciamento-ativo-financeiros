import { Component, OnInit, ViewChild ,ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , AfterViewInit{
  @ViewChild('mobile') sideNav?: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);

  }

}
