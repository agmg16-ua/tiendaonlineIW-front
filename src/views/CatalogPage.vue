<template>
  <!-- Contenedor de filtros -->
  <IonGrid class="filter-grid">
    <IonRow class="filter-row">
      <!-- Buscador de productos por nombre -->
      <IonCol size="12" class="filter-col">
        <IonItem lines="none" class="search-item custom-search">
          <IonInput v-model="textoBusqueda" placeholder="Buscar productos..." clear-input/>
          <IonButton slot="end" @click="aplicarFiltroBusqueda">
            Buscar
          </IonButton>
          <IonButton slot="end" @click="limpiarFiltroBusqueda">
            Limpiar
          </IonButton>
        </IonItem>
      </IonCol>

      <!-- Filtro de precio -->
      <IonCol size="auto" class="filter-col">
        <div>
          <IonButton @click="mostrarFiltro = !mostrarFiltro" size="small" class="filter-button">
            <IonIcon :icon="funnelOutline" slot="start" />
            Precio
          </IonButton>
          <div v-if="mostrarFiltro" class="range-container">
            <IonRange dualKnobs :min="0" :max="200" :step="1" color="primary" v-model="precioRango">
              <div slot="start">€{{ precioRango.lower }}</div>
              <div slot="end">€{{ precioRango.upper }}</div>
            </IonRange>
          </div>
        </div>
      </IonCol>
      <!-- Ordenar por precio -->
      <IonCol size="auto" class="filter-col">
        <div>
          <IonButton @click="mostrarOrden = !mostrarOrden" size="small" class="filter-button">
            Ordenar por Precio
          </IonButton>
          <div v-if="mostrarOrden" class="filter-options">
            <IonButton size="small" @click="ordenarPorPrecio('asc')"
              :class="['filter-option-button', { 'active': ordenActual === 'asc' }]" color="transparent">
              Ascendente
            </IonButton>
            <IonButton size="small" @click="ordenarPorPrecio('desc')"
              :class="['filter-option-button', { 'active': ordenActual === 'desc' }]" color="transparent">
              Descendente
            </IonButton>
            <IonButton size="small" @click="limpiarOrdenacion"
              :class="['filter-option-button', { 'active': ordenActual === null }]" color="transparent">
              Ninguno
            </IonButton>
          </div>
        </div>
      </IonCol>
      <!-- Filtro de material -->
      <IonCol size="auto" class="filter-col">
        <div>
          <IonButton @click="mostrarMaterialFiltro = !mostrarMaterialFiltro" size="small" class="filter-button">
            <IonIcon :icon="funnelOutline" slot="start" />
            Material
          </IonButton>
          <div v-if="mostrarMaterialFiltro" class="filter-options">
            <IonButton v-for="material in materialesDisponibles" :key="material.id" size="small"
              @click="filtrarPorMaterial(material.id)"
              :class="['filter-option-button', { 'active': materialSeleccionado === material.id }]" color="transparent">
              {{ material.nombre }}
            </IonButton>
            <IonButton size="small" @click="limpiarFiltroMaterial"
              :class="['filter-option-button', { 'active': materialSeleccionado === null }]" color="transparent">
              Ninguno
            </IonButton>
          </div>
        </div>
      </IonCol>
      <!-- Filtro de SubCategoria -->
      <IonCol size="auto" class="filter-col">
        <div>
          <IonButton @click="mostrarSubcategoriaFiltro = !mostrarSubcategoriaFiltro" size="small" class="filter-button">
            <IonIcon :icon="funnelOutline" slot="start" />
            Categoría      
          </IonButton>
          <div v-if="mostrarSubcategoriaFiltro" class="filter-options">
            <IonButton v-for="subcategoria in subcategoriasDisponibles" :key="subcategoria.id" size="small"
              @click="filtrarPorSubcategoria(subcategoria.id)"
              :class="['filter-option-button', { 'active': subcategoriaSeleccionada === subcategoria.id }]"
              color="transparent">
              {{ subcategoria.nombre }}
            </IonButton>
            <IonButton size="small" @click="limpiarFiltroSubcategoria"
              :class="['filter-option-button', { 'active': subcategoriaSeleccionada === null }]" color="transparent">
              Ninguno
            </IonButton>
          </div>
        </div>
      </IonCol>
      <!-- Filtro de Colecciones -->
      <IonCol size="auto" class="filter-col">
        <div>
          <IonButton @click="mostrarColeccionFiltro = !mostrarColeccionFiltro" size="small" class="filter-button">
            <IonIcon :icon="funnelOutline" slot="start" />
            Colecciones
          </IonButton>
          <div v-if="mostrarColeccionFiltro" class="filter-options">
            <!-- Botones para cada colección disponible -->
            <IonButton v-for="coleccion in coleccionesDisponibles" :key="coleccion.id" size="small" @click="filtrarPorColeccion(coleccion.id)" :class="['filter-option-button', { 'active': coleccionSeleccionada === coleccion.id }]" color="transparent">
              {{ coleccion.nombre }}
            </IonButton>
            <!-- Botón para limpiar el filtro de colecciones -->
            <IonButton size="small" @click="limpiarFiltroColeccion" :class="['filter-option-button', { 'active': coleccionSeleccionada === null }]" color="transparent">
              Ninguno
            </IonButton>
          </div>
        </div>
      </IonCol>
      <!-- Filtro de Color -->
      <IonCol size="auto" class="filter-col">
        <div>
          <IonButton @click="mostrarColorFiltro = !mostrarColorFiltro" size="small" class="filter-button">
            <IonIcon :icon="funnelOutline" slot="start" />
            Color
          </IonButton>
          <div v-if="mostrarColorFiltro" class="filter-options">
            <IonButton v-for="color in coloresDisponibles" :key="color" size="small" @click="filtrarPorColor(color)" :class="['filter-option-button', { 'active': colorSeleccionado === color }]" color="transparent">{{ color }}</IonButton>
            <IonButton size="small" @click="limpiarFiltroColor" :class="['filter-option-button', { 'active': colorSeleccionado === null }]" color="transparent">
              Ninguno
            </IonButton>
          </div>
        </div>
      </IonCol>
      <!-- Filtro de Talla -->
      <IonCol size="auto" class="filter-col">
        <div>
          <IonButton @click="mostrarTallaFiltro = !mostrarTallaFiltro" size="small" class="filter-button">
            <IonIcon :icon="funnelOutline" slot="start" />
            Talla
          </IonButton>
          <div v-if="mostrarTallaFiltro" class="filter-options">
            <IonButton v-for="talla in tallasDisponibles" :key="talla" size="small" @click="filtrarPorTalla(talla)" :class="['filter-option-button', { 'active': tallaSeleccionada === talla }]" color="transparent">
              {{ talla }}
            </IonButton>
            <IonButton size="small" @click="limpiarFiltroTalla" :class="['filter-option-button', { 'active': tallaSeleccionada === null }]" color="transparent">
              Ninguno
            </IonButton>
          </div>
        </div>
      </IonCol>
    </IonRow>
  </IonGrid>
  <!-- Verifica si hay productos -->
  <IonGrid>
    <IonRow>
      <IonCol size="12" size-md="4" size-lg="2" v-for="producto in productosFiltrados" :key="producto.id">
        <IonCard class="product-card" @click="$router.push({ name: 'DetallesProducto', params: { id: producto.id } })">
          <!-- Imagen del producto en la parte superior -->
          <img v-if="producto.foto_portada" :src="producto.foto_portada"  alt="Foto del producto" class="product-image-container"/>
          <!-- Imagen de ejemplo si no hay foto disponible -->
          <IonImg v-else src="https://via.placeholder.com/80x80?text=Producto" alt="Foto de ejemplo"
            class="product-image" />
          <IonCardContent>
            <!-- Nombre del producto debajo de la imagen -->
            <IonText>
              <p class="product-name">{{ producto.nombre }}</p>
            </IonText>
            <!-- Precio debajo del nombre -->
            <IonText>
              <p><strong>Precio:</strong> €{{ producto.precio.toFixed(2) }}</p>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  </IonGrid>
  <!-- Mostrar mensaje si no hay productos -->
  <div v-if="productosFiltrados.length === 0">
    <p>No hay productos disponibles.</p>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { IonCard, IonCardContent, IonText, IonGrid, IonRow, IonCol, IonImg, IonRange, IonButton, IonIcon, IonItem, IonInput } from '@ionic/vue';
