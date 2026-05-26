import { Rol } from "./rol";

export interface Usuario{
    id_usuario: string;
    nombre_completo: string;
    correo: string;
    password_hash: string;
    celular: string;
    direccion: string;
    ciudad: string;
    foto_perfil?: string;
    id_rol_FK: string;

    Rol?: Rol;
}