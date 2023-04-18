import { Component } from '@angular/core';
import{faYoutube} from '@fortawesome/free-brands-svg-icons'
import{faFacebook} from '@fortawesome/free-brands-svg-icons'
import{faTwitter} from '@fortawesome/free-brands-svg-icons'
import{faInstagram} from '@fortawesome/free-brands-svg-icons'
import{faLinkedin}from '@fortawesome/free-brands-svg-icons'
import{faThumbsUp} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  yt= faYoutube;
  fb= faFacebook;
  twt= faTwitter;
  insta= faInstagram;
  lin= faLinkedin;
  up= faThumbsUp;

}
