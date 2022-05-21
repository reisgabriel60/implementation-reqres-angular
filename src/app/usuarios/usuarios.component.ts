import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersData, UsuariosService} from "./usuarios.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {map} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'avatar',
    'first_name',
    'last_name',
    'email'
  ];
  dataSource!: UsersData;

  constructor(private usuariosService: UsuariosService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.getData(1, 5);
  }

  getData(page: number, size: number) {
    this.usuariosService.retornaListaUsuarios(page, size)
      .pipe(map((usersData: UsersData) => this.dataSource = usersData))
      .subscribe();
  }

  onPaginatorChange(event: PageEvent) {
    this.getData(event.pageIndex + 1, event.pageSize)
  }

  exit() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/')
  }
}
