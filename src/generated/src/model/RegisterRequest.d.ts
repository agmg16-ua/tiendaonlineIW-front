declare module '@/generated/src/model/RegisterRequest' {
  export default class RegisterRequest {
    constructor(
      nombre: string,
      apellidos: string,
      fechaNacimiento: Date,
      genero: GeneroEnum,
      email: string,
      telefonoCodPais: number,
      telefono: number,
      nombreUsuario: string,
      password: string,
      calle: string,
      numero: number,
      ciudad: string,
      provincia: string,
      cp: number,
      pais: string
    );

    static constructFromObject(data: any, obj?: RegisterRequest): RegisterRequest;

    nombre: string;
    apellidos: string;
    fechaNacimiento: Date;
    genero: GeneroEnum;
    email: string;
    telefonoCodPais: number;
    telefono: number;
    nombreUsuario: string;
    password: string;
    calle: string;
    numero: number;
    ciudad: string;
    provincia: string;
    cp: number;
    pais: string;
  }

  // Define la enumeración fuera de la clase

  enum GeneroEnum {
    HOMBRE = 'HOMBRE',
    MUJER = 'MUJER',
    OTRO = 'OTRO',
    PREFIERO_NO_DECIR = 'PREFIERO_NO_DECIR',
  }
  

}
