import { Component } from '@angular/core';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input/lib/ngx-intl-tel-input.module';
import {ButtonModule} from 'primeng/button'
import { IntroComponent } from '../../components/intro/intro.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ButtonModule,IntroComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
