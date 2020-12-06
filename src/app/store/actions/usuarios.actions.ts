import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[Counter Component] Cargar Usuarios');
export const cargarUsuariosSuccess = createAction(
  '[Counter Component] Cargar Usuarios Success',
  props<{ usuarios: Usuario[] }>()
);
export const cargarUsuariosError = createAction(
  '[Counter Component] Cargar Usuarios Error',
  props<{ payload: any }>()
);