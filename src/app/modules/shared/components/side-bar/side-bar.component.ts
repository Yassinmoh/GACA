import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [AccordionModule,CommonModule,DividerModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  activeItem: number = 0;
  taps = [
    { title: 'لوحة التحكم' ,icon:'#grid-icon'},
    { title: 'لوحة التحكم' ,icon:'#order-icon'},
    { title: 'كتالوج الخدمة' ,icon:'#catalog-icon'}
  ];
  planes = [
    { title: 'الطيران العام' ,icon:'#plane'},
    { title: 'الطيران التجاري' ,icon:'#plane'},
    { title: 'الطيران الدبلوماسي/العسكري' ,icon:'#plane'}
  ];

  handleClick(index: number) {
    this.activeItem = index;
    console.log("Active", this.activeItem);
  }
}
