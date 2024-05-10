import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
