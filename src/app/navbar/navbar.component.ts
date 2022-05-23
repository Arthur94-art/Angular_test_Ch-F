import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthAdminService} from "../admin/auth/services/authAdmin.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authAdminService: AuthAdminService, private router: Router) {
  }

  ngOnInit(): void {
  }

  getPath(path: string) {
    return this.authAdminService ? ['/admin', path] : ['/user',path]
  }

  logout(e: Event) {
    e.preventDefault();
    this.authAdminService.logout();
    this.router.navigate(['/admin', 'login'])
  }
}