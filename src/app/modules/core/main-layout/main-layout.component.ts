import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SidebarModule } from 'primeng/sidebar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MobileSidebarComponent } from '../../shared/components/mobile-sidebar/mobile-sidebar.component';
import { PopupService } from '../services/popup.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule,HeaderComponent,SideBarComponent,FooterComponent,SidebarModule,MobileSidebarComponent,CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit  {
  constructor(private breakpointObserver: BreakpointObserver,public popupService:PopupService) {}
  isMobile!:boolean
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe(result => {
        this.isMobile = result.matches;
        console.log("isMobile",this.isMobile);

      });
  }
}
