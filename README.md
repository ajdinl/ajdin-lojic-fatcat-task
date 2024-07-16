# Ajdin Lojic FatCat Task

## Features Implemented

1. **Transfer the project to TypeScript**: The entire project has been migrated to TypeScript to leverage type safety and enhanced development experience.
2. **Create a List Component**: A reusable List component has been created to showcase a list of items dynamically.
3. **Create a Form Generator Component**: A Form Generator component has been added to dynamically generate forms based on provided configurations.
4. **Create a Page Generator Component**: This component dynamically renders different sections and components based on provided data.

## Instructions to Run the Project

Please follow the steps below to run the project:

1. **Clone the Repository**

    Open your terminal and run the following command to clone the repository:

    ```bash
    git clone git@github.com:ajdinl/ajdin-lojic-fatcat-task.git
    ```

2. **Navigate to the Project Directory**

    Change the directory to the project folder created during the cloning process:

    ```bash
    cd ajdin-lojic-fatcat-task/
    ```

3. **Install Dependencies**

    Install the necessary dependencies using npm:

    ```bash
    npm install
    ```

4. **Rename the Environment File**

    Rename the `.env-example` file to `.env`:

    ```bash
    mv .env-example .env
    ```

5. **Run the Project**

    After a successful installation, run the project in development mode:

    ```bash
    npm run dev
    ```

    The project will be available at:

    ```
    http://localhost:3000/
    ```

6. **Check TypeScript Errors**

    To check TypeScript errors, you can use the following command:

    ```bash
    npm run tscheck
    ```

## Implementation Details

### TypeScript Migration

The project has been fully migrated to TypeScript. TypeScript helps in identifying type-related issues during development, making the codebase more reliable and easier to maintain.

### List Component

A generic List component has been implemented to render lists dynamically based on the data provided. This component improves reusability and simplifies the coding structure.

### Form Generator Component

The Form Generator component dynamically creates forms based on provided configuration objects, allowing for a flexible and reusable way to generate various form inputs.

### Page Generator Component

The Page Generator component is designed to dynamically render different sections and nested components based on the configuration provided in the props. This allows for highly customizable and dynamic web pages.

### Maintainer

-   Ajdin Lojic

Thank you for using this project!
