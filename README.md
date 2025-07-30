# Knockout Page Vite

A modern single-page application framework built with Knockout.js, Page.js, and Vite.

## Overview

Knockout Page Vite is a lightweight framework for building single-page applications using:

- **[Knockout.js](https://knockoutjs.com/)** for MVVM data binding
- **[Page.js](https://github.com/visionmedia/page.js)** for client-side routing
- **[Vite](https://vitejs.dev/)** for fast development and optimized builds
- **[TypeScript](https://www.typescriptlang.org/)** for type safety

The framework provides a structured approach to building SPAs with a focus on:

- Component-based architecture
- Declarative routing
- Middleware for cross-cutting concerns
- Strong typing with TypeScript

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/knockout-page-vite.git
cd knockout-page-vite

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

### Creating a View Model

```typescript
// src/components/HelloWorldViewModel.ts
import { BaseViewModel } from "../core/BaseViewModel";
import * as ko from "knockout";

export class HelloWorldViewModel extends BaseViewModel {
    public message = ko.observable("Hello, World!");
    
    constructor(context: PageJS.Context | undefined) {
        super(context);
        this.setTemplate(`
            <div class="hello-world">
                <h1 data-bind="text: message"></h1>
                <button data-bind="click: changeMessage">Change Message</button>
            </div>
        `);
    }
    
    public changeMessage = (): void => {
        this.message("Hello, Knockout Page Vite!");
    }
}
```

### Adding a Route

```typescript
// src/routes/routes.ts
import { renderView } from "../core/BaseViewModel";
import { HelloWorldViewModel } from "../components/HelloWorldViewModel";

export const routes = [
    {
        path: "/hello",
        handler: (context) => renderView(HelloWorldViewModel, context)
    },
    // Other routes...
];
```

## Documentation

Comprehensive documentation is available in the [docs](docs) directory:

- [Quick Start Guide](docs/README.md#quick-start-guide)
- [API Documentation](docs/README.md#api-documentation)
- [Usage Examples](docs/README.md#usage-examples)
- [Architecture Documentation](docs/architecture.md)
- [Improvement Tasks](docs/tasks.md)

## Features

- **Component-Based Architecture**: Build your application using reusable view models
- **Declarative Routing**: Define routes with support for parameters and middleware
- **Middleware System**: Add cross-cutting concerns like authentication and logging
- **Nested Routes and Guards**: Create complex layouts with protected routes
- **TypeScript Support**: Full type safety for your application code
- **Fast Development**: Instant server start and hot module replacement with Vite

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.