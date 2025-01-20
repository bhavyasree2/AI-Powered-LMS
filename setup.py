import os

structure = {
    "frontend": {
        "public": {},
        "src": {
            "components": {},
            "pages": {},
            "App.js": "",
            "index.js": "",
            "styles.css": ""
        },
        "package.json": "",
        "README.md": ""
    },
    "backend": {
        "app": {
            "controllers": {},
            "models": {},
            "services": {},
            "views": {}
        },
        "conf": {},
        "build.sbt": "",
        "README.md": ""
    },
    "database": {
        "migrations": {},
        "schema.sql": "",
        "seed.sql": ""
    },
    "analytics": {
        "models": {},
        "notebooks": {},
        "analysis.py": ""
    },
    "tests": {
        "frontend": {},
        "backend": {},
        "analytics": {}
    },
    ".gitignore": "",
    "README.md": "",
    "LICENSE": ""
}

def create_structure(base, structure):
    for name, content in structure.items():
        path = os.path.join(base, name)
        if isinstance(content, dict):
            os.makedirs(path, exist_ok=True)
            create_structure(path, content)
        else:
            with open(path, 'w') as f:
                f.write(content)

create_structure('.', structure)
print("Project structure created successfully!")
