# PFA Mock

A modern Next.js setup featuring TypeScript, Tailwind CSS, Framer Motion, Shadcn/ui, and Lucide Icons.

![PFA Mock Screenshot](https://github.com/user-attachments/assets/b2281cbf-52b8-4cae-9cc9-b80c0e5425bb)

## Technologies Used

- **Next.js 15** - The React Framework for the Web with App Router
- **TypeScript** - Static type definitions for JavaScript
- **Tailwind CSS v4** - A utility-first CSS framework for rapid UI development
- **Framer Motion** - A production-ready motion library for React
- **Shadcn/ui** - Beautiful and accessible components built with Radix UI
- **Lucide React** - Beautiful & consistent icon pack

## Features

- ✅ **Modern Stack**: Latest versions of all technologies
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Animations**: Smooth animations with Framer Motion
- ✅ **Component Library**: Pre-built accessible components with Shadcn/ui
- ✅ **Icons**: Comprehensive icon set with Lucide React
- ✅ **Dark Mode**: Built-in dark mode support
- ✅ **Performance**: Optimized for production with Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/frimpongopoku/pfa-mock.git
cd pfa-mock
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles with Tailwind and custom CSS variables
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/
│   └── ui/               # Shadcn/ui components
│       ├── button.tsx    # Button component
│       └── card.tsx      # Card component
└── lib/
    └── utils.ts          # Utility functions (cn helper)
```

## Adding Components

This project uses Shadcn/ui for component management. To add new components:

```bash
npx shadcn@latest add [component-name]
```

For example, to add a dialog component:
```bash
npx shadcn@latest add dialog
```

## Customization

### Tailwind CSS
The project uses Tailwind CSS v4 with custom CSS variables defined in `src/app/globals.css`. You can customize colors, spacing, and other design tokens by modifying the CSS variables.

### Components
All UI components are located in `src/components/ui/` and can be customized to match your design requirements.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Shadcn/ui Documentation](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
