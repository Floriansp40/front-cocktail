import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email : '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user)
    this.authService.login(this.user).subscribe(
      data => this.tokenService.saveToken(data.access_token),
      err => console.error('ici une erreur', err)
    )
  }

}