import { funnelOutline } from 'ionicons/icons';


// Definir la interfaz del producto
interface ProductoData {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  color: string;
  foto_portada: string | null;
  sku: string | null;
  coleccionesDatas: { id: number; nombre: string }[];
  productosTallaData: { 
    id: number; 
    productoId: number; 
    talla: { 
      id: number; 
      talla: string; 
    }; 
    stock: number; 
  }[];
  materialData: { id: number; material: string };
  categoriaData: { id: number; categoria: string };
  subcategoriaData: { id: number; subcategoria: string };
}


// Recibir la lista de productos como prop
const props = defineProps<{
  listaProductos: ProductoData[];
}>();

// Variables reactivas
const productosFiltrados = ref<ProductoData[]>([]);
const mostrarFiltro = ref(false);
const mostrarOrden = ref(false);
const precioRango = ref<{ lower: number; upper: number }>({ lower: 0, upper: 200 });
const ordenActual = ref<'asc' | 'desc' | null>(null);
const mostrarMaterialFiltro = ref(false);
const materialesDisponibles = ref<{ id: number; nombre: string }[]>([]);
const materialSeleccionado = ref<number | null>(null);
const mostrarSubcategoriaFiltro = ref(false);
const subcategoriasDisponibles = ref<{ id: number; nombre: string }[]>([]);
const subcategoriaSeleccionada = ref<number | null>(null);
const mostrarColorFiltro = ref(false);
const coloresDisponibles = ref<string[]>([]); // Para almacenar los colores únicos
const colorSeleccionado = ref<string | null>(null);  // Para el color seleccionado
const mostrarTallaFiltro = ref(false); // Para mostrar/ocultar el filtro de tallas
const tallasDisponibles = ref<string[]>([]); // Tallas predefinidas
const tallaSeleccionada = ref<string | null>(null); // Para almacenar la talla seleccionada
const mostrarColeccionFiltro = ref(false); 
const coleccionesDisponibles = ref<{ id: number; nombre: string }[]>([]); // Almacenará las colecciones únicas
const coleccionSeleccionada = ref<number | null>(null);

