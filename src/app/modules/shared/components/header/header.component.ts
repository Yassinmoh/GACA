import { Component, Input } from '@angular/core';
import { PopupService } from 'src/app/modules/core/services/popup.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isMobile!: boolean

  constructor(public popupService:PopupService){}
  openSidebar(){
    this.popupService.openSidebaPopup()
  }
}
