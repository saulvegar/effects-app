import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import * as usuarioActions from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit, OnDestroy {
  routerSubs: Subscription;
  usuario: Usuario;
  loading: boolean = false;
  error: any = null;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('usuario').subscribe(({ user, loading, error }) => {
      this.usuario = user;
      this.loading = loading;
      this.error = error;
    });

    this.routerSubs = this.router.params.subscribe(({ id }) => {
      this.store.dispatch(usuarioActions.cargarUsuario({ id }));
    });
  }

  ngOnDestroy() {
    this.routerSubs.unsubscribe();
  }

}
