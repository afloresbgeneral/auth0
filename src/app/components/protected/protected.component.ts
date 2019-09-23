import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.userProfile$.subscribe( profile => {
      console.log(profile);
    });
  }

}