const textoBusqueda = ref<string>(''); // Input del buscador

// Función para aplicar filtro de búsqueda
const aplicarFiltroBusqueda = () => {
  localStorage.setItem('textoBusqueda', textoBusqueda.value.trim());
  aplicarFiltros();
};

const limpiarFiltroBusqueda = () => {
  localStorage.setItem('textoBusqueda', '');
  textoBusqueda.value = ''
  aplicarFiltros();
}

// Función para aplicar todos los filtros acumulativamente
const aplicarFiltros = () => {
  let productos = [...props.listaProductos];

  // Filtrar por precio (rango)
  productos = productos.filter(producto => 
    producto.precio >= precioRango.value.lower && producto.precio <= precioRango.value.upper
  );

  // Filtrar por subcategoría
  if (subcategoriaSeleccionada.value !== null) {
    productos = productos.filter(producto => producto.subcategoriaData.id === subcategoriaSeleccionada.value);
  }

  // Aplicar filtro de material si está seleccionado
  if (materialSeleccionado.value !== null) {
    productos = productos.filter(producto => producto.materialData.id === materialSeleccionado.value);
  }

  // Filtrar por color
  if (colorSeleccionado.value !== null) {
    productos = productos.filter(producto => producto.color === colorSeleccionado.value);
  }

  // Filtrar por talla: Ajustar acceso a la talla dentro de productosTallaData
  if (tallaSeleccionada.value) {
    productos = productos.filter(producto => 
      producto.productosTallaData.some(tallaData => tallaData.talla.talla === tallaSeleccionada.value)
    );
  }

  // Filtrar por colección
  if (coleccionSeleccionada.value !== null) {
    productos = productos.filter(producto => 
      producto.coleccionesDatas.some(coleccion => coleccion.id === coleccionSeleccionada.value)
    );
  }

  // Aplicar ordenación si está seleccionada
  if (ordenActual.value) {
    productos.sort((a, b) => ordenActual.value === 'asc' ? a.precio - b.precio : b.precio - a.precio);
  }

  const textoGuardado = localStorage.getItem('textoBusqueda');
  if (textoGuardado) {
    textoBusqueda.value = textoGuardado;
  }

  // Verifica que el texto de búsqueda no esté vacío antes de aplicar el filtro
  if (textoBusqueda.value.trim() !== '') {
    const textoNormalizado = textoBusqueda.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    productos = productos.filter(producto =>
      producto.descripcion
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(textoNormalizado)
    );
  }


  productosFiltrados.value = productos;
};

// Función para extraer tallas únicas de los productos
const calcularTallasUnicas = () => {
  const tallasSet = new Set<string>();

  props.listaProductos.forEach(producto => {
    producto.productosTallaData.forEach(tallaData => {
      if (tallaData.talla && tallaData.talla.talla) {
        tallasSet.add(tallaData.talla.talla);
      }
    });
  });

  tallasDisponibles.value = Array.from(tallasSet).sort(); // Convertir a un array y ordenar alfabéticamente
};


