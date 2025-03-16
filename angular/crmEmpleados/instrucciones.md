## APP frontend de un CRM de empleados

- usar tailwind como framework de css
  - https://tailwindcss.com/docs/installation/using-vite
  - https://flowbite.com/

- url de nuestra API: https://crm-empleados-v2.onrender.com/api/empleados
    - entidades: USUARIOS, EMPLEADOS (interfaz, servicio)

- Componentes
    - Home => '/home ' => HomeComponent
    - Login => '/login' => LoginComponent
    - Register ?? => '/register' => RegisterUserComponent
    - Dashboard => '/dashboard' => DashboardComponent
        - Rutas hijas
            - Lista empleados
            - crear un empleado
            - actualizar empleado
            - Borrar un empleado (no va a ser una ruta, sino que un evento)

- Componentes - Share
    - DashboardNav va a ser la navegación de la página de dashboard

- Services
    - Employees
    - Users

- Interfaces
    - IEmployee
    - IUser


// para hacer un login de usuario, tengo que pedir:
    - https://crm-empleados-v2.onrender.com/api/login
        {
            "password": "12345",
            "email": "jj@gmail.com"
        }