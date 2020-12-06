import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction(
  '[Counter Component] Cargar Usuario',
  props<{ id: string }>()
);
export const cargarUsuarioSuccess = createAction(
  '[Counter Component] Cargar Usuario Success',
  props<{ usuario: Usuario }>()
);
export const cargarUsuarioError = createAction(
  '[Counter Component] Cargar Usuario Error',
  props<{ payload: any }>()
);