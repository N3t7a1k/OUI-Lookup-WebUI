# OUI Lookup Service
## Introduction
This web service allows users to easily search and retrieve OUI (Organizationally Unique Identifier) information based on MAC addresses or manufacturer names.
![Home](img/1.png)
![Search](img/2.png)

## Environment Configurations
The webui directory contains its own .env file with the following configurations:
```
NEXT_PUBLIC_BASE_URL=https://oui.n3t7a1k.io
NEXT_PUBLIC_API_BASE_URL=https://ouiapi.n3t7a1k.io
NEXT_PUBLIC_BASE_URL: This is the base URL for the WebUI, which is used throughout the frontend for routing and resource loading.
NEXT_PUBLIC_API_BASE_URL: This is the base URL for the API server, which is used to make API requests from the frontend.
```

