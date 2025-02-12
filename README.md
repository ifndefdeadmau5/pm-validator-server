# ProseMirror Backend

A simple Node.js backend for validating, transforming, and handling ProseMirror documents. This backend uses **Koa** as the server framework and leverages ProseMirror libraries (`prosemirror-model`, `prosemirror-transform`) to operate on ProseMirror content.

---

## Features

- **Document Validation**: Validate incoming ProseMirror documents against a predefined schema.
- **Simple Transformations**: Perform operations on ProseMirror documents, such as adding new nodes or modifying content.
- **Extensible Schema**: Easily extend the backend with custom ProseMirror nodes and marks.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (or **yarn**)

---

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

### Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:3000` by default.

---

### API Endpoints

#### **1. Validate ProseMirror Content**

**`POST /validate`**

Validate a ProseMirror document against the schema.

- **Request Body**:

  ```json
  {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [{ "type": "text", "text": "Hello, world!" }]
      }
    ]
  }
  ```

- **Response**:
  - **Valid Document**:
    ```json
    {
      "valid": true,
      "message": "Document is valid",
      "doc": { ... }
    }
    ```
  - **Invalid Document**:
    ```json
    {
      "valid": false,
      "message": "Unknown node type: ..."
    }
    ```

---

#### **2. Transform ProseMirror Content**

**`POST /transform`**

Apply a simple transformation to the ProseMirror document (e.g., add a new paragraph with sample text).

- **Request Body**:

  ```json
  {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [{ "type": "text", "text": "Hello, world!" }]
      }
    ]
  }
  ```

- **Response**:
  ```json
  {
    "valid": true,
    "transformedDoc": {
      "type": "doc",
      "content": [
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "This is a sample text." }]
        },
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "Hello, world!" }]
        }
      ]
    }
  }
  ```

---

### Project Structure

```plaintext
.
├── schema.json         # ProseMirror schema definition
├── src/
│   ├── index.ts        # Main application entry point
│   ├── validate.ts     # Document validation logic
│   ├── transform.ts    # Document transformation logic
├── package.json        # Project dependencies
└── README.md           # Documentation
```

---

### Development

#### Run the server in development mode:

```bash
npm run dev
```

#### Lint the code:

```bash
npm run lint
```

#### generate types

```bash
npm run generate
```

---

### Contributing

Feel free to fork the repository and submit pull requests to enhance the functionality or fix bugs.

---

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

### Questions?

If you have any questions or issues, please feel free to open an issue in the repository.
