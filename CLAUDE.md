# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `ng serve` or `npm start` - runs on http://localhost:4200/
- **Build project**: `ng build` - outputs to `dist/angular-learning-project/`
- **Run tests**: `ng test` - executes unit tests with Karma
- **Watch build**: `ng build --watch --configuration development` - continuous build for development

## Project Architecture

This is an Angular 19.2 standalone application using the new application builder. Key architectural elements:

- **Standalone components**: Uses Angular's standalone components pattern (no NgModules)
- **Services**: Uses dependency injection with `providedIn: 'root'` pattern
- **Configuration**: Bootstrap configuration in `src/app/app.config.ts`
- **Entry point**: `src/main.ts` bootstraps the application with `AppComponent`

## Code Structure

- `src/app/app.component.ts` - Main application component with basic counter functionality
- `src/app/counter.service.ts` - Injectable service for shared counter state
- `src/app/app.config.ts` - Application configuration with zone change detection
- Component prefix: `app-` (defined in angular.json)

## Testing

- Framework: Jasmine with Karma test runner
- Test files: `*.spec.ts` files alongside components
- Configuration: `tsconfig.spec.json` for test-specific TypeScript settings

## DevOps Pipeline Setup

This project includes a comprehensive DevOps pipeline to demonstrate essential concepts:

### Key DevOps Concepts Implemented

1. **Continuous Integration (CI)**: Automated testing and building on every push/PR
2. **Continuous Deployment (CD)**: Automated deployment to GitHub Pages
3. **Code Quality**: Automated linting and formatting checks
4. **Security**: Dependency vulnerability scanning
5. **Infrastructure as Code**: Pipeline configuration in `.github/workflows/`

### Pipeline Components

- **GitHub Actions Workflow**: `.github/workflows/ci-cd.yml`
- **Automated Testing**: Runs unit tests on every commit
- **Build Automation**: Builds production-ready application
- **Code Quality Checks**: ESLint and Prettier integration
- **Security Scanning**: Automated dependency vulnerability checks
- **Deployment**: Automatic deployment to GitHub Pages on main branch

### DevOps Commands

- **Run linting**: `npm run lint` (once configured)
- **Format code**: `npm run format` (once configured)
- **Run all checks locally**: `npm run ci` (once configured)

### Learning Objectives

Through this pipeline, you'll understand:
- How CI/CD pipelines work
- Automated testing in production workflows
- Code quality enforcement
- Security best practices
- Deployment automation
- Infrastructure as Code principles