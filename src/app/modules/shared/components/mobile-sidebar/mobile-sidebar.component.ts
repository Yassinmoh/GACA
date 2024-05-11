import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { fadeInRight, fadeOutRight } from 'src/app/modules/core/animations';
import { PopupService } from 'src/app/modules/core/services/popup.service';

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [AccordionModule, CommonModule, DividerModule],
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.scss',
  animations: [fadeInRight]
})
export class MobileSidebarComponent {
  activeItem: number = 0;

  taps = [
    { title: 'لوحة التحكم', icon: '#grid-icon' },
    { title: 'لوحة التحكم', icon: '#order-icon' },
    { title: 'كتالوج الخدمة', icon: '#catalog-icon' }
  ];

  planes = [
    { title: 'الطيران العام', icon: '#plane' },
    { title: 'الطيران التجاري', icon: '#plane' },
    { title: 'الطيران الدبلوماسي/العسكري', icon: '#plane' }
  ];

  constructor(private popupService: PopupService) { }

  closeSidebar() {
    this.popupService.closeSidebaPopup()
  }

  handleClick(index: number) {
    this.activeItem = index;
  }
}