// Función para extraer materiales únicos de los productos
const calcularMaterialesUnicos = () => {
  const materialesMap = new Map<number, string>();

  props.listaProductos.forEach(producto => {
    const material = producto.materialData;
    if (material && !materialesMap.has(material.id)) {
      materialesMap.set(material.id, material.material);
    }
  });

  materialesDisponibles.value = Array.from(materialesMap, ([id, nombre]) => ({ id, nombre }));
};

const calcularSubcategoriasUnicas = () => {
  const subcategoriasMap = new Map<number, string>();

  props.listaProductos.forEach(producto => {
    const subcategoria = producto.subcategoriaData;
    if (subcategoria && !subcategoriasMap.has(subcategoria.id)) {
      subcategoriasMap.set(subcategoria.id, subcategoria.subcategoria);
    }
  });

  subcategoriasDisponibles.value = Array.from(subcategoriasMap, ([id, nombre]) => ({ id, nombre }));
};

// Función para extraer colores únicos de los productos
const calcularColoresUnicos = () => {
  const coloresSet = new Set<string>();
  
  props.listaProductos.forEach(producto => {
    const color = producto.color;
    if (color) {
      coloresSet.add(color);  // Añadimos el color al Set (Set asegura valores únicos)
    }
  });

  coloresDisponibles.value = Array.from(coloresSet);  // Convertimos el Set a un array
};

const calcularColeccionesUnicas = () => {
  const coleccionesMap = new Map<number, string>();

  props.listaProductos.forEach(producto => {
    producto.coleccionesDatas.forEach(coleccion => {
      if (!coleccionesMap.has(coleccion.id)) {
        coleccionesMap.set(coleccion.id, coleccion.nombre);
      }
    });
  });

  coleccionesDisponibles.value = Array.from(coleccionesMap, ([id, nombre]) => ({ id, nombre }));
};

const filtrarPorColeccion = (idColeccion: number) => {
  coleccionSeleccionada.value = idColeccion;
  localStorage.setItem('coleccionSeleccionada', idColeccion.toString()); // Guardamos la selección en localStorage
  aplicarFiltros();
};

// Función para limpiar el filtro de colección
const limpiarFiltroColeccion = () => {
  coleccionSeleccionada.value = null;
  localStorage.setItem('coleccionSeleccionada', 'null'); // Limpiamos la selección en el localStorage
  aplicarFiltros();
};


// Función para filtrar por subcategoría
const filtrarPorSubcategoria = (idSubcategoria: number) => {
  subcategoriaSeleccionada.value = idSubcategoria;
  localStorage.setItem('subcategoriaSeleccionada', idSubcategoria.toString());
  aplicarFiltros();
};

// Función para limpiar el filtro de subcategoría
const limpiarFiltroSubcategoria = () => {
  subcategoriaSeleccionada.value = null;
  localStorage.setItem('subcategoriaSeleccionada', 'null');
  aplicarFiltros();
};

// Función para filtrar por talla
const filtrarPorTalla = (talla: string) => {
  tallaSeleccionada.value = talla;
  localStorage.setItem('tallaSeleccionada', talla); // Guardamos la talla seleccionada en localStorage
  aplicarFiltros();
};

// Función para limpiar el filtro de talla
const limpiarFiltroTalla = () => {
  tallaSeleccionada.value = null;
  localStorage.setItem('tallaSeleccionada', 'null'); // Limpiamos el valor en el localStorage
  aplicarFiltros();
};


// Función para filtrar por color
const filtrarPorColor = (color: string) => {
  colorSeleccionado.value = color;
  localStorage.setItem('colorSeleccionado', color);
  aplicarFiltros();
};

// Función para limpiar el filtro de color
const limpiarFiltroColor = () => {
  colorSeleccionado.value = null;
  localStorage.setItem('colorSeleccionado', 'null');
  aplicarFiltros();
};


// Función para filtrar por material
const filtrarPorMaterial = (idMaterial: number) => {
  materialSeleccionado.value = idMaterial;
  localStorage.setItem('materialSeleccionado', idMaterial.toString());
  aplicarFiltros();
};

// Función para limpiar el filtro de material
const limpiarFiltroMaterial = () => {
  materialSeleccionado.value = null;
  localStorage.setItem('materialSeleccionado', 'null');
  aplicarFiltros();
};

// Función para ordenar los productos por precio
const ordenarPorPrecio = (orden: 'asc' | 'desc') => {
  ordenActual.value = orden;
  localStorage.setItem('ordenActual', orden);
  aplicarFiltros();
};

// Función para limpiar la ordenación
const limpiarOrdenacion = () => {
  ordenActual.value = null;
  localStorage.setItem('ordenActual', 'null');
  aplicarFiltros();
};

