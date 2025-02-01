# ExpertConnect

ExpertConnect is a Laravel and Next.js application designed to connect experts with users seeking advice and services.

## Features

- User authentication and authorization
- Expert profiles and reviews
- Booking and scheduling system
- Real-time chat and notifications

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/70ayush-dev/expertconnect.git
    cd expertconnect
    ```

2. Install dependencies:
    ```bash
    composer install
    npm install
    ```

3. Set up environment variables:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. Configure your database in the `.env` file and run migrations:
    ```bash
    php artisan migrate
    ```

5. Start the development server:
    ```bash
    php artisan serve
    npm run dev
    ```

## Usage

- Visit `http://localhost:8000` to access the application.
- Register as a user or expert to start using the platform.

## Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact us at support@expertconnect.com.
