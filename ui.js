// ui.js
export function removeProductSelect() {
  const productoSelect = document.getElementById('producto');
  if (productoSelect) {
    productoSelect.parentNode.removeChild(productoSelect);
  }
}

export function initEventListeners() {
  // Prevent form submissions from reloading the page and handle data saving

  // Reportar ventas form
  const formReportar = document.getElementById('form-reportar');
  formReportar.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement logic to save the sale
    const mensaje = document.getElementById('mensaje-reportar');
    mensaje.textContent = 'Venta reportada correctamente.';
    formReportar.reset();
    setFechaHoy();
  });

  // Inventario form
  const formProducto = document.getElementById('form-producto');
  formProducto.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement logic to save the product
    alert('Producto guardado correctamente.');
    formProducto.reset();
  });

  // Proveedores form
  const formProveedor = document.getElementById('form-proveedor');
  formProveedor.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement logic to save the provider
    alert('Proveedor guardado correctamente.');
    formProveedor.reset();
  });

  // Afiliados form
  const formAfiliado = document.getElementById('form-afiliado');
  formAfiliado.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement logic to save the affiliate
    alert('Afiliado guardado correctamente.');
    formAfiliado.reset();
  });

  // Solicitar informes form
  const formInformes = document.getElementById('form-informes');
  formInformes.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement logic to generate report
    alert('Informe generado.');
  });
}