// Función para inicializar filtros desde localStorage
const aplicarFiltrosDesdeLocalStorage = () => {
  const savedPrecioRango = localStorage.getItem('precioRango');
  if (savedPrecioRango) {
    precioRango.value = JSON.parse(savedPrecioRango);
  }

  const savedOrdenActual = localStorage.getItem('ordenActual');
  if (savedOrdenActual) {
    ordenActual.value = savedOrdenActual === 'null' ? null : savedOrdenActual as 'asc' | 'desc';
  }

  const savedTallaSeleccionada = localStorage.getItem('tallaSeleccionada');
  if (savedTallaSeleccionada && savedTallaSeleccionada !== 'null') {
    const tallaExistente = tallasDisponibles.value.includes(savedTallaSeleccionada);
    tallaSeleccionada.value = tallaExistente ? savedTallaSeleccionada : null;
  } else {
    tallaSeleccionada.value = null;
  }

  const savedMaterialSeleccionado = localStorage.getItem('materialSeleccionado');
  if (savedMaterialSeleccionado) {
    const materialId = parseInt(savedMaterialSeleccionado, 10);
    const materialExistente = materialesDisponibles.value.find(material => material.id === materialId);
    materialSeleccionado.value = materialExistente ? materialId : null;
  }

  const savedColeccionSeleccionada = localStorage.getItem('coleccionSeleccionada');
  if (savedColeccionSeleccionada) {
    const coleccionId = parseInt(savedColeccionSeleccionada, 10);
    const coleccionExistente = coleccionesDisponibles.value.find(coleccion => coleccion.id === coleccionId);
    coleccionSeleccionada.value = coleccionExistente ? coleccionId : null;
  }


  const savedSubcategoriaSeleccionada = localStorage.getItem('subcategoriaSeleccionada');
  if (savedSubcategoriaSeleccionada) {
    const subcategoriaId = parseInt(savedSubcategoriaSeleccionada, 10);
    const subcategoriaExistente = subcategoriasDisponibles.value.find(subcategoria => subcategoria.id === subcategoriaId);
    subcategoriaSeleccionada.value = subcategoriaExistente ? subcategoriaId : null;
  }

  const savedColorSeleccionado = localStorage.getItem('colorSeleccionado');
  if (savedColorSeleccionado) {
    const colorSeleccionadoGuardado = savedColorSeleccionado;
    const colorExistente = coloresDisponibles.value.find(color => color === colorSeleccionadoGuardado);
    colorSeleccionado.value = colorExistente ? colorSeleccionadoGuardado : null;
  }
};

// Guardar el rango de precios en localStorage y aplicar filtros
watch(precioRango, () => {
  localStorage.setItem('precioRango', JSON.stringify(precioRango.value));
  aplicarFiltros();
});

onMounted(() => {
  calcularMaterialesUnicos();
  calcularSubcategoriasUnicas();
  calcularColoresUnicos();
  calcularColeccionesUnicas();
  calcularTallasUnicas();
  aplicarFiltrosDesdeLocalStorage();
  aplicarFiltros();
});
</script>

<style scoped>
.filter-grid {
  margin-bottom: 20px;
  margin-left: 10px;
}

.filter-row {
  display: flex;
  justify-content: flex-start;
  gap: 30px;
}

.filter-col {
  flex: 0 0 auto;
}

.filter-button {
  white-space: nowrap;
}

.range-container {
  margin: 10px 0;
  width: 25%;
  min-width: 200px;
  max-width: 400px;
}

.filter-options {
  position: absolute;
  top: 40px;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: auto;
  padding: 5px;
  border-radius: 5px;
}

.filter-option-button {
  display: inline-block;
  width: 100%;
  margin: 5px 0;
  padding: 5px 10px;
  background-color: white;
  border: 1px solid #ddd;
  font-size: 14px;
  text-transform: none;
  cursor: pointer;
  text-align: center;
  color: black;
}

.filter-option-button:hover {
  background-color: #f1f1f1;
}

.filter-option-button.active {
  background-color: #add8e6;
  /* Azul claro */
  color: white;
}

.product-card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  cursor: pointer;
}

.product-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  background-color: rgb(52, 50, 50);
  overflow: hidden;
}

.product-image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
  white-space: nowrap; /* Evita que el texto pase a la siguiente línea */
  overflow: hidden; /* Oculta el contenido que excede el ancho */
  text-overflow: ellipsis; /* Muestra los puntos suspensivos (...) */
}


.search-item {
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid rgb(177, 175, 175); /* Añade un borde negro */
}


</style>
